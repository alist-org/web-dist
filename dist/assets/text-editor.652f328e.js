import{dR as X,m as y,h as f,af as z,o as Z,x as T,e as A,ae as _,dS as k,dT as ee,r as N,k as W,dL as te,cE as ne,b as re,dM as oe,a as ae,a$ as ie,bg as ce,S as $,dN as ue,a3 as R,aU as se,C as le,a8 as fe,bh as de,n as ge}from"./index.c639c009.js";function he(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?L(Object(n),!0).forEach(function(r){he(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ve(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function pe(e,t){if(e==null)return{};var n=ve(e,t),r,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function me(e,t){return ye(e)||be(e,t)||we(e,t)||Oe()}function ye(e){if(Array.isArray(e))return e}function be(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var n=[],r=!0,o=!1,a=void 0;try{for(var i=e[Symbol.iterator](),c;!(r=(c=i.next()).done)&&(n.push(c.value),!(t&&n.length===t));r=!0);}catch(s){o=!0,a=s}finally{try{!r&&i.return!=null&&i.return()}finally{if(o)throw a}}return n}}function we(e,t){if(!!e){if(typeof e=="string")return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(e,t)}}function x(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Oe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function je(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?q(Object(n),!0).forEach(function(r){je(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Se(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(o,a){return a(o)},r)}}function v(e){return function t(){for(var n=this,r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return o.length>=e.length?e.apply(this,o):function(){for(var i=arguments.length,c=new Array(i),s=0;s<i;s++)c[s]=arguments[s];return t.apply(n,[].concat(o,c))}}}function E(e){return{}.toString.call(e).includes("Object")}function Te(e){return!Object.keys(e).length}function b(e){return typeof e=="function"}function Ee(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Pe(e,t){return E(t)||d("changeType"),Object.keys(t).some(function(n){return!Ee(e,n)})&&d("changeField"),t}function Ce(e){b(e)||d("selectorType")}function Ie(e){b(e)||E(e)||d("handlerType"),E(e)&&Object.values(e).some(function(t){return!b(t)})&&d("handlersType")}function Ae(e){e||d("initialIsRequired"),E(e)||d("initialType"),Te(e)&&d("initialContent")}function De(e,t){throw new Error(e[t]||e.default)}var Me={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},d=v(De)(Me),j={changes:Pe,selector:Ce,handler:Ie,initial:Ae};function $e(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};j.initial(e),j.handler(t);var n={current:e},r=v(Ke)(n,t),o=v(Le)(n),a=v(j.changes)(e),i=v(Re)(n);function c(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(l){return l};return j.selector(u),u(n.current)}function s(u){Se(r,o,a,i)(u)}return[c,s]}function Re(e,t){return b(t)?t(e.current):t}function Le(e,t){return e.current=F(F({},e.current),t),t}function Ke(e,t,n){return b(t)?t(e.current):Object.keys(n).forEach(function(r){var o;return(o=t[r])===null||o===void 0?void 0:o.call(t,e.current[r])}),n}var xe={create:$e},qe={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs"}};function Fe(e){return function t(){for(var n=this,r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return o.length>=e.length?e.apply(this,o):function(){for(var i=arguments.length,c=new Array(i),s=0;s<i;s++)c[s]=arguments[s];return t.apply(n,[].concat(o,c))}}}function Ue(e){return{}.toString.call(e).includes("Object")}function He(e){return e||U("configIsRequired"),Ue(e)||U("configType"),e.urls?(ze(),{paths:{vs:e.urls.monacoBase}}):e}function ze(){console.warn(B.deprecation)}function Ne(e,t){throw new Error(e[t]||e.default)}var B={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},U=Fe(Ne)(B),We={config:He},Be=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(o){return n.reduceRight(function(a,i){return i(a)},o)}};function V(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],V(e[n],t[n]))}),K(K({},e),t)}var Ve={type:"cancelation",msg:"operation is manually canceled"};function C(e){var t=!1,n=new Promise(function(r,o){e.then(function(a){return t?o(Ve):r(a)}),e.catch(o)});return n.cancel=function(){return t=!0},n}var Ge=xe.create({config:qe,isInitialized:!1,resolve:null,reject:null,monaco:null}),G=me(Ge,2),w=G[0],P=G[1];function Ye(e){var t=We.config(e),n=t.monaco,r=pe(t,["monaco"]);P(function(o){return{config:V(o.config,r),monaco:n}})}function Je(){var e=w(function(t){var n=t.monaco,r=t.isInitialized,o=t.resolve;return{monaco:n,isInitialized:r,resolve:o}});if(!e.isInitialized){if(P({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),C(I);if(window.monaco&&window.monaco.editor)return Y(window.monaco),e.resolve(window.monaco),C(I);Be(Qe,Ze)(_e)}return C(I)}function Qe(e){return document.body.appendChild(e)}function Xe(e){var t=document.createElement("script");return e&&(t.src=e),t}function Ze(e){var t=w(function(r){var o=r.config,a=r.reject;return{config:o,reject:a}}),n=Xe("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function _e(){var e=w(function(n){var r=n.config,o=n.resolve,a=n.reject;return{config:r,resolve:o,reject:a}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){Y(n),e.resolve(n)},function(n){e.reject(n)})}function Y(e){w().monaco||P({monaco:e})}function ke(){return w(function(e){var t=e.monaco;return t})}var I=new Promise(function(e,t){return P({resolve:e,reject:t})}),J={config:Ye,init:Je,__getMonacoInstance:ke};J.config({paths:{vs:X}});let p;const et=e=>{const[t,n]=y(!0);return J.init().then(r=>{p=r,n(!1)}),f(z,{get loading(){return t()},get children(){return f(tt,e)}})},tt=e=>{let t,n,r;return Z(()=>{n=p.editor.create(t,{value:e.value,theme:e.theme}),r=p.editor.createModel(e.value,e.language,e.path?p.Uri.parse(e.path):void 0),n.setModel(r),n.onDidChangeModelContent(()=>{var o;(o=e.onChange)==null||o.call(e,n.getValue())})}),T(()=>{n.setValue(e.value)}),T(()=>{p.editor.setTheme(e.theme)}),A(()=>{r&&r.dispose(),n&&n.dispose()}),f(_,{w:"$full",h:"70vh",ref(o){const a=t;typeof a=="function"?a(o):t=o}})};var S=(e,t)=>e===t||e.length===t.length&&e.every((n,r)=>n===t[r]),nt=A;function m(e,t,n,r){return e.addEventListener(t,n,r),nt(e.removeEventListener.bind(e,t,n,r))}function D(e,t=ee()){let n=0,r,o;return()=>(n++,A(()=>{n--,queueMicrotask(()=>{!n&&o&&(o(),o=r=void 0)})}),o||k(a=>r=e(o=a),t),r)}function H(e,t){for(let n=e.length-1;n>=0;n--){const r=t.slice(0,n+1);if(!S(e[n],r))return!1}return!0}var Q=D(()=>{const[e,t]=y(null);return m(window,"keydown",n=>{t(n),setTimeout(()=>t(null))}),e}),rt=D(()=>{const[e,t]=y([]),n=()=>t([]),r=Q();return m(window,"keydown",o=>{if(o.repeat||typeof o.key!="string")return;const a=o.key.toUpperCase(),i=e();if(i.includes(a))return;const c=[...i,a];i.length===0&&a!=="ALT"&&a!=="CONTROL"&&a!=="META"&&a!=="SHIFT"&&(o.shiftKey&&c.unshift("SHIFT"),o.altKey&&c.unshift("ALT"),o.ctrlKey&&c.unshift("CONTROL"),o.metaKey&&c.unshift("META")),t(c)}),m(window,"keyup",o=>{if(typeof o.key!="string")return;const a=o.key.toUpperCase();t(i=>i.filter(c=>c!==a))}),m(window,"blur",n),m(window,"contextmenu",o=>{o.defaultPrevented||n()}),e[0]=e,e[1]={event:r},e[Symbol.iterator]=function*(){yield e[0],yield e[1]},e}),ot=D(()=>{const e=rt();return W(t=>e().length===0?[]:[...t,e()],[])});function at(e,t,n={}){if(!e.length)return;e=e.map(u=>u.toUpperCase());const{preventDefault:r=!0}=n,o=Q(),a=ot();let i=!1;const c=u=>{if(!u.length)return i=!1;if(i)return;const l=o();u.length<e.length?H(u,e.slice(0,u.length))?r&&l&&l.preventDefault():i=!0:(i=!0,H(u,e)&&(r&&l&&l.preventDefault(),t(l)))},s=u=>{const l=u.at(-1);if(!l)return;const g=o();if(r&&l.length<e.length){S(l,e.slice(0,e.length-1))&&g&&g.preventDefault();return}if(S(l,e)){const O=u.at(-2);(!O||S(O,e.slice(0,e.length-1)))&&(r&&g&&g.preventDefault(),t(g))}};T(N(a,n.requireReset?c:s))}function it(e){const{colorMode:t}=ne(),n=W(()=>t()==="light"?"vs":"vs-dark"),{pathname:r}=re(),{isString:o,text:a}=oe(e.data),[i,c]=y("utf-8"),[s,u]=y(a(i())),l=ae(),[g,O]=ie(()=>ce.put("/fs/put",s(),{headers:{"File-Path":encodeURIComponent(r()),"Content-Type":e.contentType||"text/plain"}}));T(N(i,h=>{u(a(h))}));async function M(){const h=await O();de(h,()=>{ge.success(l("global.save_success"))})}return at(["Control","S"],M),f(fe,{w:"$full",alignItems:"start",spacing:"$2",pos:"relative",get children(){return[f($,{when:!o,get children(){return f(ue,{get encoding(){return i()},setEncoding:c,get referenceText(){return e.data}})}}),f(et,{get value(){return a(i())},get theme(){return n()},get path(){return R.obj.name},onChange:h=>{u(h)}}),f($,{get when(){return se("write")||R.write},get children(){return f(le,{get loading(){return g()},onClick:M,get children(){return l("global.save")}})}})]}})}const ut=()=>{const[e]=te();return f(z,{get loading(){return e.loading},get children(){return f(it,{get data(){var t;return(t=e())==null?void 0:t.content},get contentType(){var t;return(t=e())==null?void 0:t.contentType}})}})};export{ut as default};
