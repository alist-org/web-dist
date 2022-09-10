import{cL as H,b1 as I,dJ as $,aR as X,l as M,aS as R,x as Y,e as O,aT as z,dF as w,b6 as J,a3 as A,s as G}from"./index.b6eadb67.js";import{b as Q}from"./style.822ccb99.js";/*! @viselect/vanilla v3.5.0 MIT | https://github.com/Simonwep/selection/tree/master/packages/vanilla */var U=Object.defineProperty,V=(l,e,t)=>e in l?U(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t,_=(l,e,t)=>(V(l,typeof e!="symbol"?e+"":e,t),t);class Z{constructor(){_(this,"_listeners",new Map),_(this,"on",this.addEventListener),_(this,"off",this.removeEventListener),_(this,"emit",this.dispatchEvent)}addEventListener(e,t){var s;const i=(s=this._listeners.get(e))!=null?s:new Set;return this._listeners.set(e,i),i.add(t),this}removeEventListener(e,t){var i;return(i=this._listeners.get(e))==null||i.delete(t),this}dispatchEvent(e,...t){var s;let i=!0;for(const o of(s=this._listeners.get(e))!=null?s:[])i=o(...t)!==!1&&i;return i}unbindAllListeners(){this._listeners.clear()}}const j=(l,e="px")=>typeof l=="number"?l+e:l;function b({style:l},e,t){if(typeof e=="object")for(const[i,s]of Object.entries(e))s!==void 0&&(l[i]=j(s));else t!==void 0&&(l[e]=j(t))}const W=l=>(e,t,i,s={})=>{e instanceof HTMLCollection||e instanceof NodeList?e=Array.from(e):Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]);for(const o of e)if(o)for(const n of t)o[l](n,i,{capture:!1,...s});return[e,t,i,s]},S=W("addEventListener"),y=W("removeEventListener"),T=l=>{var o;var e;const{clientX:t,clientY:i,target:s}=(o=(e=l.touches)==null?void 0:e[0])!=null?o:l;return{x:t,y:i,target:s}};function D(l,e,t="touch"){switch(t){case"center":{const i=e.left+e.width/2,s=e.top+e.height/2;return i>=l.left&&i<=l.right&&s>=l.top&&s<=l.bottom}case"cover":return e.left>=l.left&&e.top>=l.top&&e.right<=l.right&&e.bottom<=l.bottom;case"touch":return l.right>=e.left&&l.left<=e.right&&l.bottom>=e.top&&l.top<=e.bottom}}function x(l,e=document){const t=Array.isArray(l)?l:[l];let i=[];for(let s=0,o=t.length;s<o;s++){const n=t[s];typeof n=="string"?i=i.concat(Array.from(e.querySelectorAll(n))):n instanceof Element&&i.push(n)}return i}const ee=()=>matchMedia("(hover: none), (pointer: coarse)").matches,te=()=>"safari"in window,se=l=>{let e,t=-1,i=!1;return{next(...s){e=s,i||(i=!0,t=requestAnimationFrame(()=>{l(...e),i=!1}))},cancel(){cancelAnimationFrame(t),i=!1}}};function ie(l,e){for(const t of e){if(typeof t=="number")return l.button===t;if(typeof t=="object"){const i=t.button===l.button,s=t.modifiers.every(o=>{switch(o){case"alt":return l.altKey;case"ctrl":return l.ctrlKey||l.metaKey;case"shift":return l.shiftKey}});return i&&s}}return!1}const{abs:E,max:K,min:P,ceil:N}=Math;class B extends Z{constructor(e){var t,i,s,o,n;super(),_(this,"_options"),_(this,"_selection",{stored:[],selected:[],touched:[],changed:{added:[],removed:[]}}),_(this,"_area"),_(this,"_clippingElement"),_(this,"_targetElement"),_(this,"_targetRect"),_(this,"_selectables",[]),_(this,"_latestElement"),_(this,"_areaRect",new DOMRect),_(this,"_areaLocation",{y1:0,x2:0,y2:0,x1:0}),_(this,"_singleClick",!0),_(this,"_frame"),_(this,"_scrollAvailable",!0),_(this,"_scrollingActive",!1),_(this,"_scrollSpeed",{x:0,y:0}),_(this,"_scrollDelta",{x:0,y:0}),_(this,"disable",this._bindStartEvents.bind(this,!1)),_(this,"enable",this._bindStartEvents),this._options={selectionAreaClass:"selection-area",selectionContainerClass:void 0,selectables:[],document:window.document,startAreas:["html"],boundaries:["html"],container:"body",...e,behaviour:{overlap:"invert",intersect:"touch",triggers:[0],...e.behaviour,startThreshold:(t=e.behaviour)!=null&&t.startThreshold?typeof e.behaviour.startThreshold=="number"?e.behaviour.startThreshold:{x:10,y:10,...e.behaviour.startThreshold}:{x:10,y:10},scrolling:{speedDivider:10,manualSpeed:750,...(i=e.behaviour)==null?void 0:i.scrolling,startScrollMargins:{x:0,y:0,...(o=(s=e.behaviour)==null?void 0:s.scrolling)==null?void 0:o.startScrollMargins}}},features:{range:!0,touch:!0,...e.features,singleTap:{allow:!0,intersect:"native",...(n=e.features)==null?void 0:n.singleTap}}};for(const h of Object.getOwnPropertyNames(Object.getPrototypeOf(this)))typeof this[h]=="function"&&(this[h]=this[h].bind(this));const{document:r,selectionAreaClass:d,selectionContainerClass:c}=this._options;this._area=r.createElement("div"),this._clippingElement=r.createElement("div"),this._clippingElement.appendChild(this._area),this._area.classList.add(d),c&&this._clippingElement.classList.add(c),b(this._area,{willChange:"top, left, bottom, right, width, height",top:0,left:0,position:"fixed"}),b(this._clippingElement,{overflow:"hidden",position:"fixed",transform:"translate3d(0, 0, 0)",pointerEvents:"none",zIndex:"1"}),this._frame=se(h=>{this._recalculateSelectionAreaRect(),this._updateElementSelection(),this._emitEvent("move",h),this._redrawSelectionArea()}),this.enable()}_bindStartEvents(e=!0){const{document:t,features:i}=this._options,s=e?S:y;s(t,"mousedown",this._onTapStart),i.touch&&s(t,"touchstart",this._onTapStart,{passive:!1})}_onTapStart(e,t=!1){var v;const{x:i,y:s,target:o}=T(e),{_options:n}=this,{document:r}=this._options,d=o.getBoundingClientRect();if(e instanceof MouseEvent&&!ie(e,n.behaviour.triggers))return;const c=x(n.startAreas,n.document),h=x(n.boundaries,n.document);this._targetElement=h.find(f=>D(f.getBoundingClientRect(),d));const u=e.composedPath();if(!this._targetElement||!c.find(f=>u.includes(f))||!h.find(f=>u.includes(f))||!t&&this._emitEvent("beforestart",e)===!1)return;this._areaLocation={x1:i,y1:s,x2:0,y2:0};const a=(v=r.scrollingElement)!=null?v:r.body;this._scrollDelta={x:a.scrollLeft,y:a.scrollTop},this._singleClick=!0,this.clearSelection(!1,!0),S(r,["touchmove","mousemove"],this._delayedTapMove,{passive:!1}),S(r,["mouseup","touchcancel","touchend"],this._onTapStop),S(r,"scroll",this._onScroll)}_onSingleTap(e){const{singleTap:{intersect:t},range:i}=this._options.features,s=T(e);let o;if(t==="native")o=s.target;else if(t==="touch"){this.resolveSelectables();const{x:r,y:d}=s;o=this._selectables.find(c=>{const{right:h,left:u,top:a,bottom:v}=c.getBoundingClientRect();return r<h&&r>u&&d<v&&d>a})}if(!o)return;for(this.resolveSelectables();!this._selectables.includes(o);){if(!o.parentElement)return;o=o.parentElement}const{stored:n}=this._selection;if(this._emitEvent("start",e),e.shiftKey&&i&&this._latestElement){const r=this._latestElement,[d,c]=r.compareDocumentPosition(o)&4?[o,r]:[r,o],h=[...this._selectables.filter(u=>u.compareDocumentPosition(d)&4&&u.compareDocumentPosition(c)&2),d,c];this.select(h),this._latestElement=r}else n.includes(o)&&(n.length===1||e.ctrlKey||n.every(r=>this._selection.stored.includes(r)))?this.deselect(o):(this.select(o),this._latestElement=o);this._emitEvent("stop",e)}_delayedTapMove(e){const{container:t,document:i,behaviour:{startThreshold:s}}=this._options,{x1:o,y1:n}=this._areaLocation,{x:r,y:d}=T(e);if(typeof s=="number"&&E(r+d-(o+n))>=s||typeof s=="object"&&E(r-o)>=s.x||E(d-n)>=s.y){if(y(i,["mousemove","touchmove"],this._delayedTapMove,{passive:!1}),this._emitEvent("beforedrag",e)===!1){y(i,["mouseup","touchcancel","touchend"],this._onTapStop);return}S(i,["mousemove","touchmove"],this._onTapMove,{passive:!1}),b(this._area,"display","block"),x(t,i)[0].appendChild(this._clippingElement),this.resolveSelectables(),this._singleClick=!1,this._targetRect=this._targetElement.getBoundingClientRect(),this._scrollAvailable=this._targetElement.scrollHeight!==this._targetElement.clientHeight||this._targetElement.scrollWidth!==this._targetElement.clientWidth,this._scrollAvailable&&(S(this._targetElement,"wheel",this._manualScroll,{passive:!1}),this._selectables=this._selectables.filter(c=>this._targetElement.contains(c))),this._setupSelectionArea(),this._emitEvent("start",e),this._onTapMove(e)}this._handleMoveEvent(e)}_setupSelectionArea(){const{_clippingElement:e,_targetElement:t,_area:i}=this,s=this._targetRect=t.getBoundingClientRect();this._scrollAvailable?(b(e,{top:s.top,left:s.left,width:s.width,height:s.height}),b(i,{marginTop:-s.top,marginLeft:-s.left})):(b(e,{top:0,left:0,width:"100%",height:"100%"}),b(i,{marginTop:0,marginLeft:0}))}_onTapMove(e){const{x:t,y:i}=T(e),{_scrollSpeed:s,_areaLocation:o,_options:n,_frame:r}=this,{speedDivider:d}=n.behaviour.scrolling,c=this._targetElement;if(o.x2=t,o.y2=i,this._scrollAvailable&&!this._scrollingActive&&(s.y||s.x)){this._scrollingActive=!0;const h=()=>{if(!s.x&&!s.y){this._scrollingActive=!1;return}const{scrollTop:u,scrollLeft:a}=c;s.y&&(c.scrollTop+=N(s.y/d),o.y1-=c.scrollTop-u),s.x&&(c.scrollLeft+=N(s.x/d),o.x1-=c.scrollLeft-a),r.next(e),requestAnimationFrame(h)};requestAnimationFrame(h)}else r.next(e);this._handleMoveEvent(e)}_handleMoveEvent(e){const{features:t}=this._options;(t.touch&&ee()||this._scrollAvailable&&te())&&e.preventDefault()}_onScroll(){var o;const{_scrollDelta:e,_options:{document:t}}=this,{scrollTop:i,scrollLeft:s}=(o=t.scrollingElement)!=null?o:t.body;this._areaLocation.x1+=e.x-s,this._areaLocation.y1+=e.y-i,e.x=s,e.y=i,this._setupSelectionArea(),this._frame.next(null)}_manualScroll(e){const{manualSpeed:t}=this._options.behaviour.scrolling,i=e.deltaY?e.deltaY>0?1:-1:0,s=e.deltaX?e.deltaX>0?1:-1:0;this._scrollSpeed.y+=i*t,this._scrollSpeed.x+=s*t,this._onTapMove(e),e.preventDefault()}_recalculateSelectionAreaRect(){const{_scrollSpeed:e,_areaLocation:t,_areaRect:i,_targetElement:s,_options:o}=this,{scrollTop:n,scrollHeight:r,clientHeight:d,scrollLeft:c,scrollWidth:h,clientWidth:u}=s,a=this._targetRect,{x1:v,y1:f}=t;let{x2:m,y2:p}=t;const{behaviour:{scrolling:{startScrollMargins:g}}}=o;m<a.left+g.x?(e.x=c?-E(a.left-m+g.x):0,m=m<a.left?a.left:m):m>a.right-g.x?(e.x=h-c-u?E(a.left+a.width-m-g.x):0,m=m>a.right?a.right:m):e.x=0,p<a.top+g.y?(e.y=n?-E(a.top-p+g.y):0,p=p<a.top?a.top:p):p>a.bottom-g.y?(e.y=r-n-d?E(a.top+a.height-p-g.y):0,p=p>a.bottom?a.bottom:p):e.y=0;const L=P(v,m),k=P(f,p),q=K(v,m),F=K(f,p);i.x=L,i.y=k,i.width=q-L,i.height=F-k}_redrawSelectionArea(){const{x:e,y:t,width:i,height:s}=this._areaRect,{style:o}=this._area;o.left=`${e}px`,o.top=`${t}px`,o.width=`${i}px`,o.height=`${s}px`}_onTapStop(e,t){var i;const{document:s,features:o}=this._options,{_singleClick:n}=this;y(s,["mousemove","touchmove"],this._delayedTapMove),y(s,["touchmove","mousemove"],this._onTapMove),y(s,["mouseup","touchcancel","touchend"],this._onTapStop),y(s,"scroll",this._onScroll),this._keepSelection(),e&&n&&o.singleTap.allow?this._onSingleTap(e):!n&&!t&&(this._updateElementSelection(),this._emitEvent("stop",e)),this._scrollSpeed.x=0,this._scrollSpeed.y=0,y(this._targetElement,"wheel",this._manualScroll,{passive:!0}),this._clippingElement.remove(),(i=this._frame)==null||i.cancel(),b(this._area,"display","none")}_updateElementSelection(){const{_selectables:e,_options:t,_selection:i,_areaRect:s}=this,{stored:o,selected:n,touched:r}=i,{intersect:d,overlap:c}=t.behaviour,h=c==="invert",u=[],a=[],v=[];for(let m=0;m<e.length;m++){const p=e[m];if(D(s,p.getBoundingClientRect(),d)){if(n.includes(p))o.includes(p)&&!r.includes(p)&&r.push(p);else if(h&&o.includes(p)){v.push(p);continue}else a.push(p);u.push(p)}}h&&a.push(...o.filter(m=>!n.includes(m)));const f=c==="keep";for(let m=0;m<n.length;m++){const p=n[m];!u.includes(p)&&!(f&&o.includes(p))&&v.push(p)}i.selected=u,i.changed={added:a,removed:v},this._latestElement=void 0}_emitEvent(e,t){return this.emit(e,{event:t,store:this._selection,selection:this})}_keepSelection(){const{_options:e,_selection:t}=this,{selected:i,changed:s,touched:o,stored:n}=t,r=i.filter(d=>!n.includes(d));switch(e.behaviour.overlap){case"drop":{t.stored=[...r,...n.filter(d=>!o.includes(d))];break}case"invert":{t.stored=[...r,...n.filter(d=>!s.removed.includes(d))];break}case"keep":{t.stored=[...n,...i.filter(d=>!n.includes(d))];break}}}trigger(e,t=!0){this._onTapStart(e,t)}resolveSelectables(){this._selectables=x(this._options.selectables,this._options.document)}clearSelection(e=!0,t=!1){const{selected:i,stored:s,changed:o}=this._selection;o.added=[],o.removed.push(...i,...e?s:[]),t||(this._emitEvent("move",null),this._emitEvent("stop",null)),this._selection={stored:e?[]:s,selected:[],touched:[],changed:{added:[],removed:[]}}}getSelection(){return this._selection.stored}getSelectionArea(){return this._area}cancel(e=!1){this._onTapStop(null,!e)}destroy(){this.cancel(),this.disable(),this._clippingElement.remove(),super.unbindAllListeners()}select(e,t=!1){const{changed:i,selected:s,stored:o}=this._selection,n=x(e,this._options.document).filter(r=>!s.includes(r)&&!o.includes(r));return o.push(...n),s.push(...n),i.added.push(...n),i.removed=[],this._latestElement=void 0,t||(this._emitEvent("move",null),this._emitEvent("stop",null)),n}deselect(e,t=!1){const{selected:i,stored:s,changed:o}=this._selection,n=x(e,this._options.document).filter(r=>i.includes(r)||s.includes(r));n.length&&(this._selection.stored=s.filter(r=>!n.includes(r)),this._selection.selected=i.filter(r=>!n.includes(r)),this._selection.changed.added=[],this._selection.changed.removed.push(...n.filter(r=>!o.removed.includes(r))),this._latestElement=void 0,t||(this._emitEvent("move",null),this._emitEvent("stop",null)))}}_(B,"version","3.5.0");let C=null;function le(){const l=()=>!$&&X(),e=()=>l()&&M.open_item_on_checkbox==="dblclick",t=()=>l()&&M.open_item_on_checkbox==="disable_while_checked"&&R(),i=()=>{C=G()},s=()=>{if(C===null)return!1;for(let c=0;c<A.objs.length;++c)w(c,C.indexOf(A.objs[c])>=0);return!0},o=()=>{C=null},n=()=>{Y(()=>{if(!l()){const h=document.querySelector(".viselect-container");h==null||h.addEventListener("mousedown",i),O(()=>h==null?void 0:h.removeEventListener("mousedown",i));return}const c=new B({selectionAreaClass:"viselect-selection-area",startAreas:[".viselect-container"],boundaries:[".viselect-container"],selectables:[".viselect-item"]});c.on("beforestart",()=>{i(),c.clearSelection(!0,!0),c.select(".viselect-item.selected",!0)}),c.on("start",({event:h})=>{const u=h;u.type==="mousemove"&&o(),!u.shiftKey&&!u.ctrlKey&&!u.metaKey&&(z(!1),c.clearSelection(!0))}),c.on("move",({store:{changed:{added:h,removed:u}}})=>{for(const a of h)w(Number(a.getAttribute("data-index")),!0);for(const a of u)w(Number(a.getAttribute("data-index")),!1)}),O(()=>c.destroy())})},{show:r}=Q({id:1});return{isMouseSupported:l,openWithDoubleClick:e,toggleWithClick:t,restoreSelectionCache:s,registerSelectContainer:n,captureContentMenu:c=>{if(c.preventDefault(),R()&&!J()){const u=c.target.closest(".viselect-item"),a=Number(u==null?void 0:u.getAttribute("data-index"));if(Number.isNaN(a)||!(()=>!!A.objs[a].selected)())return;c.stopPropagation(),r(c,{props:A.obj})}}}}const re=H(I,{baseStyle:{_before:{content:"",pos:"absolute",top:-10,right:-2,bottom:-10,left:-10}}});export{re as I,le as u};
