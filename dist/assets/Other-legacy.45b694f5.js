System.register(["./index-legacy.87e1c49a.js","./useTitle-legacy.1462b19e.js","./index-legacy.e08ff3a4.js","./SettingItem-legacy.2a4431b9.js","./index-legacy.ddbd61c4.js","./index-legacy.2e08aba4.js","./item_type-legacy.d1f1c701.js"],(function(e){"use strict";var t,n,r,i,s,a,c,g,o,u,l,d,y,_,h,m,k,b;return{setters:[e=>{t=e.a,n=e.m,r=e.aW,i=e.b9,s=e.bI,a=e.h,c=e.bP,g=e.d7,o=e.E,u=e.C,l=e.ba,d=e.n,y=e.I,_=e.ae,h=e.a8},e=>{m=e.b},e=>{k=e.G},e=>{b=e.I},()=>{},()=>{},()=>{}],execute:function(){e("default",(()=>{const e=t();m("manage.sidemenu.other");const[f,$]=n(""),[v,p]=n(""),[C,j]=n(""),[q,I]=n(""),[x,w]=n(""),[S,A]=n([]),[E,G]=r((()=>i.get(`/admin/setting/list?groups=${k.ARIA2},${k.SINGLE}`))),[L,N]=r((()=>i.post("/admin/setting/set_aria2",{uri:f(),secret:v()}))),[O,P]=r((()=>i.post("/admin/setting/set_qbit",{url:C(),seedtime:q()})));(async()=>{const e=await G();l(e,(e=>{$(e.find((e=>"aria2_uri"===e.key))?.value||""),p(e.find((e=>"aria2_secret"===e.key))?.value||""),w(e.find((e=>"token"===e.key))?.value||""),j(e.find((e=>"qbittorrent_url"===e.key))?.value||""),I(e.find((e=>"qbittorrent_seedtime"===e.key))?.value||""),A(e)}))})();const[R,T]=r((()=>i.post("/admin/setting/reset_token"))),{copy:W}=s();return a(h,{get loading(){return E()},get children(){return[a(c,{mb:"$2",get children(){return e("settings_other.aria2")}}),a(g,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[a(b,o((()=>S().find((e=>"aria2_uri"===e.key))),{get value(){return f()},onChange:e=>$(e)})),a(b,o((()=>S().find((e=>"aria2_secret"===e.key))),{get value(){return v()},onChange:e=>p(e)}))]}}),a(u,{my:"$2",get loading(){return L()},onClick:async()=>{const t=await N();l(t,(t=>{d.success(`${e("settings_other.aria2_version")} ${t}`)}))},get children(){return e("settings_other.set_aria2")}}),a(c,{my:"$2",get children(){return e("settings_other.qbittorrent")}}),a(g,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[a(b,o((()=>S().find((e=>"qbittorrent_url"===e.key))),{get value(){return C()},onChange:e=>j(e)})),a(b,o((()=>S().find((e=>"qbittorrent_seedtime"===e.key))),{get value(){return q()},onChange:e=>I(e)}))]}}),a(u,{my:"$2",get loading(){return O()},onClick:async()=>{const e=await P();l(e,(e=>{d.success(e)}))},get children(){return e("settings_other.set_qbit")}}),a(c,{my:"$2",get children(){return e("settings.token")}}),a(y,{get value(){return x()},readOnly:!0}),a(_,{my:"$2",spacing:"$2",get children(){return[a(u,{onClick:()=>{W(x())},get children(){return e("settings_other.copy_token")}}),a(u,{colorScheme:"danger",get loading(){return R()},onClick:async()=>{const t=await T();l(t,(t=>{d.success(e("settings_other.reset_token_success")),w(t)}))},get children(){return e("settings_other.reset_token")}})]}})]}})}))}}}));
