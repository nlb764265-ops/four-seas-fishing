(function(root){
'use strict';
const E=typeof module!=='undefined'?require('./engine.js'):root.Fishing;
const GAME='four-seas-fishing';
function snapshot(state,now=Date.now()){
 if(state.readError)throw Error('原存檔無法讀取，請先讀取有效進度。');
 const copy=E.migrate(state,now);if(!copy||!E.valid(copy))throw Error('這份存檔無法讀取。');
 E.settle(copy,now);copy.savedAt=now;return copy;
}
function pack(state,now=Date.now()){return JSON.stringify({game:GAME,format:1,save:snapshot(state,now)});}
function unpack(raw){
 let data;try{data=JSON.parse(raw)}catch{throw Error('轉移資料無效。');}
 if(data?.game!==GAME)throw Error('這不是《四海釣遊記》的存檔。');
 if(data.format!==1)throw Error('轉移格式不支援，請使用新版遊戲。');
 const candidate=E.migrate(data.save);if(!candidate||!E.valid(candidate))throw Error('這份存檔無法讀取，請在來源設備重新產生轉移碼。');
 return candidate;
}
// Storage must succeed before the running state changes. Preserve unreadable original bytes too.
function restore(storage,key,candidate,current,now=Date.now()){
 const next=snapshot(candidate,now);
 const previous=current&&!current.readError?JSON.stringify(snapshot(current,now)):storage.getItem(key);
 if(previous!==null)storage.setItem(key+'-before-transfer',previous);
 storage.setItem(key,JSON.stringify(next));return next;
}
const api={snapshot,pack,unpack,restore};if(typeof module!=='undefined')module.exports=api;else root.FishingSaveTransfer=api;
})(globalThis);
