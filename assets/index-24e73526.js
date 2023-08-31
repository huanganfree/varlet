import{S as m}from"./index-dc70fcb5.js";import{B as r}from"./index-220522c5.js";import{S as U}from"./index-591c9b05.js";import{I as h}from"./index-6ea553c6.js";import{d as I}from"./index-ea9abee8.js";import{r as L,aP as N,e as M,aa as V,aC as F,f as R,h as A,q as l,S as n,an as o,M as E,ar as f,F as H,P as i,Q as s,aw as z}from"./vue-router-547718df.js";import{u as P,b as D,_ as q,c as Q,a as W}from"./index-d39e90ed.js";import{A as C}from"./appType-610d2e23.js";import"./index-f194146b.js";import"./logger-9a144f5d.js";import"./elements-1fb47fa1.js";import"./zIndex-d095b494.js";import"./index-89a3ce91.js";import"./lock-783c0ea8.js";import"./index-fde800b6.js";/* empty css               */import"./index-d113846f.js";import"./index-ef9afa54.js";import"./useChildren-05343878.js";const j={functionCall:"函数调用",componentCall:"组件调用",type:"Snackbar 类型",success:"成功",info:"消息",warning:"警告",error:"错误",loading:"加载",text:"这是一个消息条！！",loaded:"加载成功！！",wait:"等待中...",close:"关闭",basicUsage:"基本使用",multiLine:"垂直排列",bottomDisplay:"底部显示",hiddenTime:"显示时长",customIcon:"自定义图标",forbidClick:"禁止穿透点击",multiple:"多例模式",custom:"自定义"},G={functionCall:"Function Call",componentCall:"Component Call",type:"Snackbar Type",success:"Success",warning:"Warning",info:"Info",error:"Error",loading:"Loading",text:"Hello, I'm a snackbar",loaded:"Loaded",wait:"waiting...",close:"Close",basicUsage:"Basic Usage",multiLine:"Multi-Line",bottomDisplay:"Bottom Display",hiddenTime:"Display Duration",customIcon:"Custom Icon",forbidClick:"Forbid Click",multiple:"Multiple",custom:"Custom"},{add:T,use:J,pack:e,packs:wo,merge:bo}=P(),K=v=>{W(v),J(v)};D("zh-CN",q);D("en-US",Q);T("zh-CN",j);T("en-US",G);const O={class:"snackbar-demo"},Co={__name:"index",setup(v){const y=L({show1:!1,show2:!1,show3:!1,show4:!1,show5:!1,show9:!1}),p=m.Component,{show1:g,show2:k,show3:w,show4:x,show5:$,show9:S}=N(y);function d(u){y[u]=!y[u]}function c(u){const t=u==="loading"?e.value.wait:e.value.text,a=m[u](t);u==="loading"&&setTimeout(()=>{a.clear(),m.success(e.value.loaded)},2e3)}function b(u){if(u==="time"&&m({content:e.value.text,duration:1e3}),u==="position"&&m({content:e.value.text,position:"bottom"}),u==="custom"){const t=m({content:"Hello, Varlet",icon:()=>z(h,{name:"heart",style:{paddingRight:"12px"}}),action:()=>z(r,{size:"small",type:"primary",onClick:()=>t.clear()},{default:()=>e.value.close})})}u||m(e.value.text)}function B(){m.allowMultiple(!0);const u=m("Snackbar 1");m.success("Snackbar 2"),setTimeout(()=>{u.clear()},1e3)}return M(()=>{m.allowMultiple(!1)}),V(K),F(I),(u,t)=>(R(),A(H,null,[l(o(C),null,{default:n(()=>[i(s(o(e).componentCall),1)]),_:1}),l(o(U),{direction:"column",size:["3vmin","4vmin"]},{default:n(()=>[l(o(r),{type:"primary",block:"",onClick:t[0]||(t[0]=a=>d("show1"))},{default:n(()=>[i(s(o(e).basicUsage),1)]),_:1}),l(o(r),{type:"primary",block:"",onClick:t[1]||(t[1]=a=>d("show3"))},{default:n(()=>[i(s(o(e).multiLine),1)]),_:1}),l(o(r),{type:"primary",block:"",onClick:t[2]||(t[2]=a=>d("show2"))},{default:n(()=>[i(s(o(e).bottomDisplay),1)]),_:1}),l(o(r),{type:"primary",block:"",onClick:t[3]||(t[3]=a=>d("show4"))},{default:n(()=>[i(s(o(e).hiddenTime),1)]),_:1}),l(o(r),{type:"primary",block:"",onClick:t[4]||(t[4]=a=>d("show5"))},{default:n(()=>[i(s(o(e).customIcon),1)]),_:1}),l(o(r),{type:"primary",block:"",onClick:t[5]||(t[5]=a=>d("show9"))},{default:n(()=>[i(s(o(e).forbidClick),1)]),_:1})]),_:1}),l(o(C),null,{default:n(()=>[i(s(o(e).functionCall),1)]),_:1}),l(o(U),{direction:"column",size:["3vmin","4vmin"]},{default:n(()=>[l(o(r),{type:"warning",block:"",onClick:t[6]||(t[6]=a=>b())},{default:n(()=>[i(s(o(e).basicUsage),1)]),_:1}),l(o(r),{type:"warning",block:"",onClick:t[7]||(t[7]=a=>b("time"))},{default:n(()=>[i(s(o(e).hiddenTime),1)]),_:1}),l(o(r),{type:"warning",block:"",onClick:t[8]||(t[8]=a=>b("position"))},{default:n(()=>[i(s(o(e).bottomDisplay),1)]),_:1}),l(o(r),{type:"warning",block:"",onClick:t[9]||(t[9]=a=>b("custom"))},{default:n(()=>[i(s(o(e).custom),1)]),_:1})]),_:1}),l(o(C),null,{default:n(()=>[i(s(o(e).type),1)]),_:1}),l(o(U),{direction:"column",size:["3vmin","4vmin"]},{default:n(()=>[l(o(r),{type:"success",block:"",onClick:t[10]||(t[10]=a=>c("success"))},{default:n(()=>[i(s(o(e).success),1)]),_:1}),l(o(r),{type:"warning",block:"",onClick:t[11]||(t[11]=a=>c("warning"))},{default:n(()=>[i(s(o(e).warning),1)]),_:1}),l(o(r),{type:"info",block:"",onClick:t[12]||(t[12]=a=>c("info"))},{default:n(()=>[i(s(o(e).info),1)]),_:1}),l(o(r),{type:"danger",block:"",onClick:t[13]||(t[13]=a=>c("error"))},{default:n(()=>[i(s(o(e).error),1)]),_:1}),l(o(r),{type:"primary",block:"",onClick:t[14]||(t[14]=a=>c("loading"))},{default:n(()=>[i(s(o(e).loading),1)]),_:1})]),_:1}),l(o(C),null,{default:n(()=>[i(s(o(e).multiple),1)]),_:1}),l(o(r),{type:"primary",block:"",onClick:B},{default:n(()=>[i(s(o(e).multiple),1)]),_:1}),E("div",O,[l(o(p),{show:o(g),"onUpdate:show":t[15]||(t[15]=a=>f(g)?g.value=a:null)},{default:n(()=>[i(s(o(e).text),1)]),_:1},8,["show"]),l(o(p),{show:o(k),"onUpdate:show":t[17]||(t[17]=a=>f(k)?k.value=a:null),position:"bottom"},{action:n(()=>[l(o(r),{type:"primary",size:"small",onClick:t[16]||(t[16]=a=>k.value=!1)},{default:n(()=>[i(s(o(e).close),1)]),_:1})]),default:n(()=>[i(s(o(e).text)+" ",1)]),_:1},8,["show"]),l(o(p),{show:o(w),"onUpdate:show":t[19]||(t[19]=a=>f(w)?w.value=a:null),vertical:!0},{action:n(()=>[l(o(r),{type:"primary",size:"small",onClick:t[18]||(t[18]=a=>w.value=!1)},{default:n(()=>[i(s(o(e).close),1)]),_:1})]),default:n(()=>[i(s(o(e).text)+" ",1)]),_:1},8,["show"]),l(o(p),{show:o(x),"onUpdate:show":t[20]||(t[20]=a=>f(x)?x.value=a:null),duration:1e3},{default:n(()=>[i(s(o(e).text),1)]),_:1},8,["show"]),l(o(p),{show:o($),"onUpdate:show":t[21]||(t[21]=a=>f($)?$.value=a:null),duration:1e3},{icon:n(()=>[l(o(h),{name:"heart-outline"})]),default:n(()=>[i(s(o(e).text)+" ",1)]),_:1},8,["show"]),l(o(p),{show:o(S),"onUpdate:show":t[22]||(t[22]=a=>f(S)?S.value=a:null),"forbid-click":!0},{default:n(()=>[i(s(o(e).text),1)]),_:1},8,["show"])])],64))}};export{Co as default};
