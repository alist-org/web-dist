import{bL as j,E as x,h as r,as as k,l as c,aE as y,b as $,a8 as w,N as d,ac as C,dG as n,t as I,aI as v,aD as S,S as g,aR as E,aC as M,a7 as z,ak as K}from"./index.c639c009.js";import{b as P}from"./style.364c2b21.js";import{x as W}from"./index.3ab44f40.js";import{I as _}from"./ImageWithError.7fec3005.js";import{g as G,O as m}from"./icon.dd049bb9.js";import{I as O,u as A}from"./helper.c462b8d9.js";const N=e=>{const{isHide:b}=j();if(b(e.obj))return null;const{setPathAs:h}=x(),i=r(y,{get color(){return k()},get boxSize(){return`${parseInt(c.grid_item_size)-30}px`},get as(){return G(e.obj)}}),{show:f}=P({id:1}),{pushHref:o,to:l}=$(),{openWithDoubleClick:a,toggleWithClick:s,restoreSelectionCache:u}=A();return r(K.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return r(w,{get classList(){return{selected:!!e.obj.selected}},class:"grid-item viselect-item",get["data-index"](){return e.index},w:"$full",p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.06)",bgColor:d()}},as:W,get href(){return e.obj.name},get cursor(){return a()||s()?"default":"pointer"},get bgColor(){return C(()=>!!e.obj.selected,!0)()?d():void 0},"on:dblclick":()=>{!a()||(n(e.index,!0,!0),l(o(e.obj.name)))},"on:click":t=>{if(t.preventDefault(),!a()&&!(t.ctrlKey||t.metaKey||t.shiftKey)&&!!u()){if(s())return n(e.index,!e.obj.selected);l(o(e.obj.name))}},onMouseEnter:()=>{h(e.obj.name,e.obj.is_dir,!0)},onContextMenu:t=>{I(()=>{n(e.index,!0,!0)}),f(t,{props:e.obj})},get children(){return[r(v,{class:"item-thumbnail",get h(){return`${parseInt(c.grid_item_size)}px`},w:"$full",get cursor(){return e.obj.type!==m.IMAGE?"inherit":"pointer"},"on:click":t=>{e.obj.type===m.IMAGE&&(t.ctrlKey||t.metaKey||t.shiftKey||!u()||(S.emit("gallery",e.obj.name),t.preventDefault(),t.stopPropagation()))},pos:"relative",get children(){return[r(g,{get when(){return E()},get children(){return r(O,{pos:"absolute",left:"$1",top:"$1","on:mousedown":t=>{t.stopPropagation()},"on:click":t=>{t.stopPropagation()},get checked(){return e.obj.selected},onChange:t=>{n(e.index,t.target.checked)}})}}),r(g,{get when(){return e.obj.thumb},fallback:i,get children(){return r(_,{maxH:"$full",maxW:"$full",rounded:"$lg",shadow:"$md",get fallback(){return r(M,{size:"lg"})},fallbackErr:i,get src(){return e.obj.thumb},loading:"lazy"})}})]}}),r(z,{css:{whiteSpace:"nowrap",textOverflow:"ellipsis"},w:"$full",overflow:"hidden",textAlign:"center",fontSize:"$sm",get title(){return e.obj.name},get children(){return e.obj.name}})]}})}})};export{N as G};
