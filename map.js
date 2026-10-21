'use strict';
class PixelWorld{
 constructor(canvas,onSelect){this.canvas=canvas;this.ctx=canvas.getContext('2d');this.onSelect=onSelect;this.lon=120.75;this.lat=23.6;this.zoom=32;this.selected='sunmoon';this.pointers=new Map();this.path=new Path2D();for(const ring of window.WORLD_LAND){ring.forEach(([x,y],i)=>i?this.path.lineTo(x,-y):this.path.moveTo(x,-y));this.path.closePath()}this.resize=new ResizeObserver(()=>this.draw());this.resize.observe(canvas);canvas.addEventListener('wheel',e=>{e.preventDefault();this.setZoom(this.zoom*(e.deltaY<0?1.25:.8))},{passive:false});canvas.addEventListener('pointerdown',e=>{canvas.setPointerCapture(e.pointerId);this.pointers.set(e.pointerId,[e.clientX,e.clientY]);this.down=[e.clientX,e.clientY];this.moved=false});canvas.addEventListener('pointermove',e=>{if(!this.pointers.has(e.pointerId))return;const old=this.pointers.get(e.pointerId);if(this.pointers.size===2){const others=[...this.pointers.entries()].find(([id])=>id!==e.pointerId)[1];const a=Math.hypot(old[0]-others[0],old[1]-others[1]),b=Math.hypot(e.clientX-others[0],e.clientY-others[1]);if(a>0)this.zoom=Math.max(1,Math.min(80,this.zoom*b/a));this.moved=true}else{const scale=Math.min(canvas.clientWidth/360,canvas.clientHeight/180)*this.zoom;this.lon-=(e.clientX-old[0])/scale;this.lat+=(e.clientY-old[1])/scale;if(Math.hypot(e.clientX-this.down[0],e.clientY-this.down[1])>5)this.moved=true}this.pointers.set(e.pointerId,[e.clientX,e.clientY]);this.clamp();this.draw()});const up=e=>{if(!this.moved&&this.pointers.size===1){const rect=canvas.getBoundingClientRect(),scale=Math.min(canvas.clientWidth/360,canvas.clientHeight/180)*this.zoom;const x=e.clientX-rect.left,y=e.clientY-rect.top;const hits=FishingData.regions.map(r=>({r,d:Math.hypot((r.lon-this.lon)*scale+rect.width/2-x,(this.lat-r.lat)*scale+rect.height/2-y)})).filter(h=>h.d<22).sort((a,b)=>a.d-b.d);if(hits[0])this.onSelect(hits[0].r.id)}this.pointers.delete(e.pointerId)};canvas.addEventListener('pointerup',up);canvas.addEventListener('pointercancel',e=>this.pointers.delete(e.pointerId));canvas.addEventListener('keydown',e=>{if(['+','=','-','ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)){e.preventDefault();if(['+','='].includes(e.key))this.setZoom(this.zoom*1.4);else if(e.key==='-')this.setZoom(this.zoom/1.4);else{this.lon+=({'ArrowLeft':-15,'ArrowRight':15}[e.key]||0)/this.zoom;this.lat+=({'ArrowUp':15,'ArrowDown':-15}[e.key]||0)/this.zoom;this.clamp();this.draw()}}});this.draw()}
 clamp(){this.lat=Math.max(-70,Math.min(75,this.lat));this.lon=((this.lon+180)%360+360)%360-180}
 setZoom(z){this.zoom=Math.max(1,Math.min(80,z));this.draw()}
 world(){this.lon=0;this.lat=5;this.zoom=1;this.draw()}
 focus(id){const r=FishingData.regions.find(r=>r.id===id);this.selected=id;this.lon=r.lon;this.lat=r.lat;this.zoom=45;this.draw()}
}
// Land remains pixelated; location pins use screen-sized labels at every zoom.
PixelWorld.prototype.draw=function(){
 const c=this.canvas,x=this.ctx;if(c.clientWidth<1||c.clientHeight<1)return;
 const w=Math.max(1,Math.round(c.clientWidth/3)),h=Math.max(1,Math.round(c.clientHeight/3));c.width=w;c.height=h;x.fillStyle='#f6f4eb';x.fillRect(0,0,w,h);
 const scale=Math.min(w/360,h/180)*this.zoom;x.save();x.translate(w/2-this.lon*scale,h/2+this.lat*scale);x.scale(scale,scale);x.fillStyle='#315b4c';x.fill(this.path);x.restore();
 const pixels=x.getImageData(0,0,w,h);for(let i=0;i<pixels.data.length;i+=4){const a=pixels.data[i]<145?[49,91,76]:[246,244,235];pixels.data[i]=a[0];pixels.data[i+1]=a[1];pixels.data[i+2]=a[2];pixels.data[i+3]=255}x.putImageData(pixels,0,0);
 if(!this.markerLayer){this.markerLayer=document.createElement('span');this.markerLayer.className='map-markers';c.parentElement.append(this.markerLayer)}this.markerLayer.replaceChildren();
 const width=c.clientWidth,height=c.clientHeight,screenScale=Math.min(width/360,height/180)*this.zoom,mini=c.id==='miniMap';
 const pos=r=>({x:width/2+(r.lon-this.lon)*screenScale,y:height/2+(this.lat-r.lat)*screenScale});const current=FishingData.regions.find(r=>r.id===(this.current||'sunmoon')),here=pos(current);
 if(!mini)for(const r of FishingData.regions.filter(r=>r.id!==current.id)){
  const p=pos(r);if(p.x<12||p.x>width-12||p.y<12||p.y>height-12||Math.hypot(p.x-here.x,p.y-here.y)<35)continue;
  const b=document.createElement('button');b.className='map-other-marker'+(r.id===this.selected?' selected':'');b.style.left=p.x+'px';b.style.top=p.y+'px';b.setAttribute('aria-label','查看釣點：'+r.name);b.innerHTML='<span></span><small>'+r.name+'</small>';b.onclick=()=>this.onSelect(r.id);this.markerLayer.append(b);
 }
 if(here.x>=0&&here.x<=width&&here.y>=0&&here.y<=height){
  const pin=document.createElement(mini?'span':'button');pin.className='map-current-pin'+(mini?' mini-pin':'')+(here.x<110?' near-left':here.x>width-110?' near-right':'');pin.style.left=here.x+'px';pin.style.top=here.y+'px';pin.setAttribute('aria-label','目前位置：'+current.name);
  pin.innerHTML='<span class="map-pin-label">目前位置 · '+current.name+'</span><svg viewBox="0 0 28 36" aria-hidden="true"><path d="M14 34C11 29 2 20 2 14a12 12 0 1 1 24 0c0 6-9 15-12 20Z"/><circle cx="14" cy="14" r="4"/></svg>';if(!mini)pin.onclick=()=>this.onSelect(current.id);this.markerLayer.append(pin);
 }
 if(!mini)document.getElementById('mapScale').textContent='×'+this.zoom.toFixed(this.zoom<10?1:0);
};

