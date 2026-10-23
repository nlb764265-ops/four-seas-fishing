/* Encrypted relay client. Wire protocol is shared with the existing relay; tickets and keys are game-specific. */
(function(global) {
  'use strict';
  const PROTOCOL = 'wind-cottage-transfer-v1', ALPHABET = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
  const encoder = new TextEncoder(), decoder = new TextDecoder('utf-8',{fatal:true});
  function randomHex(size) {return Array.from(crypto.getRandomValues(new Uint8Array(size)),b=>b.toString(16).padStart(2,'0')).join('');}
  function normalizeCode(code) {const c=String(code).toUpperCase().replace(/[\s-]/g,'');if(c.length!==12||Array.from(c).some(x=>!ALPHABET.includes(x)))throw Error('請輸入完整的 12 字元轉移碼。');return c;}
  function newCode() {return Array.from(crypto.getRandomValues(new Uint8Array(12)),b=>ALPHABET[b%ALPHABET.length]).join('');}
  function displayCode(code) {return normalizeCode(code).match(/.{4}/g).join('-');}
  const bytesToBase64 = bytes => {let s='';for(let i=0;i<bytes.length;i+=8192)s+=String.fromCharCode(...bytes.subarray(i,i+8192));return btoa(s);};
  function base64ToBytes(text) {return Uint8Array.from(atob(text),c=>c.charCodeAt(0));}
  async function ticket(code) {const b=await crypto.subtle.digest('SHA-256',encoder.encode('four-seas:lookup:'+normalizeCode(code)));return Array.from(new Uint8Array(b),n=>n.toString(16).padStart(2,'0')).join('');}
  async function key(code) {const raw=await crypto.subtle.digest('SHA-256',encoder.encode('four-seas:encrypt:'+normalizeCode(code)));return crypto.subtle.importKey('raw',raw,'AES-GCM',false,['encrypt','decrypt']);}
  async function encrypt(save, code) {
    if(typeof save!=='string'||save.length<2||encoder.encode(save).length>700000)throw Error('存檔過大或內容無效，無法透過轉移服務傳送。');
    const iv=crypto.getRandomValues(new Uint8Array(12)),data=await crypto.subtle.encrypt({name:'AES-GCM',iv},await key(code),encoder.encode(save));
    return {version:1,iv:bytesToBase64(iv),data:bytesToBase64(new Uint8Array(data))};
  }
  async function decrypt(payload, code) {
    if(!payload||payload.version!==1||typeof payload.iv!=='string'||typeof payload.data!=='string'||payload.data.length>1024*1024)throw Error('轉移資料無效。');
    try{return decoder.decode(await crypto.subtle.decrypt({name:'AES-GCM',iv:base64ToBytes(payload.iv)},await key(code),base64ToBytes(payload.data)));}
    catch(error){throw Error('轉移碼或存檔資料無效，請重新取得轉移碼。');}
  }
  const errors={BUSY:'服務忙碌，請稍後重試。',RATE_LIMIT:'轉移服務暫時達到使用上限，請稍後重試。',UPLOAD_LIMIT:'今日轉移次數已達上限，請改用檔案匯出。',NOT_CONFIGURED:'轉移服務尚未設定完成。',NOT_FOUND_OR_EXPIRED:'轉移碼不存在或已到期。',DAMAGED:'轉移資料損壞，請重新產生轉移碼。',SERVICE_ERROR:'轉移服務暫時無法使用，請稍後重試。',BAD_PAYLOAD:'存檔過大或內容無效，無法透過轉移服務傳送。'};
  function allowedGoogleOrigin(origin) {return /^https:\/\/(?:script\.google\.com|script\.googleusercontent\.com|[a-z0-9-]+-script\.googleusercontent\.com)$/.test(origin);}
  class Client {
    constructor(url) {
      if(!/^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec$/.test(url))throw Error('請貼上 Apps Script 的正式部署網址（結尾為 /exec）。');
      this.url=url;this.nonce=randomHex(24);this.pending=new Map();this.bridge=null;this.closed=false;
      this.ready=new Promise((resolve,reject)=>{this.resolveReady=resolve;this.rejectReady=reject;this.timer=setTimeout(()=>{reject(Error('Google 轉移服務連線逾時，請確認部署允許免登入存取。'));this.close();},30000);});
      this.ready.catch(()=>{});
      this.onMessage=e=>this.handleMessage(e);window.addEventListener('message',this.onMessage);
      this.frame=document.createElement('iframe');this.frame.title='存檔轉移連線';this.frame.hidden=true;this.frame.referrerPolicy='no-referrer';
      const origin=location.protocol==='file:'?'null':location.origin;
      this.frame.src=url+'?mode=bridge&origin='+encodeURIComponent(origin)+'&nonce='+this.nonce;document.body.append(this.frame);
    }
    handleMessage(e) {
      const d=e.data;if(this.closed||!allowedGoogleOrigin(e.origin)||!d||d.protocol!==PROTOCOL||d.nonce!==this.nonce)return;
      if(d.type==='ready'&&!this.bridge){this.bridge=e.source;this.bridgeOrigin=e.origin;clearTimeout(this.timer);this.resolveReady();return;}
      if(e.source!==this.bridge||e.origin!==this.bridgeOrigin||d.type!=='response')return;
      const p=this.pending.get(d.id);if(!p)return;clearTimeout(p.timer);this.pending.delete(d.id);p.resolve(d.result);
    }
    async request(action, fields={}) {
      await this.ready;if(this.closed)throw Error('轉移連線已關閉。');
      const id=randomHex(16);const result=await new Promise((resolve,reject)=>{
        const timer=setTimeout(()=>{this.pending.delete(id);reject(Error('轉移逾時，請稍後重試。'));},30000);
        this.pending.set(id,{resolve,reject,timer});this.bridge.postMessage({protocol:PROTOCOL,nonce:this.nonce,type:'request',id,action,...fields},this.bridgeOrigin);
      });if(!result||typeof result.ok!=='boolean')throw Error('轉移服務回傳無效資料。');
      if(!result.ok){const e=Error(errors[result.error]||'轉移未完成，請稍後重試。');e.code=result.error;throw e;}return result;
    }
    async ping(){return this.request('ping');}
    async upload(save) {
      for(let attempt=0;attempt<3;attempt++){
        const code=newCode(),payload=await encrypt(save,code);
        try{const result=await this.request('upload',{ticket:await ticket(code),payload});return {code:displayCode(code),expiresAt:result.expiresAt};}
        catch(error){if(error.code!=='CODE_COLLISION')throw error;}
      }throw Error('未能產生轉移碼，請稍後重試。');
    }
    async download(code){code=normalizeCode(code);const result=await this.request('download',{ticket:await ticket(code)});return {save:await decrypt(result.payload,code),expiresAt:result.expiresAt};}
    close(){if(this.closed)return;this.closed=true;clearTimeout(this.timer);this.rejectReady(Error('轉移連線已關閉。'));window.removeEventListener('message',this.onMessage);this.frame.remove();for(const p of this.pending.values()){clearTimeout(p.timer);p.reject(Error('轉移連線已關閉。'));}this.pending.clear();}
  }
  global.FishingTransfer={Client,normalizeCode,displayCode,newCode,ticket,encrypt,decrypt,allowedGoogleOrigin};
})(globalThis);
