'use strict';
class PixelWorld{
 constructor(canvas,onSelect){this.canvas=canvas;this.ctx=canvas.getContext('2d');this.onSelect=onSelect;this.lon=120.75;this.lat=23.6;this.zoom=32;this.selected='sunmoon';this.pointers=new Map();this.maxZoom=canvas.id==='miniMap'?300:200;this.path=new Path2D();for(const ring of window.WORLD_LAND){ring.forEach(([x,y],i)=>i?this.path.lineTo(x,-y):this.path.moveTo(x,-y));this.path.closePath()}this.resize=new ResizeObserver(()=>this.draw());this.resize.observe(canvas);canvas.addEventListener('wheel',e=>{e.preventDefault();const r=canvas.getBoundingClientRect();this.zoomAt(this.zoom*(e.deltaY<0?1.25:.8),e.clientX-r.left,e.clientY-r.top)},{passive:false});canvas.addEventListener('pointerdown',e=>{canvas.setPointerCapture(e.pointerId);this.pointers.set(e.pointerId,[e.clientX,e.clientY]);this.down=[e.clientX,e.clientY];this.moved=false});canvas.addEventListener('pointermove',e=>{if(!this.pointers.has(e.pointerId))return;const old=this.pointers.get(e.pointerId);if(this.pointers.size===2){const others=[...this.pointers.entries()].find(([id])=>id!==e.pointerId)[1];const a=Math.hypot(old[0]-others[0],old[1]-others[1]),b=Math.hypot(e.clientX-others[0],e.clientY-others[1]),r=canvas.getBoundingClientRect();if(a>0)this.zoomAt(this.zoom*b/a,(e.clientX+others[0])/2-r.left,(e.clientY+others[1])/2-r.top,false);this.moved=true}else{const scale=Math.min(canvas.clientWidth/360,canvas.clientHeight/180)*this.zoom;this.lon-=(e.clientX-old[0])/scale;this.lat+=(e.clientY-old[1])/scale;if(Math.hypot(e.clientX-this.down[0],e.clientY-this.down[1])>5)this.moved=true}this.pointers.set(e.pointerId,[e.clientX,e.clientY]);this.clamp();this.draw()});const up=e=>{if(!this.moved&&this.pointers.size===1){const rect=canvas.getBoundingClientRect(),scale=Math.min(canvas.clientWidth/360,canvas.clientHeight/180)*this.zoom;const x=e.clientX-rect.left,y=e.clientY-rect.top;const hits=FishingData.regions.map(r=>({r,d:Math.hypot((r.lon-this.lon)*scale+rect.width/2-x,(this.lat-r.lat)*scale+rect.height/2-y)})).filter(h=>h.d<22).sort((a,b)=>a.d-b.d);if(hits[0])this.onSelect(hits[0].r.id)}this.pointers.delete(e.pointerId)};canvas.addEventListener('pointerup',up);canvas.addEventListener('pointercancel',e=>this.pointers.delete(e.pointerId));canvas.addEventListener('keydown',e=>{if(['+','=','-','ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)){e.preventDefault();if(['+','='].includes(e.key))this.setZoom(this.zoom*1.4);else if(e.key==='-')this.setZoom(this.zoom/1.4);else{this.lon+=({'ArrowLeft':-15,'ArrowRight':15}[e.key]||0)/this.zoom;this.lat+=({'ArrowUp':15,'ArrowDown':-15}[e.key]||0)/this.zoom;this.clamp();this.draw()}}});this.draw()}
 clamp(){this.lat=Math.max(-70,Math.min(75,this.lat));this.lon=((this.lon+180)%360+360)%360-180}
 setZoom(z){this.zoom=Math.max(1,Math.min(this.maxZoom,z));this.draw()}
 // Zoom while keeping the map point under (x,y) — canvas-relative CSS pixels — fixed on screen.
 zoomAt(z,x,y,redraw=true){const c=this.canvas,unit=Math.min(c.clientWidth/360,c.clientHeight/180),dx=x-c.clientWidth/2,dy=y-c.clientHeight/2,lon=this.lon+dx/(unit*this.zoom),lat=this.lat-dy/(unit*this.zoom);this.zoom=Math.max(1,Math.min(this.maxZoom,z));this.lon=lon-dx/(unit*this.zoom);this.lat=lat+dy/(unit*this.zoom);this.clamp();if(redraw)this.draw()}
 world(){this.lon=0;this.lat=5;this.zoom=1;this.draw()}
 focus(id){const r=FishingData.regions.find(r=>r.id===id);this.selected=id;this.lon=r.lon;this.lat=r.lat;this.zoom=45;this.draw()}
}
// Land remains pixelated; location pins use screen-sized labels at every zoom.
PixelWorld.prototype.draw=function(){
 const c=this.canvas,x=this.ctx;if(c.clientWidth<1||c.clientHeight<1)return;
 const w=Math.max(1,Math.round(c.clientWidth/3)),h=Math.max(1,Math.round(c.clientHeight/3));c.width=w;c.height=h;x.fillStyle='#f6f4eb';x.fillRect(0,0,w,h);
 const scale=Math.min(w/360,h/180)*this.zoom,land=PixelWorld.paintWater(x,this.path,w,h,this.lon,this.lat,scale,this.zoom);
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
 if(!mini&&PixelWorld.waterLabels)PixelWorld.drawLabels(this.markerLayer,land,w,pos,this.zoom);
 if(!mini)document.getElementById('mapScale').textContent='×'+this.zoom.toFixed(this.zoom<10?1:0);
};

// Water layers: Natural Earth 50m outside the detail boxes, 10m coast inside them, OSM water for fishing areas.
PixelWorld.waterLabels=(()=>{try{return localStorage.getItem('four-seas-water-labels')!=='off'}catch{return true}})();
PixelWorld.water=function(){
 if(this.cache)return this.cache;const W=window.WORLD_WATER,ring=(p,r,close)=>{r.forEach(([x,y],i)=>i?p.lineTo(x,-y):p.moveTo(x,-y));if(close)p.closePath()};
 const group=(list,close)=>{const m=new Map();for(const f of list){if(!m.has(f.z))m.set(f.z,{detail:new Path2D(),global:new Path2D()});const g=m.get(f.z)[f.d?'detail':'global'];if(close)f.g.forEach(r=>ring(g,r,true));else ring(g,f.g,false)}return[...m].sort((a,b)=>a[0]-b[0])};
 const boxes=new Path2D(),outside=new Path2D(),land=new Path2D();for(const[x0,y0,x1,y1]of W.boxes)boxes.rect(x0,-y1,x1-x0,y1-y0);outside.rect(-540,-100,1080,200);outside.addPath(boxes);W.land.forEach(r=>ring(land,r,true));
 const local=W.local.map(f=>{const p=new Path2D();f.g.forEach(r=>ring(p,r,f.poly));return{...f,path:p}});
 return this.cache={boxes,outside,land,lakes:group(W.lakes,true),rivers:group(W.rivers,false),local};
};
PixelWorld.paintWater=function(x,world,w,h,lon,lat,scale,z){
 const V=this.water(),LAND=[49,91,76],SEA=[246,244,235],LAKE=[164,190,190],layers=(this.layers||=[0,0,0].map(()=>document.createElement('canvas').getContext('2d',{willReadFrequently:true})));
 const view=g=>{g.setTransform(1,0,0,1,0,0);g.translate(w/2-lon*scale,h/2+lat*scale);g.scale(scale,scale)};
 x.fillStyle='#fff';x.fillRect(0,0,w,h);x.save();view(x);x.fillStyle='#000';x.save();x.clip(V.outside,'evenodd');x.fill(world);x.restore();x.clip(V.boxes);x.fill(V.land);x.restore();
 const land=x.getImageData(0,0,w,h),[sea,lake,river]=layers;
 for(const g of layers){g.canvas.width=w;g.canvas.height=h;view(g);g.fillStyle=g.strokeStyle='#000';g.lineJoin=g.lineCap='round'}
 for(const L of V.local)if(L.k==='sea'&&L.poly&&z>=Math.min(L.z,6))sea.fill(L.path);
 const thin=(z<6?.9:1.05)/scale;river.lineWidth=thin;
 for(const[minZ,g]of V.lakes)if(z>=minZ){lake.fill(g.detail);lake.save();if(z>=6)lake.clip(V.outside,'evenodd');lake.fill(g.global);lake.restore()}
 for(const[minZ,g]of V.rivers)if(z>=minZ){river.stroke(g.detail);river.save();if(z>=8)river.clip(V.outside,'evenodd');river.stroke(g.global);river.restore()}
 for(const L of V.local){if(L.k==='sea'||z<Math.min(L.z,8))continue;if(L.poly)lake.fill(L.path);else{river.lineWidth=thin*(z>=120?2.2:z>=40?1.5:1);river.stroke(L.path)}}
 const d=land.data,s=sea.getImageData(0,0,w,h).data,f=lake.getImageData(0,0,w,h).data,r=river.getImageData(0,0,w,h).data,mask=new Uint8Array(w*h);
 for(let i=0,j=0;i<d.length;i+=4,j++){let c=d[i]<145?LAND:SEA;mask[j]=c===LAND;if(s[i+3]>110)c=SEA;if((r[i+3]>70&&c!==SEA)||f[i+3]>70)c=LAKE;d[i]=c[0];d[i+1]=c[1];d[i+2]=c[2];d[i+3]=255}
 x.putImageData(land,0,0);return mask;
};
// Water names sit under the location pins; a pin or an earlier label wins any overlap.
PixelWorld.drawLabels=function(layer,mask,w,pos,z){
 const box=el=>el.getBoundingClientRect(),base=box(layer),taken=[...layer.children].map(el=>{const b=box(el);return[b.left-base.left,b.top-base.top,b.right-base.left,b.bottom-base.top]}),width=base.width,height=base.height;
 for(const L of this.water().local){if(!L.l||z<L.z)continue;const p=pos({lon:L.l[0],lat:L.l[1]});if(p.x<20||p.x>width-20||p.y<12||p.y>height-12)continue;
  const half=L.n.length*6+4,r=[p.x-half,p.y-9,p.x+half,p.y+9];if(taken.some(t=>r[0]<t[2]&&r[2]>t[0]&&r[1]<t[3]&&r[3]>t[1]))continue;taken.push(r);
  const e=document.createElement('span'),ix=Math.min(w-1,Math.max(0,Math.round(p.x/3))),iy=Math.max(0,Math.round(p.y/3));e.className='map-water-label'+(mask[iy*w+ix]&&L.k==='river'?' on-land':'');e.style.left=p.x+'px';e.style.top=p.y+'px';e.textContent=L.n;layer.prepend(e)}
};
