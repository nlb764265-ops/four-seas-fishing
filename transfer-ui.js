// Temporary encrypted relay. This does not introduce fields into game saves.
const CLOUD_TRANSFER_URL='https://script.google.com/macros/s/AKfycbyyNPpBanNP5V8-L_6U-KECBFYgkRDbLVWvDlQW_WZegew9jSD34_0slZD7_UP4IyEk/exec';
const CLOUD_PREVIOUS_KEY=KEY+'-before-transfer';
let cloudClient=null,cloudBusy=false,cloudPreview=null,cloudSession=0,cloudTab='send';
function cloudTransferPanel(){return '<div class="cloud-save-section">'+btn('跨設備存檔轉移','data-cloud="open"','small')+'<p>轉移需要連線，轉移碼有效 24 小時。請妥善保存，持有轉移碼的人可以領取這份存檔。</p></div>';}
// 轉移視窗分「帶走進度」「領取進度」兩頁；狀態訊息顯示在當前分頁的按鈕下方；領取後以對照卡並列目前與領取的進度；轉移前備份只在存在時以小字連結列出日期。
function cloudStatus(text){const el=$('cloud-status-'+cloudTab)||$('cloud-transfer-status');if(el)el.textContent=text;}
function cloudLabel(s){return s&&!s.readError?esc(slotSummary(s)):'沒有可讀取的進度';}
function cloudCurrentSave(){if(state)return state;try{const raw=localStorage.getItem(KEY);return raw?cloudValidate(raw):null;}catch{return null;}}
function cloudBackupSave(){try{const raw=localStorage.getItem(CLOUD_PREVIOUS_KEY);return raw?cloudValidate(raw):null;}catch{return null;}}
function cloudSetTab(tab){cloudTab=tab;document.querySelectorAll('#cloud-transfer [data-cloud-tab]').forEach(b=>{const on=b.dataset.cloudTab===tab;b.classList.toggle('active',on);b.setAttribute('aria-selected',on);});document.querySelectorAll('#cloud-transfer [data-cloud-pane]').forEach(p=>p.classList.toggle('hidden',p.dataset.cloudPane!==tab));}
function cloudCanOpen(){return !document.querySelector('dialog[open]');}
function btn(label,attrs='',style=''){return '<button class="'+style+'" '+attrs+'>'+label+'</button>';}
function openCloudTransfer(){
 if(!cloudCanOpen()){toast('請先完成眼前的閱讀或選擇。');return;}
 cloudSession++;cloudPreview=null;cloudBusy=false;
 const backup=cloudBackupSave();cloudTab=state.readError?'receive':'send';
 $('cloud-transfer-body').innerHTML='<p class="tiny muted cloud-intro">轉移需要連線，轉移碼有效 24 小時。持有轉移碼的人可以領取這份存檔。</p>'+(!state.readError?'<div class="cloud-tabs" role="tablist">'+btn('帶走進度','data-cloud-tab="send" role="tab"')+btn('領取進度','data-cloud-tab="receive" role="tab"')+'</div>'+'<section data-cloud-pane="send"><p class="cloud-current"><span class="tiny muted">目前進度</span>'+cloudLabel(state)+'</p>'+btn('產生轉移碼','data-cloud="upload"','primary')+'<p id="cloud-status-send" class="cloud-status" role="status" aria-live="polite"></p><div id="cloud-issued" class="hidden"><label for="cloud-issued-code">轉移碼</label><input id="cloud-issued-code" readonly autocomplete="off" aria-label="產生的轉移碼">'+btn('複製轉移碼','data-cloud="copy"')+'<p id="cloud-expiry" class="tiny muted"></p></div></section>':'')+'<section data-cloud-pane="receive"><label for="cloud-input-code">轉移碼</label><input id="cloud-input-code" placeholder="XXXX-XXXX-XXXX" maxlength="30" autocomplete="off" autocapitalize="characters" spellcheck="false">'+btn('領取存檔','data-cloud="receive"','primary')+'<p id="cloud-status-receive" class="cloud-status" role="status" aria-live="polite"></p>'+'<div id="cloud-preview" class="cloud-compare hidden"><dl><div><dt>目前進度</dt><dd id="cloud-current-summary">'+cloudLabel(cloudCurrentSave())+'</dd></div><div><dt id="cloud-preview-label">領取進度</dt><dd id="cloud-preview-summary"></dd></div></dl><p class="tiny muted">確認後會取代自動存檔，原進度保留為轉移前備份。</p><div class="row">'+btn('確認還原','data-cloud="apply"','primary')+btn('取消','data-cloud="cancel"')+'</div></div>'+(backup?'<p class="cloud-backup">'+btn('還原轉移前備份','data-cloud="previous"','link')+'<span class="tiny muted">（'+cloudLabel(backup)+'）</span></p>':'')+'</section>';
 cloudSetTab(cloudTab);$('cloud-transfer').showModal();
}
function closeCloudTransfer(){cloudSession++;cloudBusy=false;cloudPreview=null;if(cloudClient)cloudClient.close();cloudClient=null;$('cloud-transfer').close();$('cloud-transfer-body').textContent='';$('cloud-transfer-status').textContent='';}
async function cloudRun(fn){if(cloudBusy)return;const session=cloudSession;cloudBusy=true;$('cloud-transfer').querySelectorAll('button:not([data-cloud="close"])').forEach(b=>b.disabled=true);try{await fn(session);}catch(error){if(session===cloudSession)cloudStatus(error.message||'轉移未完成，請稍後重試。');}finally{if(session===cloudSession){cloudBusy=false;$('cloud-transfer').querySelectorAll('button').forEach(b=>b.disabled=false);}}}
function getCloudClient(){if(!navigator.onLine)throw Error('目前沒有網路連線，請連線後重試。');if(!globalThis.crypto?.subtle)throw Error('這個瀏覽器無法使用存檔加密，請改用其他瀏覽器。');if(!cloudClient||cloudClient.closed)cloudClient=new FishingTransfer.Client(CLOUD_TRANSFER_URL);return cloudClient;}
function cloudValidate(raw){const s=E.migrate(JSON.parse(raw));if(!s||!E.valid(s))throw Error('這份存檔無法讀取，請在來源設備重新產生轉移碼。');return s;}
function cloudShowPreview(candidate,backup=false){cloudPreview=candidate;$('cloud-preview-label').textContent=backup?'轉移前備份':'領取進度';$('cloud-preview-summary').textContent=slotSummary(candidate);$('cloud-preview').classList.remove('hidden');$('cloud-current-summary').textContent=state.readError?'原存檔無法讀取':slotSummary(state);cloudStatus(backup?'核對後按「確認還原」。':'存檔已領取。核對後按「確認還原」。');}
function cloudCancelPreview(){cloudPreview=null;$('cloud-preview').classList.add('hidden');cloudStatus('');}
function cloudApply(){
 if(!cloudPreview||cloudBusy)return;
 let candidate;
 try{
  candidate=FishingSaveTransfer.restore(localStorage,KEY,cloudPreview,state);
 }catch{cloudStatus('瀏覽器無法保存存檔，已停止還原。請保留來源設備的進度。');return;}
 closeCloudTransfer();useState(candidate,'存檔已還原。');
}
document.addEventListener('click',ev=>{
 const t=ev.target.closest('button[data-cloud-tab]');if(t&&!t.disabled&&$('cloud-transfer').open){cloudSetTab(t.dataset.cloudTab);return;}
 const b=ev.target.closest('button[data-cloud]');if(!b||b.disabled||!b.isConnected)return;
 const action=b.dataset.cloud;if(action==='open'){openCloudTransfer();return;}if(action==='close'){closeCloudTransfer();return;}if(!$('cloud-transfer').open)return;
 if(action==='apply'){cloudApply();return;}
 if(action==='cancel'){cloudCancelPreview();return;}
 if(action==='previous'){try{const raw=localStorage.getItem(CLOUD_PREVIOUS_KEY);if(!raw)throw Error('沒有轉移前備份。');cloudShowPreview(cloudValidate(raw),true);}catch(error){cloudStatus(error.message);}return;}
 if(action==='upload')cloudRun(async session=>{if(state.readError)throw Error('請先讀取要轉移的進度。');const raw=FishingSaveTransfer.pack(state);cloudStatus('正在加密並上傳…');const result=await getCloudClient().upload(raw);if(session!==cloudSession)return;$('cloud-issued-code').value=result.code;$('cloud-issued').classList.remove('hidden');$('cloud-expiry').textContent='到期時間：'+new Date(result.expiresAt).toLocaleString();cloudStatus('請在另一台設備選擇「領取進度」，輸入這組轉移碼。');});
 else if(action==='receive')cloudRun(async session=>{cloudPreview=null;$('cloud-preview').classList.add('hidden');const code=FishingTransfer.normalizeCode($('cloud-input-code').value);cloudStatus('正在領取存檔…');const result=await getCloudClient().download(code);if(session!==cloudSession)return;cloudShowPreview(FishingSaveTransfer.unpack(result.save));});
 else if(action==='copy')cloudRun(async()=>{const code=$('cloud-issued-code').value;if(!code)throw Error('請先產生轉移碼。');try{await navigator.clipboard.writeText(code);cloudStatus('轉移碼已複製。');}catch{$('cloud-issued-code').focus();$('cloud-issued-code').select();cloudStatus('請複製已選取的轉移碼。');}});
});
$('cloud-transfer').addEventListener('close',()=>{if($('cloud-transfer-body').textContent)closeCloudTransfer()});
$('cloud-transfer').addEventListener('cancel',ev=>{ev.preventDefault();closeCloudTransfer();});
window.addEventListener('pagehide',()=>{if(cloudClient)cloudClient.close();});
