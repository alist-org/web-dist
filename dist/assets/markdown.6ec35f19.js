import{j as n,$ as d,o,bY as i}from"./index.b4298eea.js";import{d as s}from"./useUtil.7ca0bda2.js";import{M as m}from"./Markdown.944cde28.js";import"./api.5a741649.js";const b=()=>{const[t]=s(),a=e=>o.obj.name.endsWith(".md")?e:"```"+i(o.obj.name)+`
`+e+"\n```";return n(d,{get loading(){return t.loading},get children(){return n(m,{get children(){var e,r;return a((r=(e=t())==null?void 0:e.content)!=null?r:"")}})}})};export{b as default};