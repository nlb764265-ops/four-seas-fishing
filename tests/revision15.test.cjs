const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path'),E=require('../engine.js'),D=E.D;
let checks=0;const test=(name,fn)=>{fn();console.log('PASS '+name);checks++};
test('all 56 meals have concrete preparation descriptions, independent of effect-family labels',()=>{
 for(const d of [...D.recipes,...D.dishes]){assert(d.preparation,d.id);assert(!['湯鍋燉煮','清蒸水煮','煎炸烤燻'].includes(d.preparation),d.id)}
 assert.equal(D.recipes.length+D.dishes.length,108);
 for(const d of [E.recipe('kibinago-sashimi'),E.dish('dine-kenting-sashimi')]){assert.equal(d.method,'raw');assert.match(d.preparation,/生食|生切/);assert.equal(d.effect,{'kibinago-sashimi':'double','dine-kenting-sashimi':'lure'}[d.id])}
 assert.equal(E.dish('dine-greifswald-bismarck').method,'pickle');assert.equal(E.recipe('westlake').method,'steam');assert.equal(E.recipe('westlake').effect,'lure');assert.equal(E.recipe('taimeshi').preparation,'先烤魚再與米同炊');
});
test('combined progress includes each discovered fish and plant once, even after sale',()=>{
 const s=E.initial(0);assert.equal(E.collectionProgress(s).total,256);assert.deepEqual(E.collectionProgress(s).fish,{caught:0,total:201});assert.deepEqual(E.collectionProgress(s).plants,{caught:0,total:35});
 s.book.carp={count:12,best:1};s.plants.hyacinth=8;assert.equal(E.collectionProgress(s).caught,2);assert.equal(s.items.length,0);
 s.book.unknown={count:1};s.plants.unknown=1;assert.equal(E.collectionProgress(s).caught,2);
 for(const f of D.fish)s.book[f.id]={count:1,best:f.min};for(const p of D.plants)s.plants[p.id]=1;assert.equal(E.collectionProgress(s).caught,236);
});
test('0.14 saves retain plant collection and active meal when loaded in 0.15',()=>{
 const s=E.initial(1000);s.book.carp={count:1,best:1};s.total=1;s.plants.hyacinth=2;s.weeds=2;s.buff={id:'dine-kenting-sashimi',left:20,since:1000};const t=E.migrate(JSON.parse(JSON.stringify(s)),1000);assert(t);assert.equal(E.collectionProgress(t).caught,2);assert.deepEqual(t.buff,s.buff);assert.equal(t.money,s.money);
});
test('twenty-four pixel sheets have 348 mappings and 341 unique slots and never draw an undiscovered species',()=>{
 const source=fs.readFileSync(path.join(__dirname,'../collections.js'),'utf8');
 const scope={D,D,document:{addEventListener(){}},E,state:E.initial(0)};vm.createContext(scope);vm.runInContext(source,scope);
 const slots=vm.runInContext('pixelSlots',scope);assert.equal(Object.values(slots).flatMap(Object.values).length,348);assert.equal(new Set(Object.values(slots).flatMap(Object.values)).size,341);
 for(const f of D.fish)assert.notEqual(slots.fish[f.id],undefined,f.id);
 for(const p of D.plants)assert.notEqual(slots.plant[p.id],undefined,p.id);
 for(const d of [...D.recipes,...D.dishes])assert.notEqual(slots.meal[d.id],undefined,d.id);
 const bounds=vm.runInContext('pixelBounds',scope);for(const a of Object.values(bounds))for(const [x,y,w,h]of a.rects){assert(x>=0&&y>=0&&w>0&&h>0);assert(x+w<=a.width&&y+h<=a.height)}
 assert(bounds[2].rects[0][0]+bounds[2].rects[0][2]<bounds[2].rects[1][0],'jaguar crop excludes preceding tail');
 assert(vm.runInContext("pixelArt('fish','jaguar',true)",scope).includes('--art-position:'));
 for(const [kind,entries]of Object.entries(slots))for(const id of Object.keys(entries)){assert.equal(vm.runInContext(`pixelArt('${kind}','${id}',false)`,scope),'');assert.match(vm.runInContext(`pixelArt('${kind}','${id}',true)`,scope),/pixel-art/)}
 assert.equal(vm.runInContext("pixelArt('fish','unknown-id',true)",scope),'');
 for(let i=1;i<=18;i++){const png=fs.readFileSync(path.join(__dirname,'../assets/pixel-atlas-'+String(i).padStart(2,'0')+'-clear.png'));assert.equal(png.subarray(1,4).toString(),'PNG');assert.equal(png.readUInt32BE(16),png.readUInt32BE(20));assert.equal(png[25],6,'RGBA required')}
 for(const [kind,entries]of Object.entries(slots))for(const [id,slot]of Object.entries(entries))assert(vm.runInContext(`pixelArt('${kind}','${id}',true)`,scope).includes('pixel-sheet-'+(Math.floor(slot/16)+1)));
});

test('detail art moves into the heading once; plant labels follow the author wording',()=>{
 const source=fs.readFileSync(path.join(__dirname,'../collections.js'),'utf8'),scope={document:{addEventListener(){}},E,state:E.initial(0)};vm.createContext(scope);vm.runInContext(source,scope);
 const html=vm.runInContext("detailShell('atlas','<div class=\"detail-head\"><div><h2>布袋蓮</h2></div>'+closeButton()+'</div>'+pixelArt('plant','hyacinth',true,true)+'<p>description</p>',false)",scope);
 assert.equal((html.match(/pixel-large/g)||[]).length,1);assert(html.indexOf('pixel-large')<html.indexOf('detail-close'));assert(html.indexOf('pixel-large')<html.indexOf('<p>description'));
 assert.equal(E.plant('hyacinth').type,'浮游植物');assert.equal(E.plant('waterlettuce').type,'浮游植物');
 assert(vm.runInContext("pixelArt('meal','fishhead-pot',true)",scope).includes('pixel-meal-fishhead'));
 const css=fs.readFileSync(path.join(__dirname,'../style.css'),'utf8');assert(css.includes("url('assets/meal-fishhead-pot.webp')"));const single=fs.readFileSync(path.join(__dirname,'../assets/meal-fishhead-pot.png'));assert.equal(single[25],6);
});
test('combined plant rows remain anonymous and gain art only after collection',()=>{
 const source=fs.readFileSync(path.join(__dirname,'../collections.js'),'utf8'),s=E.initial(0),scope={document:{addEventListener(){}},E,state:s};vm.createContext(scope);vm.runInContext(source,scope);
 const before=vm.runInContext("atlasPlantRows([E.plant('hyacinth')])",scope);assert(!before.includes('布袋蓮'));assert(!before.includes('pixel-art'));assert(before.includes('未採集 01'));
 s.plants.hyacinth=1;const after=vm.runInContext("atlasPlantRows([E.plant('hyacinth')])",scope);assert(after.includes('布袋蓮'));assert(after.includes('pixel-art'));assert(after.includes('data-all-plant-pick'));
});
console.log(`revision15: ${checks} checks passed`);


