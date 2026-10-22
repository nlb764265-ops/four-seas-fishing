(function(root){'use strict';
const dictionary=typeof module!=='undefined'?require('./language-data.js'):root.FishingChineseData;
const lengths=[...new Set(Object.keys(dictionary).map(k=>k.length))].sort((a,b)=>b-a);
const cache=new Map();
function simplify(value){const s=String(value);if(cache.has(s))return cache.get(s);let out='';for(let i=0;i<s.length;){let hit=false;for(const n of lengths){const k=s.slice(i,i+n);if(dictionary[k]){out+=dictionary[k];i+=n;hit=true;break}}if(!hit){const c=String.fromCodePoint(s.codePointAt(i));out+=c;i+=c.length}}if(cache.size>2500)cache.clear();cache.set(s,out);return out}
const readings={鰺:['ㄕㄣ','shēn'],
鮻:['ㄙㄨㄛ','suō'],鰶:['ㄐㄧˋ','jì'],鯁:['ㄍㄥˇ','gěng'],鮊:['ㄅㄛˊ','bó'],鱲:['ㄌㄚˋ','là'],鱧:['ㄌㄧˇ','lǐ'],鰕:['ㄒㄧㄚ','xiā'],鯻:['ㄌㄚˋ','là'],魨:['ㄊㄨㄣˊ','tún'],鰱:['ㄌㄧㄢˊ','lián'],鰻:['ㄇㄢˊ','mán'],鱺:['ㄌㄧˊ','lí'],鯧:['ㄔㄤ','chāng'],鯛:['ㄉㄧㄠ','diāo'],鰭:['ㄑㄧˊ','qí'],鰮:['ㄨㄣ','wēn'],鰛:['ㄨㄣ','wēn'],鯽:['ㄐㄧˋ','jì'],鯉:['ㄌㄧˇ','lǐ'],鯰:['ㄋㄧㄢˊ','nián'],鰍:['ㄑㄧㄡ','qiū'],鱔:['ㄕㄢˋ','shàn'],鯪:['ㄌㄧㄥˊ','líng'],魴:['ㄈㄤˊ','fáng'],鱅:['ㄩㄥ','yōng'],鯔:['ㄗ','zī'],鱠:['ㄎㄨㄞˋ','kuài'],鰡:['ㄌㄧㄡˊ','liú'],䱗:['ㄘㄢ','cān'],鱎:['ㄐㄧㄠˇ','jiǎo'],鰏:['ㄅㄧˋ','bì'],䰾:['ㄅㄚ','bā'],玳:['ㄉㄞˋ','dài'],瑁:['ㄇㄠˋ','mào'],緋:['ㄈㄟ','fēi'],棘:['ㄐㄧˊ','jí'],鰓:['ㄙㄞ','sāi'],鰾:['ㄅㄧㄠˋ','biào'],櫛:['ㄐㄧㄝˊ','jié'],鯇:['ㄏㄨㄢˋ','huàn']};
let locale='zh-Hant';const KEY='four-seas-fishing-language';
try{if(root.localStorage?.getItem(KEY)==='zh-Hans')locale='zh-Hans'}catch{}
function text(s){return locale==='zh-Hans'?simplify(s):String(s)}
function readingHTML(f){const body=['name','other','form','habitat','diet','distribution','food'].map(k=>f[k]||'').join('');const seen=new Set(),parts=[];for(const c of body){if(!readings[c])continue;const visible=text(c);if(seen.has(visible))continue;seen.add(visible);parts.push(`<span>${visible} ${readings[c][locale==='zh-Hans'?1:0]}</span>`)}return parts.length?`<p class="fish-reading" data-reading lang="${locale}">${parts.join('')}</p>`:''}
// Retain canonical text per DOM node so switching scripts is lossless. Game data and user inputs are never converted in place.
const originals=new WeakMap(),attributes=new WeakMap();let applying=false;
function apply(){if(!root.document||applying)return;applying=true;try{
 const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let node;
 while(node=walker.nextNode()){if(node.parentElement?.closest('script,style,[data-locale],[data-reading],textarea,input'))continue;const old=originals.get(node);const source=old&&node.nodeValue===old.last?old.source:node.nodeValue;const target=text(source);originals.set(node,{source,last:target});if(node.nodeValue!==target)node.nodeValue=target}
 for(const el of document.querySelectorAll('[aria-label],[placeholder],[title],meta[name=description]')){const saved=attributes.get(el)||{};for(const key of ['aria-label','placeholder','title',...(el.tagName==='META'?['content']:[])]){if(!el.hasAttribute(key))continue;const value=el.getAttribute(key),old=saved[key],source=old&&value===old.last?old.source:value,target=text(source);saved[key]={source,last:target};if(value!==target)el.setAttribute(key,target)}attributes.set(el,saved)}
 document.documentElement.lang=locale;document.title=text('四海釣遊記');for(const b of document.querySelectorAll('[data-locale]'))b.setAttribute('aria-pressed',String(b.dataset.locale===locale));
 }finally{applying=false}}
let onChange=()=>{};
function setLocale(next){if(!['zh-Hant','zh-Hans'].includes(next)||next===locale)return;locale=next;try{localStorage.setItem(KEY,locale)}catch{}onChange();apply()}
function bind(callback){onChange=callback;document.querySelectorAll('[data-locale]').forEach(b=>b.onclick=()=>setLocale(b.dataset.locale));apply();let queued=false;new MutationObserver(()=>{if(!queued){queued=true;queueMicrotask(()=>{queued=false;apply()})}}).observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['aria-label','placeholder','title','content']})}
const api={simplify,text,readingHTML,readings,apply,bind,setLocale,get locale(){return locale}};if(typeof module!=='undefined')module.exports=api;else root.FishingLanguage=api;
})(globalThis);
