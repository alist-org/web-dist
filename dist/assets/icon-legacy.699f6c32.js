!function(){function t(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var n,u,a=[],i=!0,o=!1;try{for(e=e.call(t);!(i=(n=e.next()).done)&&(a.push(n.value),!r||a.length!==r);i=!0);}catch(c){o=!0,u=c}finally{try{i||null==e.return||e.return()}finally{if(o)throw u}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}System.register(["./index-legacy.4e9aef54.js","./index-legacy.f09fbac3.js","./index-legacy.17759f18.js","./Layout-legacy.75fb03a8.js"],(function(r){"use strict";var e,n,u,a,i,o,c,f,l,s,y,p,d,b,g,m,O,E,I;return{setters:[function(t){e=t.q,n=t.r,u=t.s,a=t.t,i=t.v,o=t.w,c=t.x,f=t.y,l=t.z,s=t.A,y=t.C,p=t.D,d=t.E},function(t){b=t.g,g=t.h,m=t.j},function(t){O=t.bI,E=t.bJ},function(t){I=t.I}],execute:function(){var x=r("O",function(t){return t[t.UNKNOWN=0]="UNKNOWN",t[t.FOLDER=1]="FOLDER",t[t.VIDEO=2]="VIDEO",t[t.AUDIO=3]="AUDIO",t[t.TEXT=4]="TEXT",t[t.IMAGE=5]="IMAGE",t}(x||{})),A={"dmg,ipa,plist,tipa":o,"exe,msi":c,"zip,gz,rar,7z,tar,jar,xz":f,apk:I,db:b,md:l,epub:g,iso:m,m3u8:i,"doc,docx":s,"xls,xlsx":y,"ppt,pptx":p,pdf:d};r("g",(function(r){return function(r,o){if(r!==x.FOLDER)for(var c=0,f=Object.entries(A);c<f.length;c++){var l=t(f[c],2),s=l[0],y=l[1];if(s.split(",").includes(o.toLowerCase()))return y}switch(r){case x.FOLDER:return E;case x.VIDEO:return i;case x.AUDIO:return a;case x.TEXT:return u;case x.IMAGE:return n;default:return e}}(r.type,O(r.name))}))}}}))}();