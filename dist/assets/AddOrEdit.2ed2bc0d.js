import{a as m,b as x,cj as $,aW as o,b9 as g,h as t,a4 as C,bP as _,bA as d,bn as b,G as v,C as k,ba as h,n as S,a8 as F,bQ as I,az as i,I as T,bz as L,T as z,ch as E,S as M,F as A}from"./index.9993709b.js";import{a as D}from"./FolderTree.9fec03f4.js";import"./index.cf352252.js";const H=e=>{const r=m();return t(d,{w:"$full",display:"flex",flexDirection:"column",get children(){return[t(b,{get for(){return e.name},display:"flex",alignItems:"center",get children(){return r(`metas.${e.name}`)}}),t(I,{w:"$full",get direction(){return e.type==="bool"?"row":{"@initial":"column","@md":"row"}},gap:"$2",get children(){return[i(()=>i(()=>e.type==="string")()?t(T,{get id(){return e.name},get value(){return e.value},onInput:n=>e.onChange(n.currentTarget.value)}):i(()=>e.type==="bool")()?t(L,{get id(){return e.name},get checked(){return e.value},onChange:n=>e.onChange(n.currentTarget.checked)}):t(z,{get id(){return e.name},get value(){return e.value},onChange:n=>e.onChange(n.currentTarget.value)})),t(d,{w:"fit-content",display:"flex",get children(){return t(E,{css:{whiteSpace:"nowrap"},get id(){return`${e.name}_sub`},onChange:n=>e.onSub(n.currentTarget.checked),color:"$neutral10",fontSize:"$sm",get checked(){return e.sub},get children(){return r("metas.apply_sub")}})}})]}}),t(M,{get when(){return e.help},get children(){return t(A,{get children(){return r(`metas.${e.name}_help`)}})}})]}})},G=()=>{const e=m(),{params:r,back:n}=x(),{id:u}=r,[s,l]=$({id:0,path:"",password:"",p_sub:!1,write:!1,w_sub:!1,hide:"",h_sub:!1,readme:"",r_sub:!1,header:"",header_sub:!1}),[f,w]=o(()=>g.get(`/admin/meta/get?id=${u}`));u&&(async()=>{const a=await w();h(a,l)})();const[y,p]=o(()=>g.post(`/admin/meta/${u?"update":"create"}`,s));return t(F,{get loading(){return f()},get children(){return t(C,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[t(_,{get children(){return e(`global.${u?"edit":"add"}`)}}),t(d,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[t(b,{for:"path",display:"flex",alignItems:"center",get children(){return e("metas.path")}}),t(D,{id:"path",get value(){return s.path},onChange:a=>l("path",a)})]}}),t(v,{each:[{name:"password",type:"string",sub:"p_sub"},{name:"write",type:"bool",sub:"w_sub"},{name:"hide",type:"text",sub:"h_sub",help:!0},{name:"header",type:"text",sub:"header_sub",help:!0},{name:"readme",type:"text",sub:"r_sub",help:!0}],children:a=>t(H,{get name(){return a.name},get type(){return a.type},get value(){return s[a.name]},onChange:c=>l(a.name,c),get sub(){return s[a.sub]},onSub:c=>l(a.sub,c),get help(){return a.help}})}),t(k,{get loading(){return y()},onClick:async()=>{const a=await p();h(a,()=>{S.success(e("global.save_success")),n()})},get children(){return e(`global.${u?"save":"add"}`)}})]}})}})};export{G as default};
