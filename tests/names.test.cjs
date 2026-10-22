const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),E=require('../engine.js');let checks=0;function test(name,fn){fn();checks++;console.log('PASS '+name)}
const root=path.resolve(__dirname,'..'),D=E.D,LANGS=['台語','客語四縣腔','粵語','德語','日語'];
const inRegion=(f,ids)=>D.regions.some(r=>ids.includes(r.id)&&r.pool[f.id]);

test('local names are well formed and limited to the languages of the fish waters',()=>{const tw=['sunmoon','zengwen','qigu','guandu','keelung','penghu','longdong','kenting'];for(const f of D.fish){assert(Array.isArray(f.localNames));for(const [lang,names] of f.localNames){assert(LANGS.includes(lang),f.id+' '+lang);assert(typeof names==='string'&&names.trim(),f.id);if(lang==='德語')assert(inRegion(f,['bodensee','greifswald']),f.id);if(lang==='粵語')assert(inRegion(f,['tolo']),f.id);if(lang==='日語')assert(inRegion(f,['biwa','kasumigaura']),f.id);if(lang==='台語'||lang==='客語四縣腔')assert(inRegion(f,tw),f.id)}assert.equal(new Set(f.localNames.map(n=>n[0])).size,f.localNames.length)}});

test('every fish in the German waters has a German name, moved out of the common-name field',()=>{for(const f of D.fish.filter(f=>inRegion(f,['bodensee','greifswald']))){assert(f.localNames.some(n=>n[0]==='德語'),f.id);assert(!/[A-Za-z]/.test(f.other),f.id+' '+f.other)}});

test('every local name is recorded in SOURCES.md',()=>{const src=fs.readFileSync(path.join(root,'SOURCES.md'),'utf8');for(const f of D.fish)for(const [lang,names] of f.localNames){const words=lang==='德語'?names.match(/[A-Za-zÄÖÜäöüß]+/g):names.split('、').map(n=>n.trim().split(' ')[0]);for(const word of words)assert(src.includes(word),`${f.id} ${lang} ${word}`)}});

test('local names show only in the atlas and are searchable there after capture',()=>{const c=fs.readFileSync(path.join(root,'collections.js'),'utf8');assert.equal(c.split('localNames').length-1,2);assert(c.indexOf('localNames')>c.indexOf('function renderAtlas'));const s=E.initial(0),perch=E.fish('perch');assert(!E.catalogMatches(s,perch,'Kretzer'));s.book.perch={count:1,best:.1};assert(E.catalogMatches(s,perch,'Kretzer'))});

console.log(`names: ${checks} checks passed`);
