import{a as t,ab as n,h as e,ag as r,af as s}from"./index.c639c009.js";import{b as o}from"./useTitle.a537262f.js";const i=async()=>await(await fetch("https://jsd.nn.ci/gh/alist-org/alist@main/README.md")).text(),g=()=>{t(),o("manage.sidemenu.about");const[a]=n(i);return e(s,{get loading(){return a.loading},get children(){return e(r,{get children(){return a()}})}})};export{g as default};
