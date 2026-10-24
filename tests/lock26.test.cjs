const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),E=require('../engine.js'),root=path.resolve(__dirname,'..');let checks=0;const test=(n,f)=>{f();checks++;console.log('PASS '+n)};
const PLAIN=E.D.fish.find(f=>!f.signature&&!f.bounty).id;
const fresh=region=>{const s=E.initial(0);s.money=1000;if(region){s.region=region;s.unlocked.push(region)}return s};
const item=(id,extra={})=>({type:E.fish(id).category?'animal':'fish',fish:id,kg:E.fish(id).max,baseValue:E.fish(id).price,baseBounty:E.fish(id).bounty,region:'sunmoon',...extra});

test('locking a species toggles, logs and survives a save round trip',()=>{const s=fresh();assert.equal(E.toggleLock(s,'carp',0),'已鎖定鯉魚');assert.deepEqual(s.locked,['carp']);assert(E.isLocked(s,'carp'));assert.match(s.logs[0].text,/鎖定鯉魚/);assert(E.valid(s));const j=E.migrate(JSON.parse(JSON.stringify(s)),0);assert.deepEqual(j.locked,['carp']);assert.equal(E.toggleLock(s,'carp',0),'已解除鎖定鯉魚');assert.deepEqual(s.locked,[]);assert.equal(E.toggleLock(s,'weed:reed',0),'只能鎖定魚與水生動物')});

test('saves without locks stay valid; malformed locks are rejected',()=>{const s=fresh();delete s.locked;assert(E.valid(s));for(const bad of [['carp','carp'],['nosuchfish'],'carp',[1]]){const b=fresh();b.locked=bad;assert(!E.valid(b),JSON.stringify(bad))}});

test('locked fish are never sold, singly, as ordinary catch or by sell-all',()=>{const s=fresh();s.items=[item('carp'),item('carp'),item(PLAIN)];E.toggleLock(s,'carp',0);assert.equal(E.sell(s,'carp',0),'已鎖定，不能出售');assert.equal(E.sell(s,'carp',0,1),'已鎖定，不能出售');E.sell(s,'ordinary',0);assert.deepEqual(s.items.map(i=>i.fish),['carp','carp']);E.sell(s,'all',0);assert.equal(s.items.length,2);assert.equal(E.sellAll(s,0),'沒有出售任何漁獲；2 件鎖定漁獲保留');assert.equal(s.items.length,2)});

test('locked bounty catch is not handed in, even at its bounty water',()=>{const s=fresh('sunmoon');s.items=[item('snakehead'),item('snakehead'),item('jaguar'),item('carp')];E.toggleLock(s,'snakehead',0);const m=s.money;assert.equal(E.claim(s,'snakehead',0),'已鎖定，不能繳交賞金');assert.equal(s.money,m);assert.match(E.sellAll(s,0),/繳交 1 件賞金漁獲、出售 1 件.*2 件鎖定漁獲保留/);assert.deepEqual(s.items.map(i=>i.fish),['snakehead','snakehead']);assert.equal(s.bountyCount,1)});

test('a locked catch can still be cooked, using up exactly one',()=>{const s=fresh();s.items=[item('crucian'),item('crucian')];E.toggleLock(s,'crucian',0);const m=s.money;const r=E.cook(s,'panfry',0,'crucian');assert.match(r,/料理效果/);assert.equal(s.items.length,1);assert.equal(s.money,m-E.recipe('panfry').cost);assert(E.isLocked(s,'crucian'),'the lock stays on the species')});

test('unlocking restores selling and new catches of a locked species stay locked',()=>{const s=fresh();s.items=[item('carp')];E.toggleLock(s,'carp',0);s.items.push(item('carp'));assert.equal(E.sell(s,'carp',0),'已鎖定，不能出售');E.toggleLock(s,'carp',0);assert.match(E.sell(s,'carp',0),/出售 2 件/)});

test('the catch box offers the lock and hides sale and bounty buttons for locked catch',()=>{const c=fs.readFileSync(path.join(root,'collections.js'),'utf8'),app=fs.readFileSync(path.join(root,'app.js'),'utf8');for(const t of ['id="lockPicked"','已鎖定・不能出售或繳交賞金','row-tag locked','鎖定的漁獲不會出售或繳交',"if($('sellPicked'))"])assert(c.includes(t),t);assert(app.includes('新增漁獲鎖定'))});

console.log(`lock26: ${checks} checks passed`);
