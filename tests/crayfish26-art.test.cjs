const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),E=require('../engine.js'),D=E.D,old=require('../../四海釣遊記0.25/data.js'),root=path.resolve(__dirname,'..');
const scope={E,D,state:E.initial(0),document:{addEventListener(){}}};vm.createContext(scope);vm.runInContext(fs.readFileSync(path.join(root,'collections.js'),'utf8'),scope);
const rows=JSON.parse(fs.readFileSync(path.join(root,'assets/expand26-art-manifest.json'),'utf8'));assert.equal(rows.length,27);let checked=0;
function art(kind,id,known){return vm.runInContext(`pixelArt(${JSON.stringify(kind)},${JSON.stringify(id)},${known})`,scope)}
function check(kind,id){assert.equal(art(kind,id,false),'',id+' undiscovered');const html=art(kind,id,true),match=html.match(/url\((assets\/[^)]+\.webp)\)/);assert(match,id+' has WebP art');assert(fs.existsSync(path.join(root,match[1])),id+' exists');assert(fs.existsSync(path.join(root,match[1].replace(/\.webp$/,'.png'))),id+' keeps its PNG master');assert(!html.includes('NaN'),id+' valid proportions');checked++}
// Every species, recipe and restaurant dish added in 0.26 renders WebP art and stays hidden until discovered.
for(const s of D.species.slice(old.species.length))check('fish',s.id);
const oldMeals=new Set([...old.recipes,...old.dishes].map(x=>x.id));for(const m of [...D.recipes,...D.dishes].filter(m=>!oldMeals.has(m.id)))check('meal',m.id);
for(const [dine,home] of [['dine-hongze-shisanxiang','xuyi-shisanxiang'],['dine-hongze-crab','taihu-steamed-crab'],['dine-vattern-krafter','kokta-krafter'],['dine-thames-jellied','jellied-eels'],['dine-thames-whitebait','whitebait']])assert.equal(art('meal',dine,true),art('meal',home,true),dine);
for(const r of rows){assert(Math.max(...r.size)<=320,r.id);assert(r.webpBytes>0&&r.pngBytes>0,r.id);assert(fs.existsSync(path.join(root,r.webp)),r.id);assert(fs.existsSync(path.join(root,r.file)),r.id)}
console.log('PASS '+checked+' 0.26 image mappings, 27 transparent assets, hidden entries and shared restaurant artwork');
