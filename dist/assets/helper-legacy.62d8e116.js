!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function r(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?e(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function n(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=u(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,a=!0,i=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){i=!0,c=t},f:function(){try{a||null==r.return||r.return()}finally{if(i)throw c}}}}function o(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */o=function(){return e};var e={},r=Object.prototype,n=r.hasOwnProperty,c="function"==typeof Symbol?Symbol:{},a=c.iterator||"@@iterator",i=c.asyncIterator||"@@asyncIterator",u=c.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(L){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,c=Object.create(o.prototype),a=new S(n||[]);return c._invoke=function(t,e,r){var n="suspendedStart";return function(o,c){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw c;return E()}for(r.method=o,r.arg=c;;){var a=r.delegate;if(a){var i=k(a,r);if(i){if(i===d)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),c}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(L){return{type:"throw",arg:L}}}e.wrap=s;var d={};function h(){}function p(){}function g(){}var v={};l(v,a,(function(){return this}));var m=Object.getPrototypeOf,y=m&&m(m(O([])));y&&y!==r&&n.call(y,a)&&(v=y);var w=g.prototype=h.prototype=Object.create(v);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function b(e,r){function o(c,a,i,u){var l=f(e[c],e,a);if("throw"!==l.type){var s=l.arg,d=s.value;return d&&"object"==t(d)&&n.call(d,"__await")?r.resolve(d.__await).then((function(t){o("next",t,i,u)}),(function(t){o("throw",t,i,u)})):r.resolve(d).then((function(t){s.value=t,i(s)}),(function(t){return o("throw",t,i,u)}))}u(l.arg)}var c;this._invoke=function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return c=c?c.then(n,n):n()}}function k(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,d;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function $(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach($,this),this.reset(!0)}function O(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:E}}function E(){return{value:void 0,done:!0}}return p.prototype=g,l(w,"constructor",g),l(g,"constructor",p),p.displayName=l(g,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},x(b.prototype),l(b.prototype,i,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,n,o,c){void 0===c&&(c=Promise);var a=new b(s(t,r,n,o),c);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),l(w,u,"Generator"),l(w,a,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],a=c.completion;if("root"===c.tryLoc)return r("end");if(c.tryLoc<=this.prev){var i=n.call(c,"catchLoc"),u=n.call(c,"finallyLoc");if(i&&u){if(this.prev<c.catchLoc)return r(c.catchLoc,!0);if(this.prev<c.finallyLoc)return r(c.finallyLoc)}else if(i){if(this.prev<c.catchLoc)return r(c.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return r(c.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var c=o;break}}c&&("break"===t||"continue"===t)&&c.tryLoc<=e&&e<=c.finallyLoc&&(c=null);var a=c?c.completion:{};return a.type=t,a.arg=e,c?(this.method="next",this.next=c.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}function c(t,e,r,n,o,c,a){try{var i=t[c](a),u=i.value}catch(l){return void r(l)}i.done?e(u):Promise.resolve(u).then(n,o)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){c(a,n,o,i,u,"next",t)}function u(t){c(a,n,o,i,u,"throw",t)}i(void 0)}))}}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,c=[],a=!0,i=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(c.push(n.value),!e||c.length!==e);a=!0);}catch(u){i=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(i)throw o}}return c}(t,e)||u(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){if(t){if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(t,e):void 0}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}System.register(["./index-legacy.bbec5e79.js","./Paginator-legacy.74a80195.js"],(function(t){"use strict";var e,c,u,l,f,d,h,p,g,v,m,y,w,x,b,k,$,_,S,O,E,L,j,A,P,C,F,T,z,I,N,R,G,B,D,W,M,U,Y,q,H;return{setters:[function(t){e=t.ao,c=t.a,u=t.a$,l=t.bg,f=t.m,d=t.h,h=t.al,p=t.b1,g=t.bU,v=t.S,m=t.aI,y=t.ct,w=t.cu,x=t.a7,b=t.bV,k=t.dq,$=t.C,_=t.bh,S=t.n,O=t.ac,E=t.a8,L=t.dh,j=t.dr,A=t.H,P=t.ds,C=t.cr,F=t.k,T=t.e,z=t.x,I=t.I,N=t.G,R=t.t,G=t.d0,B=t.b,D=t.J,W=t.aQ,M=t.cg,U=t.dt,Y=t.ch,q=t.ap},function(t){H=t.P}],execute:function(){var J,K;!function(t){t[t.Pending=0]="Pending",t[t.Running=1]="Running",t[t.Succeeded=2]="Succeeded",t[t.Canceling=3]="Canceling",t[t.Canceled=4]="Canceled",t[t.Errored=5]="Errored",t[t.Failing=6]="Failing",t[t.Failed=7]="Failed",t[t.WaitingRetry=8]="WaitingRetry",t[t.BeforeRetry=9]="BeforeRetry"}(K||(K={}));var Q=(s(J={},K.Failed,"danger"),s(J,K.Succeeded,"success"),s(J,K.Canceled,"neutral"),J),V=function(t){if(t.role<0)return null;var e=["info","neutral","accent"];return d(C,{get colorScheme(){return e[t.role]},css:{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},get children(){return t.name}})},X=function(t){var e=c();return d(C,{get colorScheme(){var e;return null!==(e=Q[t.state])&&void 0!==e?e:"info"},get children(){return e("tasks.state.".concat(t.state))}})},Z=[{name:"name",textAlign:"left",w:2===e().role?"calc(100% - 660px)":"calc(100% - 560px)"},{name:"creator",textAlign:"center",w:2===e().role?"100px":"0"},{name:"state",textAlign:"center",w:"100px"},{name:"progress",textAlign:"left",w:"140px"},{name:"speed",textAlign:"center",w:"100px"},{name:"operation",textAlign:"right",w:"220px"}],tt=function(t){return Math.floor(t).toString().padStart(2,"0")},et=function(t){var r=c(),n="undone"===t.done?"cancel":"delete",s="done"===t.done&&(t.state===K.Failed||t.state===K.Canceled),C=i(u((function(){return l.post("/task/".concat(t.type,"/").concat(n,"?tid=").concat(t.id))})),2),F=C[0],T=C[1],z=i(u((function(){return l.post("/task/".concat(t.type,"/retry?tid=").concat(t.id))})),2),I=z[0],N=z[1],R=i(f(!1),2),G=R[0],B=R[1],D=t.name.match(t.nameAnalyzer.regex),W=null===D?t.name:t.nameAnalyzer.title(D),M=null===t.start_time?-1:new Date(t.start_time).getTime(),U=null===t.end_time?(new Date).getTime():new Date(t.end_time).getTime(),Y="-",q=function(t,e){var r=e/t,n="bytes/s";return r>1024&&(r/=1024,n="KB/s"),r>1024&&(r/=1024,n="MB/s"),r>1024&&(r/=1024,n="GB/s"),"".concat(r.toFixed(2)," ").concat(n)};if(t.done){if(t.start_time!==t.end_time&&t.progress>0&&-1!==M){var H=(U-M)/1e3,J=t.total_bytes*t.progress/100;Y=q(H,J)}}else if(void 0!==t.prevProgress&&void 0!==t.prevFetchTime){var Q=(t.curFetchTime-t.prevFetchTime)/1e3,et=(t.progress-t.prevProgress)*t.total_bytes/100;Y=q(Q,et)}return d(v,{get when(){return!G()},get children(){return[d(h,{w:"$full",p:"$2",get children(){return[d(h,{get w(){return Z[0].w},spacing:"$1",get children(){return[d(p,{"on:click":function(t){t.stopPropagation()},get checked(){return t.local.selected},onChange:function(e){t.setLocal({selected:e.target.checked,expanded:t.local.expanded})}}),d(g,{size:"sm",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:W})]}}),d(v,{get when(){return 2===e().role},get children(){return d(m,{get w(){return Z[1].w},get children(){return d(V,{get name(){return t.creator},get role(){return t.creator_role}})}})}}),d(m,{get w(){return Z[2].w},get children(){return d(X,{get state(){return t.state}})}}),d(y,{get w(){return Z[3].w},trackColor:"$info3",rounded:"$full",size:"sm",get value(){return t.progress},mr:"$1",get children(){return d(w,{color:"$info8",rounded:"$md"})}}),d(m,{get w(){return Z[1].w},get children(){return d(x,{size:"sm",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:Y})}}),d(b,{get w(){return Z[5].w},gap:"$1",get children(){return[d(k,{}),d(v,{get when(){return t.canRetry},get children(){return d($,{size:"sm",disabled:!s,display:s?"block":"none",get loading(){return I()},onClick:(t=a(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N();case 2:e=t.sent,_(e,(function(){S.info(r("tasks.retry")),B(!0)}));case 4:case"end":return t.stop()}}),t)}))),function(){return t.apply(this,arguments)}),get children(){return r("tasks.retry")}});var t}}),d($,{size:"sm",colorScheme:"danger",get loading(){return F()},onClick:(e=a(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T();case 2:e=t.sent,_(e,(function(){S.success(r("global.delete_success")),B(!0)}));case 4:case"end":return t.stop()}}),t)}))),function(){return e.apply(this,arguments)}),get children(){return r("global.".concat(n))}}),d($,{size:"sm",colorScheme:"neutral",onClick:function(){t.setLocal({selected:t.local.selected,expanded:!t.local.expanded})},get children(){return O((function(){return!!t.local.expanded}),!0)()?r("tasks.fold"):r("tasks.expand")}})];var e}})]}}),d(v,{get when(){return t.local.expanded},get children(){return d(E,{css:{wordBreak:"break-all",fontSize:"0.8em"},w:"$full",pl:"$2",pr:"$2",get children(){return[d(L,{templateColumns:"min-content 1fr",w:"$full",columnGap:"$4",mb:"$2",get children(){return[d(v,{when:-1!==M,get children(){return[d(j,{color:"$neutral9",textAlign:"right",css:{whiteSpace:"nowrap"},get children(){return r("tasks.attr.time_elapsed")}}),d(j,{color:"$neutral9",get children(){return e=(t=U-M)/1e3%60,r=t/1e3/60%60,"".concat(tt(t/1e3/3600),":").concat(tt(r),":").concat(tt(e));var t,e,r}})]}}),d(v,{when:null!==D,get children(){return d(A,{get each(){return Object.entries(t.nameAnalyzer.attrs)},children:function(t){var e=t[1](D);return void 0===e?null:d(v,{get when(){return void 0!==t[1]},get children(){return[d(j,{color:"$neutral9",textAlign:"right",css:{whiteSpace:"nowrap"},get children(){return t[0]}}),d(j,{color:"$neutral9",children:e})]}})}})}}),d(j,{color:"$neutral9",textAlign:"right",css:{whiteSpace:"nowrap"},get children(){return r("tasks.attr.status")}}),d(j,{color:"$neutral9",get children(){return t.status}}),d(v,{get when(){return t.error},get children(){return[d(j,{color:"$danger9",textAlign:"right",css:{whiteSpace:"nowrap"},get children(){return r("tasks.attr.err")}}),d(j,{color:"$danger9",get children(){return t.error}})]}})]}}),d(P,{})]}})}})]}})},rt=function(t){var s=c(),m=i(u((function(){return l.get("/task/".concat(t.type,"/").concat(t.done))})),2),y=m[0],w=m[1],L=i(f([]),2),j=L[0],A=L[1],P=i(f("name"),2),C=P[0],G=P[1],B=i(f(!1),2),D=B[0],W=B[1],M={name:function(t,e){return t.name>e.name?1:-1},creator:function(t,e){return t.creator===e.creator?t.id>e.id?1:-1:t.creator>e.creator?1:-1},state:function(t,e){return t.state===e.state?t.id>e.id?1:-1:t.state>e.state?1:-1},progress:function(t,e){return t.progress===e.progress?t.id>e.id?1:-1:t.progress<e.progress?1:-1}},U=F((function(){return function(t,e){return(D()?-1:1)*M[C()](t,e)}})),Y=function(){var t=a(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:e=t.sent,_(e,(function(t){var e,o,c=(new Date).getTime(),a={},i={},u={},l={},s={},f=n(j());try{for(f.s();!(o=f.n()).done;){var d=o.value;a[d.id]=d.curFetchTime,i[d.id]=d.prevFetchTime,u[d.id]=d.progress,l[d.id]=d.prevProgress,s[d.id]=d.local}}catch(h){f.e(h)}finally{f.f()}A(null!==(e=null==t?void 0:t.map((function(t){var e,n,o;t.progress===u[t.id]?(n=i[t.id],o=l[t.id]):(n=a[t.id],o=u[t.id]);var f=null!==(e=s[t.id])&&void 0!==e?e:{selected:!1,expanded:!1};return r(r({},t),{},{curFetchTime:c,prevFetchTime:n,prevProgress:o,local:f})})).sort(U()))&&void 0!==e?e:[])}));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();if(Y(),"undone"===t.done){var q=setInterval(Y,2e3);T((function(){return clearInterval(q)}))}var J=i(u((function(){return l.post("/task/".concat(t.type,"/clear_done"))})),2),K=J[0],Q=J[1],V=i(u((function(){return l.post("/task/".concat(t.type,"/clear_succeeded"))})),2),X=V[0],tt=V[1],rt=i(u((function(){return l.post("/task/".concat(t.type,"/retry_failed"))})),2),nt=rt[0],ot=rt[1],ct=i(f(""),2),at=ct[0],it=ct[1],ut=i(f(new RegExp("")),2),lt=ut[0],st=ut[1],ft=i(f(!1),2),dt=ft[0],ht=ft[1];z((function(){try{st(new RegExp(at())),ht(!1)}catch(t){ht(!0)}}));var pt=i(f(2!==e().role),2),gt=pt[0],vt=pt[1],mt=F((function(){var t=lt(),r=gt();return function(n){return t.test(n.name)&&(!r||n.creator===e().username)}})),yt=F((function(){return j().filter(mt())})),wt=F((function(){return yt().map((function(t){return t.local.selected})).every(Boolean)})),xt=F((function(){return yt().map((function(t){return t.local.selected})).some(Boolean)&&!wt()})),bt=F((function(){return yt().map((function(t){return t.local.expanded})).every(Boolean)})),kt=function(){return yt().filter((function(t){return t.local.selected})).map((function(t){return t.id}))},$t=i(u((function(){return l.post("/task/".concat(t.type,"/retry_some"),kt())})),2),_t=$t[0],St=$t[1],Ot=i(u((function(){return l.post("/task/".concat(t.type,"/").concat(Ft,"_some"),kt())})),2),Et=Ot[0],Lt=Ot[1],jt=function(t){Object.entries(t).forEach((function(t){var e=i(t,2),r=e[0],n=e[1];S.error("".concat(r,": ").concat(n))}))},At=i(f(1),2),Pt=At[0],Ct=At[1],Ft="undone"===t.done?"cancel":"delete",Tt=F((function(){var t=20*(Pt()-1),e=t+20;return yt().slice(t,e)})),zt=function(t){return{fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:t.textAlign}},It=function(t){return{cursor:"pointer",onClick:function(){C()===t.name?W(!D()):R((function(){G(t.name),W(!1)})),Y()}}};return d(E,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[d(g,{size:"lg",get children(){return s("tasks.".concat(t.done))}}),d(h,{gap:"$2",flexWrap:"wrap",get children(){return[d(v,{get when(){return"done"===t.done},get children(){return[d($,{colorScheme:"accent",get loading(){return y()},onClick:Y,get children(){return s("global.refresh")}}),d($,{get loading(){return nt()},onClick:(r=a(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ot();case 2:e=t.sent,_(e,(function(){return Y()}));case 4:case"end":return t.stop()}}),t)}))),function(){return r.apply(this,arguments)}),get children(){return s("tasks.retry_failed")}}),d($,{colorScheme:"danger",get loading(){return K()},onClick:(e=a(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Q();case 2:e=t.sent,_(e,(function(){return Y()}));case 4:case"end":return t.stop()}}),t)}))),function(){return e.apply(this,arguments)}),get children(){return s("global.clear")}}),d($,{colorScheme:"success",get loading(){return X()},onClick:(t=a(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,tt();case 2:e=t.sent,_(e,(function(){return Y()}));case 4:case"end":return t.stop()}}),t)}))),function(){return t.apply(this,arguments)}),get children(){return s("tasks.clear_succeeded")}})];var t,e,r}}),d(v,{get when(){return t.canRetry},get children(){return d($,{colorScheme:"primary",get loading(){return _t()},onClick:(t=a(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,St();case 2:e=t.sent,_(e,(function(t){jt(t),Y()}));case 4:case"end":return t.stop()}}),t)}))),function(){return t.apply(this,arguments)}),get children(){return s("tasks.retry_selected")}});var t}}),d($,{colorScheme:"warning",get loading(){return Et()},onClick:(r=a(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Lt();case 2:e=t.sent,_(e,(function(t){jt(t),Y()}));case 4:case"end":return t.stop()}}),t)}))),function(){return r.apply(this,arguments)}),get children(){return s("tasks.".concat(Ft,"_selected"))}}),d(I,{width:"auto",get placeholder(){return s("tasks.filter")},get value(){return at()},onInput:function(t){return it(t.target.value)},get invalid(){return dt()}}),d(v,{get when(){return 2===e().role},get children(){return d(p,{get checked(){return gt()},onChange:function(t){return vt(t.target.checked)},get children(){return s("tasks.show_only_mine")}})}})];var r}}),d(E,{w:{"@initial":"1024px","@lg":"$full"},overflowX:"auto",shadow:"$md",rounded:"$lg",spacing:"$1",p:"$1",get children(){return[d(h,{class:"title",w:"$full",p:"$2",get children(){return[d(h,{get w(){return Z[0].w},spacing:"$1",get children(){return[d(p,{get disabled(){return 0===yt().length},get checked(){return wt()},get indeterminate(){return xt()},onChange:function(t){return e=t.target.checked,A(j().map((function(t){return mt()(t)&&(t.local.selected=e),t})));var e}}),d(x,N((function(){return zt(Z[0])}),(function(){return It(Z[0])}),{get children(){return s("tasks.attr.".concat(Z[0].name))}}))]}}),d(v,{get when(){return 2===e().role},get children(){return d(x,N({get w(){return Z[1].w}},(function(){return zt(Z[1])}),(function(){return It(Z[1])}),{get children(){return s("tasks.attr.".concat(Z[1].name))}}))}}),d(x,N({get w(){return Z[2].w}},(function(){return zt(Z[2])}),(function(){return It(Z[2])}),{get children(){return s("tasks.attr.".concat(Z[2].name))}})),d(x,N({get w(){return Z[3].w}},(function(){return zt(Z[3])}),(function(){return It(Z[3])}),{get children(){return s("tasks.attr.".concat(Z[3].name))}})),d(x,N({get w(){return Z[4].w}},(function(){return zt(Z[4])}),{get children(){return s("tasks.attr.".concat(Z[4].name))}})),d(b,{get w(){return Z[5].w},gap:"$2",get children(){return[d(k,{}),d(x,N((function(){return zt(Z[5])}),{get children(){return s("tasks.attr.".concat(Z[5].name))}})),d($,{size:"xs",colorScheme:"neutral",onClick:function(){return t=!bt(),A(j().map((function(e){return mt()(e)&&(e.local.expanded=t),e})));var t},get disabled(){return 0===yt().length},get children(){return O((function(){return!!bt()}),!0)()?s("tasks.fold_all"):s("tasks.expand_all")}})]}})]}}),O((function(){return Tt().map((function(e){return d(et,N(e,t,{get setLocal(){return t=e.id,function(e){return A(j().map((function(r){return r.id===t&&(r.local=e),r})))};var t}}))}))}))]}}),d(H,{get total(){return yt().length},defaultPageSize:20,onChange:function(t){Ct(t)}})]}})},nt=(t("T",(function(t){var e=c();return d(E,{w:"$full",alignItems:"start",spacing:"$4",get children(){return[d(g,{size:"xl",get children(){return e("tasks.".concat(t.type))}}),d(E,{w:"$full",spacing:"$2",get children(){return d(A,{each:["undone","done"],children:function(e){return d(rt,{get type(){return t.type},done:e,get canRetry(){return t.canRetry},get nameAnalyzer(){return t.nameAnalyzer}})}})}})]}})})),q("<p></p>")),ot=q('<a target="_blank"></a>'),ct=t("b",(function(t,r){var n,o,c=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=("/"===t?"":t)+r,u="/"===e().base_path?"":e().base_path,l=a.startsWith(u),s=f(!1),d=i(s,2),h=d[0],p=d[1],g=B(),v=g.to;return l&&c?((o=nt.cloneNode(!0)).$$mouseout=function(){return p(!1)},o.$$mouseover=function(){return p(!0)},o.addEventListener("click",(function(t){v(D(a.slice(u.length)))})),W(o,a),M((function(t){return U(o,h()?"text-decoration: underline":"",t)})),o):(n=nt.cloneNode(!0),W(n,a),n)}));t("g",(function(){var t,e=c(),r=i(f(!1),2),n=r[0],o=r[1];return{regex:/^download (.+) to \((.+)\)$/,title:function(t){return t[1]},attrs:(t={},s(t,e("tasks.attr.offline_download.url"),(function(t){return(e=ot.cloneNode(!0)).$$mouseout=function(){return o(!1)},e.$$mouseover=function(){return o(!0)},W(e,(function(){return t[1]})),M((function(r){var o=n()?"text-decoration: underline":"",c=t[1];return r._v$=U(e,o,r._v$),c!==r._v$2&&Y(e,"href",r._v$2=c),r}),{_v$:void 0,_v$2:void 0}),e;var e})),s(t,e("tasks.attr.offline_download.path"),(function(t){return ct("",t[2])})),t)}})),t("a",(function(){var t,e=c();return{regex:/^transfer \[(.*)]\((.*\/([^\/]+))\) to \[(.+)]\((.+)\)$/,title:function(t){return t[3]},attrs:(t={},s(t,e("tasks.attr.offline_download.transfer_src"),(function(t){return""===t[1]?void 0:ct(t[1],t[2])})),s(t,e("tasks.attr.offline_download.transfer_src_local"),(function(t){return""===t[1]?t[2]:void 0})),s(t,e("tasks.attr.offline_download.transfer_dst"),(function(t){return ct(t[4],t[5])})),t)}})),t("c",(function(){var t,e=c();return{regex:/^decompress \[(.+)]\((.*\/([^\/]+))\)\[(.+)] to \[(.+)]\((.+)\) with password <(.*)>$/,title:function(t){return t[3]},attrs:(t={},s(t,e("tasks.attr.decompress.src"),(function(t){return ct(t[1],t[2])})),s(t,e("tasks.attr.decompress.dst"),(function(t){return ct(t[5],t[6])})),s(t,e("tasks.attr.decompress.inner"),(function(t){return e=nt.cloneNode(!0),W(e,(function(){return t[4]})),e;var e})),s(t,e("tasks.attr.decompress.password"),(function(t){return e=nt.cloneNode(!0),W(e,(function(){return t[7]})),e;var e})),t)}})),t("d",(function(){return{regex:/^upload (.+) to \[(.+)]\((.+)\)$/,title:function(t){return t[1]},attrs:s({},c()("tasks.attr.decompress.dst"),(function(t){return ct(t[2],t[3])}))}}));G(["mouseover","mouseout"])}}}))}();
