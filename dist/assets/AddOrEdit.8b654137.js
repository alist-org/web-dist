import{a as f,b as _,cq as k,a$ as p,bg as d,h as e,a8 as v,bU as F,S as h,an as c,bH as i,bu as l,I as m,bV as S,H as q,aM as M,b1 as b,C as U,bh as g,n as D,ao as L,di as P,af as T}from"./index.b6eadb67.js";import{a as E}from"./FolderTree.1db85357.js";import{P as H}from"./PublicKeys.355378d6.js";import"./index.a36f1030.js";const R=r=>{const u=f();return e(i,{display:"inline-flex",flexDirection:"row",alignItems:"center",gap:"$2",rounded:"$md",shadow:"$md",p:"$2",w:"fit-content",get children(){return[e(l,{mb:"0",get children(){return u(`users.permissions.${r.name}`)}}),e(b,{get checked(){return r.can},onChange:()=>r.onChange(!r.can)})]}})},O=()=>{const r=f(),{params:u,back:w}=_(),{id:t}=u,[n,a]=k({id:0,username:"",password:"",base_path:"",role:0,permission:0,disabled:!1,sso_id:""}),[$,y]=p(()=>d.get(`/admin/user/get?id=${t}`));t&&(async()=>{const s=await y();g(s,a)})();const[x,I]=p(()=>d.post(`/admin/user/${t?"update":"create"}`,n));return e(T,{get loading(){return $()},get children(){return e(v,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[e(F,{get children(){return r(`global.${t?"edit":"add"}`)}}),e(h,{get when(){return!c.is_guest(n)},get children(){return[e(i,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[e(l,{for:"username",display:"flex",alignItems:"center",get children(){return r("users.username")}}),e(m,{id:"username",get value(){return n.username},onInput:s=>a("username",s.currentTarget.value)})]}}),e(i,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[e(l,{for:"password",display:"flex",alignItems:"center",get children(){return r("users.password")}}),e(m,{id:"password",type:"password",placeholder:"********",get value(){return n.password},onInput:s=>a("password",s.currentTarget.value)})]}})]}}),e(i,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[e(l,{for:"base_path",display:"flex",alignItems:"center",get children(){return r("users.base_path")}}),e(E,{id:"base_path",get value(){return n.base_path},onChange:s=>a("base_path",s),onlyFolder:!0})]}}),e(i,{w:"$full",required:!0,get children(){return[e(l,{display:"flex",alignItems:"center",get children(){return r("users.permission")}}),e(S,{w:"$full",wrap:"wrap",gap:"$2",get children(){return e(q,{each:M,children:(s,o)=>e(R,{name:s,get can(){return c.can(n,o())},onChange:C=>{C?a("permission",n.permission|=1<<o()):a("permission",n.permission&=~(1<<o()))}})})}})]}}),e(i,{w:"fit-content",display:"flex",get children(){return e(b,{css:{whiteSpace:"nowrap"},id:"disabled",onChange:s=>a("disabled",s.currentTarget.checked),color:"$neutral10",fontSize:"$sm",get checked(){return n.disabled},get children(){return r("users.disabled")}})}}),e(U,{get loading(){return x()},onClick:async()=>{const s=await I();g(s,async()=>{D.success(r("global.save_success")),n.username===L().username&&g(await d.get("/me"),P),w()})},get children(){return r(`global.${t?"save":"add"}`)}}),e(h,{get when(){return t&&!c.is_guest(n)},get children(){return e(H,{isMine:!1,get userId(){return parseInt(t)}})}})]}})}})};export{O as default};
