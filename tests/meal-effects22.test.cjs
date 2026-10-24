const assert=require('node:assert/strict'),E=require('../engine.js'),D=E.D;
let checks=0;function test(name,fn){fn();checks++;console.log('PASS '+name)}
function fresh(region='sunmoon'){const s=E.initial(0);s.seed=12345;s.region=region;if(!s.unlocked.includes(region))s.unlocked.push(region);s.bait={dough:5000,worm:5000,shrimp:5000,meat:5000};return s}
// Fish for a while, emptying the box between steps so a full box never stops the run.
function run(s,meal,minutes,step=10){if(meal)s.buff={id:meal,left:100000,since:0};E.toggle(s,0);let t=0,fish=0,weeds=0;while(t<minutes*60000){t+=step*60000;E.settle(s,t);fish+=s.items.filter(i=>i.type!=='weed').length;weeds+=s.items.filter(i=>i.type==='weed').length;s.items=[];if(!s.active){s.castAt=t;E.toggle(s,t)}}return{fish,weeds}}
const day=Date.UTC(2026,9,15,4,20),night=Date.UTC(2026,9,15,4,50),all=[...D.recipes,...D.dishes];
test('every meal uses one of the seven effects with the approved amounts per duration',()=>{
 const count={};for(const m of all){count[m.effect]=(count[m.effect]||0)+1;assert([40,60,80].includes(m.casts),m.id);const tier={40:0,60:1,80:2}[m.casts];
  const want={lure:[1.5,2,2.5],weed:[.5,.75,1],bait:[.25,.35,.5],double:[.08,.1,.12],night:[.5,.75,1],animal:[2,2.5,3]}[m.effect];if(want)assert.equal(m.amount,want[tier],m.id);else assert.equal(m.effect,'speed',m.id);
  assert(!m.desc.split('，')[0].includes('持續'),m.id);assert.match(m.desc,new RegExp(`持續 ${m.casts} 竿。$`))}
 assert.deepEqual(count,{speed:32,lure:30,weed:23,bait:8,double:24,night:5,animal:10});
 assert.deepEqual(all.filter(m=>m.effect==='double').map(m=>m.id).sort(),['dine-jeju-mackerel','jeju-grilled-mackerel','ganjang-gejang','tokyo-boiled-shako','dine-tokyo_bay-shako','ishikari-hokke','taihu-silver-eggs','dine-taihu-silvereggs','baoyu','danggit','funazushi','ginger','green-herring','grillfish','gurukun-karaage','kibinago-sashimi','pla-duk-fu','smoked','wakasagi-suzuke','zander-muellerin','xuyi-shisanxiang','jellied-eels','dine-hongze-crab','dine-thames-jellied'].sort());
 assert.deepEqual(['kabayaki','eel-noodle','catfish-eggplant','dine-kasumigaura-hobikini'].map(id=>(E.recipe(id)||E.dish(id)).effect),['night','night','night','night'])});
test('weed meals cut water plants; the empty hook still only brings up plants',()=>{
 const plain=run(fresh(),null,600),half=run(fresh(),'panfry',600),none=run(fresh(),'sweetsour-carp',600);
 assert(plain.weeds/(plain.fish+plain.weeds)>.07,'about 12% weeds without a meal');assert(half.weeds<plain.weeds);assert.equal(none.weeds,0);assert(none.fish>500);
 const hook=fresh();hook.selectedBait='none';const h=run(hook,'sweetsour-carp',60);assert.equal(h.fish,0);assert(h.weeds>0)});
test('bait meals spare bait on about the stated share of bites, the same offline and step by step',()=>{
 const s=fresh(),r=run(s,'nishin-zuke',600),spent=5000-s.bait.dough;assert(r.fish>500);assert(Math.abs(spent/r.fish-.65)<.08,`spent ${spent} of ${r.fish}`);
 const a=fresh(),b=fresh();for(const x of [a,b]){x.buff={id:'nishin-zuke',left:100000,since:0};x.box=D.upgrades.box.capacity.length-1;E.toggle(x,0)}
 const cap=E.capacity(a);let t=0;while(a.active&&a.items.length<cap&&t<7200000){t+=30000;E.settle(a,t)}E.settle(b,t);assert.deepEqual(a.bait,b.bait);assert.deepEqual(a.items,b.items)});
test('double meals land a second fish on about the stated share of bites, on one bait and only with room in the box',()=>{
 const plain=fresh(),p=run(plain,null,600),s=fresh(),r=run(s,'funazushi',600),bites=5000-s.bait.dough;assert.equal(5000-plain.bait.dough,p.fish);assert(Math.abs(r.fish/bites-1.12)<.04,`${r.fish} fish on ${bites} bait`);
 assert(s.logs.some(l=>l.text.endsWith(' · 雙收')));const full=fresh();full.buff={id:'funazushi',left:100000,since:0};E.toggle(full,0);E.settle(full,7200000);assert.equal(full.items.length,E.capacity(full));
 const a=fresh(),b=fresh();for(const x of [a,b]){x.buff={id:'funazushi',left:100000,since:0};E.toggle(x,0)}let t=0;while(a.active&&t<7200000){t+=30000;E.settle(a,t)}E.settle(b,t);assert.deepEqual(a.items,b.items);assert.deepEqual(a.book,b.book)});
test('lure meals raise only unrecorded species, fish and aquatic animals alike',()=>{
 const s=fresh();s.book.qili={count:1,best:.1};const base=Object.fromEntries(E.weights('sunmoon','dough',null,0)),lure=Object.fromEntries(E.weights('sunmoon','dough',null,0,s,'westlake'));
 for(const [id,w] of Object.entries(base))assert.equal(lure[id],E.known(s,id)?w:w*2.5,id);
 const a=fresh('arcachon'),jb=E.jellyRate('arcachon'),jl=E.jellyRate('arcachon',a,'westlake');assert(Math.abs(jl-jb*2.5)<1e-9)});
test('animal meals raise aquatic animals and jellyfish but no fish',()=>{
 const s=fresh('arcachon');for(const b of E.waterBaits('arcachon').filter(b=>!b.free)){const base=Object.fromEntries(E.weights('arcachon',b.id,null,9)),boost=Object.fromEntries(E.weights('arcachon',b.id,null,9,s,'dine-arcachon-moules'));for(const [id,w] of Object.entries(base))assert.equal(boost[id],E.fish(id).category?w*2.5:w,id)}
 assert(Math.abs(E.jellyRate('arcachon',s,'dine-arcachon-moules')-E.jellyRate('arcachon')*2.5)<1e-9)});
test('night meals let time-limited fish bite in other phases at the stated share of their best phase',()=>{
 const s=fresh('guandu'),eel=E.fish('eel'),w=(at,meal,id='eel',region='guandu',bait=eel.requiredBait)=>Object.fromEntries(E.weights(region,bait,at,9,s,meal))[id]||0,base=E.region('guandu').pool.eel;
 assert.equal(w(day,null),0);assert.equal(w(day,'kabayaki'),base*4);assert.equal(w(day,'catfish-eggplant'),base*3);assert.equal(w(night,'kabayaki'),base*4);
 const tusk=E.fish('tuskfish'),tb=E.region('longdong').pool.tuskfish;assert.equal(w(night,null,'tuskfish','longdong',tusk.requiredBait),0);assert.equal(w(night,'catfish-eggplant','tuskfish','longdong',tusk.requiredBait),tb*.75);assert.equal(w(day,'catfish-eggplant','tuskfish','longdong',tusk.requiredBait),tb);
 const wc=E.fish('walkingcatfish');assert.equal(w(day,'kabayaki','walkingcatfish','sunmoon',wc.requiredBait),w(day,null,'walkingcatfish','sunmoon',wc.requiredBait),'weather conditions are untouched')});
test('meals no longer change weight or price of a catch',()=>{
 const s=fresh();s.buff={id:'westlake',left:1000,since:0};E.toggle(s,0);E.settle(s,600000);for(const i of s.items.filter(i=>i.type==='fish')){const f=E.fish(i.fish);assert(i.kg>=f.min-.01&&i.kg<=f.max+.01,i.fish);assert(Math.abs(i.baseValue-f.price*(.8+i.kg/f.max*.5))<1e-9)}});
test('live hints describe the current water and bait, and flag meals with no effect here',()=>{
 const s=fresh();assert.equal(E.mealHint(s,'deepfry'),null);assert.equal(E.mealHint(s,'nope'),null);
 assert.deepEqual(E.mealHint(s,'panfry'),{text:'使用麵團時，水草機率由 12% 降為 6%。',idle:false});
 assert.deepEqual(E.mealHint(s,'nishin-zuke'),{text:'使用麵團時，每次上鉤平均省下 2.1 元魚餌費。',idle:false});assert.deepEqual(E.mealHint(s,'funazushi'),{text:'使用麵團時，每次上鉤有 12% 機率多釣到一條；漁獲箱需有空位。',idle:false});
 assert.match(E.mealHint(s,'westlake').text,/^使用麵團時，有 \d+ 種可上鉤的魚與水生動物尚未登錄。$/);
 for(const id of E.waterSpecies('sunmoon'))(E.fish(id).category?s.animals:s.book)[id]={count:1,best:1};assert.equal(E.mealHint(s,'westlake').idle,true);
 const b=fresh('biwa');assert.deepEqual(E.mealHint(b,'dine-arcachon-moules'),{text:'琵琶湖沒有水生動物，目前沒有效果。',idle:true});assert.equal(E.mealHint(b,'kabayaki').idle,false);
 const t=fresh('ishikari');assert.equal(E.mealHint(t,'kabayaki').idle,true);assert.equal(E.mealHint(fresh('tokyo_bay'),'kabayaki').idle,false,'0.25: the conger is likelier at night');
 s.selectedBait='none';assert.equal(E.mealHint(s,'panfry').idle,true);assert.equal(E.mealHint(s,'grillfish').idle,true);assert.equal(E.mealHint(s,'nishin-zuke').text,'空鉤不消耗魚餌，目前沒有效果。')});
test('saves holding a meal from before the change keep working',()=>{
 const s=fresh();s.buff={id:'steamfish',left:7,since:0};const m=E.migrate(JSON.parse(JSON.stringify(s)),1);assert(m&&E.valid(m));assert.equal(m.buff.id,'steamfish');E.toggle(m,1);E.settle(m,1+m.castMs);assert.equal(m.buff.left,6)});
test('income estimates rise under weed and bait meals and ignore the others',()=>{
 const s=fresh(),base=E.estimate(s).cast;for(const [id,up] of [['panfry',true],['baoyu',true],['westlake',false],['kabayaki',false],['dine-arcachon-moules',false]]){s.buff={id,left:10};const c=E.estimate(s).cast;if(up)assert(c>base,id);else assert(Math.abs(c-base)<base*.05,id)}});
console.log(`${checks} meal effect checks passed`);
