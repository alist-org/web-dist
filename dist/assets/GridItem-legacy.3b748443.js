System.register(["./index-legacy.87e1c49a.js","./Folder-legacy.851eec78.js","./index-legacy.ddd9c40c.js","./index-legacy.ddbd61c4.js","./ImageWithError-legacy.2b7c74b0.js","./icon-legacy.aa6f9995.js","./helper-legacy.736f63b0.js"],(function(e){"use strict";var t,r,n,a,l,o,i,s,c,u,d,g,b,p,h,j,m,f,y,x,v,$,w,k,I,z,M,S,_,C;return{setters:[e=>{t=e.bI,r=e.h,n=e.al,a=e.l,l=e.ax,o=e.m,i=e.k,s=e.aM,c=e.b,u=e.a4,d=e.L,g=e.az,b=e.dr,p=e.t,h=e.aO,j=e.aC,m=e.aw,f=e.S,y=e.av,x=e.b5,v=e.ad},e=>{$=e.b},e=>{w=e.u},e=>{k=e.q},e=>{I=e.I},e=>{z=e.g,M=e.O},e=>{S=e.u,_=e.I,C=e.a}],execute:function(){e("G",(e=>{const{isHide:E}=t();if(E(e.obj))return null;const{setPathAs:A}=w(),D=r(l,{get color(){return n()},get boxSize(){return parseInt(a.grid_item_size)-30+"px"},get as(){return z(e.obj)}}),[P,G]=o(!1),H=i((()=>s()&&(P()||e.obj.selected))),{show:K}=$({id:1}),{pushHref:L,to:O}=c(),{isMouseSupported:W}=C(),q=S();return r(v.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return r(u,{get classList(){return{selected:!!e.obj.selected}},class:"grid-item viselect-item",get"data-index"(){return e.index},w:"$full",p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.06)",bgColor:d()}},as:k,get href(){return e.obj.name},get cursor(){return W()||s()&&!q()?"default":"pointer"},get bgColor(){return g((()=>!!e.obj.selected))()?d():void 0},"on:dblclick":t=>{W()&&(t.ctrlKey||t.metaKey||t.shiftKey||O(L(e.obj.name)))},"on:click":t=>{if(W())return t.preventDefault();s()&&(t.preventDefault(),q()?O(L(e.obj.name)):b(e.index,!e.obj.selected))},onMouseEnter:()=>{G(!0),A(e.obj.name,e.obj.is_dir,!0)},onMouseLeave:()=>{G(!1)},onContextMenu:t=>{p((()=>{h(!1),b(e.index,!0,!0)})),K(t,{props:e.obj})},get children(){return[r(j,{class:"item-thumbnail",get h(){return`${parseInt(a.grid_item_size)}px`},w:"$full","on:dblclick":t=>{W()&&e.obj.type===M.IMAGE&&(t.stopPropagation(),t.preventDefault(),m.emit("gallery",e.obj.name))},"on:click":t=>{W()||s()&&!q()||e.obj.type===M.IMAGE&&(t.stopPropagation(),t.preventDefault(),m.emit("gallery",e.obj.name))},pos:"relative",get children(){return[r(f,{get when(){return H()},get children(){return r(_,{pos:"absolute",left:"$1",top:"$1","on:click":e=>{e.stopPropagation()},get checked(){return e.obj.selected},onChange:t=>{b(e.index,t.target.checked)}})}}),r(f,{get when(){return e.obj.thumb},fallback:D,get children(){return r(I,{maxH:"$full",maxW:"$full",rounded:"$lg",shadow:"$md",get fallback(){return r(y,{size:"lg"})},fallbackErr:D,get src(){return e.obj.thumb},loading:"lazy"})}})]}}),r(x,{css:{whiteSpace:"nowrap",textOverflow:"ellipsis"},w:"$full",overflow:"hidden",textAlign:"center",fontSize:"$sm",get title(){return e.obj.name},get children(){return e.obj.name}})]}})}})}))}}}));
