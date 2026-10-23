const assert=require('node:assert/strict'),E=require('../engine.js'),D=E.D;
let checks=0;const test=(name,fn)=>{fn();console.log('PASS '+name);checks++};
const now=Date.UTC(2026,9,22,4),animal=id=>D.animals.find(a=>a.id===id);
const batch={'tenaga-karaage':['nipponense','fry','japan'],'sake-steam-crab':['pelagicus','steam','taiwan'],'ginataang-alimasag':['pelagicus','soup','seasia'],'iidako-nitsuke':['fangsiao','soup','japan'],'aori-ichiyaboshi':['lessoniana','fry','japan'],'squid-bihun':['chinensis','soup','taiwan']};
const withAnimal=(id,kg,baseValue)=>{const s=E.initial(now);s.money=1000;s.region=D.regions.find(r=>r.animals[id]).id;if(!s.unlocked.includes(s.region))s.unlocked.push(s.region);s.animals[id]={count:2,best:kg};s.animalTotal=2;s.items.push({type:'animal',fish:id,kg,baseValue,baseBounty:0,region:s.region},{type:'animal',fish:id,kg,baseValue:baseValue-5,baseBounty:0,region:s.region});return s};

test('five aquatic animals are cooking ingredients and every one has a local dish',()=>{
 assert.equal(D.recipes.length,55);
 for(const a of D.animals.slice(0,5)){assert(a.cookable,a.id);assert(!('cookingNote' in a));assert(D.recipes.some(r=>r.tier!=='basic'&&r.fishes.includes(a.id)),a.id)}
 for(const [id,[fish,method,cuisine]] of Object.entries(batch)){const r=E.recipe(id);assert.deepEqual(r.fishes,[fish]);assert.equal(r.method,method);assert.equal(r.cuisine,cuisine);assert.equal(r.tier,'home');assert(r.preparation)}
 assert.deepEqual(Object.keys(batch).map(id=>E.recipe(id).cost),[70,85,85,85,60,65]);
});
test('basic deep-fry, steam and grill follow the approved material ranges and effects',()=>{
 const fry=E.recipe('deepfry'),steam=E.recipe('steamfish'),grill=E.recipe('grillfish'),pan=E.recipe('panfry');
 const small=D.fish.filter(f=>f.cookable&&f.max<=.5).map(f=>f.id);assert.equal(small.length,55);
 assert.deepEqual(fry.fishes,[...small,'nipponense','fangsiao','lessoniana','chinensis']);assert(!fry.fishes.includes('pelagicus'));
 for(const r of [steam,grill]){assert.deepEqual(r.fishes,pan.fishes);assert(!r.fishes.some(id=>animal(id)))}
 assert.deepEqual([fry.effect,fry.amount,fry.casts,fry.cost],['value',.05,40,15]);
 assert.deepEqual([steam.effect,steam.amount,steam.casts,steam.cost],['size',.2,40,15]);
 assert.deepEqual([grill.effect,grill.amount,grill.casts,grill.cost],['value',.05,40,15]);
 assert.equal(E.recipeName(fry,'fangsiao'),'炸飯蛸');assert.equal(E.recipeName(steam,'carp'),'蒸鯉魚');assert.equal(E.recipeName(grill,'blackporgy'),'烤黑鯛');
 assert.notEqual(E.recipeName(steam,'carp'),E.recipe('steamed').name);
});
test('cooking an animal uses the cheapest one once and charges seasoning once',()=>{
 const s=withAnimal('fangsiao',.5,120);assert(E.valid(s));
 const msg=E.cook(s,'iidako-nitsuke',now);assert.match(msg,/下一竿/);
 assert.equal(s.items.length,1);assert.equal(s.items[0].baseValue,120);assert.equal(s.money,1000-85);assert.equal(s.buff.id,'iidako-nitsuke');assert(E.valid(s));
 const f=withAnimal('fangsiao',.4,90);E.cook(f,'deepfry',now,'fangsiao');assert.equal(f.items.length,1);assert.equal(f.money,985);assert.equal(f.buff.fish,'fangsiao');assert(E.valid(f));assert.equal(E.mealName(f.buff),'炸飯蛸');
 const c=withAnimal('pelagicus',.3,70);assert.equal(E.cook(c,'deepfry',now,'pelagicus'),'請選擇材料');assert.equal(c.items.length,2);assert.equal(c.money,1000);
 const n=E.initial(now);n.money=1000;assert.equal(E.cook(n,'tenaga-karaage',now),'缺少所需材料');
});
test('every batch dish pays back at the ingredient water with its required bait',()=>{
 for(const id of Object.keys(batch)){const r=E.recipe(id),a=animal(r.fishes[0]),region=D.regions.find(x=>x.animals[a.id]).id;
  for(const [rod,sales] of [[0,0],[4,10]]){const s=E.initial(now);Object.assign(s,{region,rod,sales});s.buff=null;const base=E.estimate(s,a.requiredBait,now);s.buff={id,left:r.casts};const buff=E.estimate(s,a.requiredBait,now);
   const gain=r.effect==='speed'?r.casts*base.cast*(E.interval({...s,buff:null})/E.interval(s,id)-1):r.casts*(buff.cast-base.cast);
   const kg=(a.min+a.max)/2*(1+rod*.06),ing=a.price*(.8+kg/a.max*.5)*E.saleMultiplier(s);
   assert(gain-r.cost-ing>0,`${id} rod ${rod}: ${gain-r.cost-ing}`);assert(gain/(base.cast*r.casts)<.2,id)}}
});
console.log(`${checks} cooking batch 2 checks passed`);
