import{d as c,e as r,f as e,a2 as p,B as n,ba as u,cx as g,o as a,cw as f}from"./index.8bc00b61.js";import{a as d}from"./useUtil.40d80b61.js";import{F as h}from"./File.ea561a57.js";import"./api.29ecced1.js";import"./icon.6713c19f.js";import"./index.d9a1a3ad.js";import"./index.c0406227.js";import"./Layout.8dcaea2c.js";import"./Markdown.d43c3108.js";import"./index.36258acc.js";import"./FolderTree.01224a89.js";const U=()=>{const t=c(),[o,i]=r(!1),[s,l]=r(!1),{currentObjLink:m}=d();return e(h,{get children(){return e(p,{spacing:"$2",get children(){return[e(n,{as:"a",get href(){return`itms-services://?action=download-manifest&url=${u}/i/${g(encodeURIComponent(a.raw_url)+"/"+f(encodeURIComponent(a.obj.name)))}.plist`},onClick:()=>{i(!0)},get children(){return t(`home.preview.${o()?"installing":"install"}`)}}),e(n,{as:"a",colorScheme:"primary",get href(){return"apple-magnifier://install?url="+encodeURIComponent(m(!0))},onClick:()=>{l(!0)},get children(){return t(`home.preview.${s()?"tr-installing":"tr-install"}`)}})]}})}})};export{U as default};