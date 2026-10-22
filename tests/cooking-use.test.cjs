const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),E=require('../engine.js'),D=E.D;
const removed=['topmouth','mingtangoby','giurinus','pleco','sergeant','stripey','tarpon','mono','mudskipper'];
let checks=0;const test=(name,fn)=>{fn();checks++;console.log('PASS '+name)};
const fresh=()=>{const s=E.initial(0);s.money=1000;return s};
const item=id=>({type:'fish',fish:id,kg:E.fish(id).min,baseValue:E.fish(id).price,baseBounty:E.fish(id).bounty,region:D.regions.find(r=>r.pool[id]).id});
test('nine fish retain their records but are absent from every recipe',()=>{
 assert.equal(E.recipe('panfry').fishes.length,121);
 assert.deepEqual(D.fish.filter(f=>f.edible&&!f.cookable).map(f=>f.id).sort(),[...removed,'fivestripewrasse','duckbillsleeper','frillfingoby','convict','jewelcichlid','raccoonbutterfly','threadfinbutterfly'].sort());
 for(const id of removed){const f=E.fish(id);assert(f.edible);assert(!f.cookable);assert(f.cookingNote);assert(!D.recipes.some(r=>r.fishes.includes(id)))}
 for(const r of D.recipes)for(const id of r.fishes)assert(E.fish(id).cookable,r.id+' '+id);
 for(const id of ['qili','candidia','carp','gourami','munense'])assert(E.recipe('panfry').fishes.includes(id),id);
});
test('removed ingredients cannot be cooked, with no fish, money or effect consumed',()=>{
 for(const id of removed){const s=fresh();s.items=[item(id)];s.book[id]={count:1,best:E.fish(id).min};s.buff={id:'soup',left:20,since:0};const before=JSON.stringify(s);assert.equal(E.cook(s,'panfry',0,id),'請選擇魚材');assert.equal(JSON.stringify(s),before,id)}
});
test('old active pan-fry effects remain valid through save import and settlement',()=>{
 for(const id of removed){const s=fresh();s.items=[item(id)];s.book[id]={count:1,best:E.fish(id).min};s.buff={id:'panfry',left:17,since:0,fish:id};const t=E.migrate(JSON.parse(JSON.stringify(s)),0);assert(t,id);assert(E.valid(t));assert.deepEqual(t.buff,s.buff);assert.deepEqual(t.items,s.items);assert.deepEqual(t.book,s.book);assert.equal(E.mealName(t.buff),'煎'+E.fish(id).name);E.settle(t,1000);assert(E.valid(t));assert.equal(t.buff.left,17)}
 for(const id of ['puffer','unknown']){const s=fresh();s.buff={id:'panfry',left:17,fish:id};assert(!E.valid(s))}
});
test('common ingredients still cook and consume exactly one cheapest fish',()=>{
 const s=fresh();s.items=[{...item('carp'),baseValue:30},{...item('carp'),baseValue:12},item('pleco')];E.cook(s,'panfry',0,'carp');assert.deepEqual(s.items.map(i=>i.fish),['carp','pleco']);assert.equal(s.items[0].baseValue,30);assert.equal(s.money,1000-E.recipe('panfry').cost);assert.equal(E.recipe('panfry').cost,15);assert(E.valid(s));
});
test('removed-only discoveries never unlock pan-fry or a named recipe',()=>{
 const state=fresh(),scope={document:{addEventListener(){}},E,D,state};vm.createContext(scope);vm.runInContext(fs.readFileSync(require.resolve('../collections.js'),'utf8'),scope);
 for(const id of removed)state.book[id]={count:1,best:E.fish(id).min};
 assert.equal(vm.runInContext('D.recipes.filter(kitchenUnlocked).length',scope),0);
 assert.equal(vm.runInContext("fishFoodTag(E.fish('pleco'))",scope),'不作料理');
 assert.equal(vm.runInContext("fishFoodTag(E.fish('puffer'))",scope),'不可食用');
 assert.equal(vm.runInContext("fishFoodTag(E.fish('carp'))",scope),'可食用');
 state.book.carp={count:1,best:.5};assert(vm.runInContext("kitchenUnlocked(E.recipe('panfry'))",scope));
});
console.log(`cooking-use: ${checks} checks passed`);
