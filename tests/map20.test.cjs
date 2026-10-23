const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),E=require('../engine.js');
const root=path.join(__dirname,'..'),read=f=>fs.readFileSync(path.join(root,f),'utf8');
let n=0;const test=(name,fn)=>{fn();n++;console.log('PASS',name)};
const scope={window:{}};vm.createContext(scope);vm.runInContext(read('water-data.js'),scope);const W=scope.window.WORLD_WATER;
const near=(f,r,d)=>f.g.some(ring=>ring.some(([x,y])=>Math.abs(x-r.lon)<d&&Math.abs(y-r.lat)<d))||(f.l&&Math.abs(f.l[0]-r.lon)<d&&Math.abs(f.l[1]-r.lat)<d);

test('every fishing spot has named water drawn within 0.3 degrees',()=>{for(const r of E.D.regions)assert(W.local.some(f=>f.n&&near(f,r,.3)),r.id)});
test('water data is well formed and every local feature names its OSM source',()=>{assert.equal(W.boxes.length,7);for(const f of W.local){assert(['river','lake','sea'].includes(f.k));assert(/^OSM (node|way|relation)\/\d+$/.test(f.src)||(f.src==='Natural Earth 1:10m 海岸'||f.src==='遊戲釣點概略位置')&&!f.g.length);for(const ring of f.g)for(const p of ring)assert(Number.isFinite(p[0])&&Number.isFinite(p[1]))}for(const list of [W.lakes,W.rivers])for(const f of list)assert(f.z>=1)});
test('main map zooms to x200, the sidebar map shows x300, and water uses the pale grey-blue',()=>{const map=read('map.js'),app=read('app.js');assert(map.includes("this.maxZoom=canvas.id==='miniMap'?300:200"));assert(!map.includes('Math.min(80,z)'));assert(map.includes('LAKE=[164,190,190]'));assert.equal((app.match(/miniMap\.setZoom\(300\)/g)||[]).length,2);assert(map.includes('if(!mini&&PixelWorld.waterLabels)'))});
test('players can hide water names and the choice is remembered; OSM is credited',()=>{const html=read('index.html'),app=read('app.js'),map=read('map.js');assert(html.includes('id="waterLabels"'));assert(html.includes('© OpenStreetMap 貢獻者'));assert(html.indexOf('world-data.js')<html.indexOf('water-data.js')&&html.indexOf('water-data.js')<html.indexOf('map.js'));assert(app.includes("localStorage.setItem('four-seas-water-labels'"));assert(map.includes("localStorage.getItem('four-seas-water-labels')!=='off'"))});
console.log('map20: '+n+' checks passed');
