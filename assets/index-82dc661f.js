import{B}from"./index-b6014f56.js";import{I as T}from"./index-d9f34410.js";import{d as w,c as L,a as $,w as z}from"./components-b4bea23d.js";import{d as E,r as u,o as A,a8 as I,aJ as V,aT as M,aj as P,ai as O,_ as j,b as f,e as d,f as D,p as k,v as F,q as o,w as p,as as H,M as q,au as J,F as Q,al as R,m as v,U as i,N as b,O as G,Q as g,R as h}from"./index-ba2bae36.js";import{e as K}from"./shared-104f51c5.js";import{c as W,g as X,a as Y,s as Z,t as x}from"./elements-75b8c791.js";import{C as ee}from"./index-f2c276e1.js";import{d as te}from"./index-d8fbf18c.js";import{u as ae,b as S,_ as oe,c as se,a as re}from"./index-bcc640ab.js";import{A as ne}from"./appType-18c8b942.js";import"./index-85ab28c6.js";import"./index-bc58714c.js";/* empty css               */import"./index-de3cc273.js";import"./index-8c8e5e90.js";import"./index-2a9d0a0e.js";import"./logger-525ef361.js";const ie={visibilityHeight:{type:[Number,String],default:200},duration:{type:Number,default:300},right:[Number,String],elevation:{type:[Boolean,Number,String],default:!0},bottom:[Number,String],target:[String,Object],onClick:w()},{name:le,n:ce,classes:me}=L("back-top"),ue=E({name:le,components:{VarButton:B,VarIcon:T},inheritAttrs:!1,props:ie,setup(e){const a=u(!1),s=u(null),r=u(!0);let t;const l=M(()=>{a.value=O(t)>=x(e.visibilityHeight)},200);A(()=>{m(),n(),r.value=!1}),I(n),V(y);function c(N){$(e.onClick,N);const U=P(t);Z(t,{left:U,duration:e.duration,animation:K})}function m(){t=e.target?W(e.target,"BackTop"):X(s.value)}function n(){t.addEventListener("scroll",l)}function y(){t.removeEventListener("scroll",l)}return{disabled:r,show:a,backTopEl:s,toSizeUnit:Y,n:ce,classes:me,handleClick:c}}});function de(e,a,s,r,t,l){const c=f("var-icon"),m=f("var-button");return d(),D(J,{to:"body",disabled:e.disabled},[k("div",H({class:e.classes(e.n(),[e.show,e.n("--active")]),ref:"backTopEl",style:{right:e.toSizeUnit(e.right),bottom:e.toSizeUnit(e.bottom)}},e.$attrs,{onClick:a[0]||(a[0]=q((...n)=>e.handleClick&&e.handleClick(...n),["stop"]))}),[F(e.$slots,"default",{},()=>[o(m,{elevation:e.elevation,type:"primary",round:"","var-back-top-cover":""},{default:p(()=>[o(c,{name:"chevron-up"})]),_:1},8,["elevation"])])],16)],8,["disabled"])}const _=j(ue,[["render",de]]);z(_);const pe={basicUsage:"基本使用"},fe={basicUsage:"Basic Usage"},{add:C,use:ve,pack:be,packs:Ve,merge:Me}=ae(),ge=e=>{re(e),ve(e)};S("zh-CN",oe);S("en-US",se);C("zh-CN",pe);C("en-US",fe);const Pe={__name:"index",setup(e){const a=[...Array(100).keys()];return Q(ge),R(te),(s,r)=>(d(),v(b,null,[o(i(ne),null,{default:p(()=>[g(h(i(be).basicUsage),1)]),_:1}),k("div",null,[(d(),v(b,null,G(a,t=>o(i(ee),{key:t},{default:p(()=>[g("Scroll to bottom "+h(t),1)]),_:2},1024)),64)),o(i(_),{duration:300})])],64))}};export{Pe as default};
