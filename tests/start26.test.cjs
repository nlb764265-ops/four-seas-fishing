const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),E=require('../engine.js'),root=path.resolve(__dirname,'..');let checks=0;const test=(n,f)=>{f();checks++;console.log('PASS '+n)};

test('Sun Moon Lake is tier 1 and the only starter; the other Taiwan waters are tier 2 or 3',()=>{assert.deepEqual(E.region('sunmoon').license,{tier:1,cost:150,atlas:8});assert.deepEqual(E.starters().map(r=>r.id),['sunmoon']);const tw={zengwen:2,qigu:2,guandu:2,keelung:2,longdong:2,penghu:3,kenting:3};for(const [id,t] of Object.entries(tw))assert.equal(E.region(id).license.tier,t,id);assert(E.D.regions.every(r=>r.license),'every water now has a licence tier')});

test('a new game keeps 80 yuan and 20 dough and owns the starting licence for free',()=>{const s=E.initial(0);assert.equal(s.region,'sunmoon');assert.deepEqual(s.unlocked,['sunmoon']);assert.equal(s.money,80);assert.equal(s.bait.dough,20);assert.equal(s.selectedBait,'dough');assert.equal(E.licenseInfo(s,'sunmoon'),null);assert.match(s.logs[0].text,/起點日月潭，已取得當地釣魚許可證/);assert(E.valid(s))});

test('a start that is not tier 1 falls back to Sun Moon Lake',()=>{for(const id of ['zengwen','taihu','missing',undefined])assert.equal(E.initial(0,id).region,'sunmoon',String(id))});

test('once another region has a tier-1 water, a game can start there and must buy Sun Moon Lake',()=>{const r=E.region('taihu'),old=r.license;r.license={tier:1,cost:150,atlas:8};try{assert.deepEqual(E.starters().map(x=>x.id),['sunmoon','taihu']);const s=E.initial(0,'taihu');assert.equal(s.region,'taihu');assert.deepEqual(s.unlocked,['taihu']);assert.equal(s.money,80);assert.equal(s.bait.dough,20);assert(E.valid(s));assert.equal(E.licenseInfo(s,'taihu'),null);assert.deepEqual(E.licenseInfo(s,'sunmoon'),{tier:1,cost:150,atlas:8,caught:0,ready:false});const j=E.migrate(JSON.parse(JSON.stringify(s)),0);assert(j&&j.region==='taihu')}finally{r.license=old}});

test('saves from earlier versions keep their owned waters and stay valid',()=>{const s=E.initial(0);s.unlocked.push('zengwen','guandu');s.region='guandu';assert(E.valid(s));assert.equal(E.licenseInfo(s,'zengwen'),null);const bad=E.initial(0);bad.unlocked=[];assert(!E.valid(bad))});

test('new games choose among tier-1 waters; a single one skips the choice',()=>{const app=fs.readFileSync(path.join(root,'app.js'),'utf8');for(const t of ['function chooseStart','E.starters()','選擇起點','免費取得當地釣魚許可證','E.initial(Date.now(),id)','if(list.length<2)return onPick'])assert(app.includes(t),t)});

console.log(`start26: ${checks} checks passed`);
