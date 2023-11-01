import{d as F,g as te,u as oe,f as ne,c as re,a as le,w as se}from"./components-b4bea23d.js";import{u as ue}from"./lock-f26c8833.js";import{a as ie}from"./elements-75b8c791.js";import{d as ce,r as h,b7 as de,D as C,aN as fe,b5 as me,G as L,a4 as he,aO as _,_ as pe,e as m,f as w,p as v,x as N,v as ve,y as ge,au as Te,F as be,al as ye,b as Ae,m as D,q as c,w as i,U as o,N as R,Q as H,R as b,O as M,t as O}from"./index-ba2bae36.js";import{T as Ce,a as $}from"./index-c37568d0.js";import{T as Ne}from"./index-7c167b20.js";import{T as B}from"./index-c5f18854.js";import{C as I}from"./index-f2c276e1.js";import{u as Ue,b as W,_ as we,c as Se,a as ke}from"./index-bcc640ab.js";import{d as ze}from"./index-d8fbf18c.js";import"./index-bc58714c.js";import"./logger-525ef361.js";import"./index-7f2a37b7.js";import"./shared-104f51c5.js";import"./index-85ab28c6.js";/* empty css               */import"./index-48bd5f24.js";import"./index-b6014f56.js";import"./index-de3cc273.js";import"./index-8c8e5e90.js";import"./index-2a9d0a0e.js";import"./index-d9f34410.js";import"./provide-b7386d59.js";import"./provide-aabba7a2.js";import"./provide-3e260ffa.js";import"./index-5d1f4666.js";const De={anchor:Number,anchors:Array,contentDraggable:{type:Boolean,default:!0},duration:{type:[Number,String],default:300},elevation:{type:[Boolean,Number,String],default:!0},teleport:{type:[String,Object,Boolean],default:"body"},safeArea:Boolean,"onUpdate:anchor":F(),onAnchorChange:F()},{name:Re,n:He,classes:Oe}=re("floating-panel"),$e=100,P=.2,Be=ce({name:Re,props:De,setup(e){const t=h(0),r=h(null),{height:y}=de(),p=C(()=>y.value*.6),d=te(e,"anchor"),n=C(()=>{const a=[$e,p.value],{anchors:u}=e;return fe(u)?a:u}),s=C(()=>Math.min(...n.value)),f=C(()=>Math.max(...n.value)),{disabled:l}=oe(),{deltaY:j,touching:k,startTouch:q,moveTouch:G,endTouch:Q,isReachTop:J,isReachBottom:K}=me();let E;ue(()=>k.value),L(()=>d.value,V,{immediate:!0}),L(()=>n.value,()=>{V(d.value)},{immediate:!0});function V(a){z(a??s.value)}function X(a){q(a),E=t.value}function Z(a){var T;G(a);const u=a.target,g=r.value===u||((T=r.value)==null?void 0:T.contains(u));if(g&&!e.contentDraggable)return;if(g&&e.contentDraggable&&t.value>=f.value&&!J(r.value)){K(r.value)&&_(a);return}const A=E-j.value;z(ee(A)),_(a)}function x(){Q();const a=d.value;z(t.value),d.value=t.value,d.value!==a&&le(e.onAnchorChange,t.value)}function z(a){t.value=k.value?a:ae(a)}function ee(a){if(a>f.value){const u=a-f.value;return f.value+u*P}if(a<s.value){const u=s.value-a;return s.value-u*P}return a}function ae(a){if(n.value.includes(a))return a;let u=1/0,g=0;return n.value.forEach(A=>{const T=Math.abs(A-a);T<u&&(u=T,g=A)}),g}return{contentRef:r,teleportDisabled:l,touching:k,minAnchor:s,maxAnchor:f,visibleHeight:t,n:He,classes:Oe,toSizeUnit:ie,toNumber:he,formatElevation:ne,handleTouchstart:X,handleTouchmove:Z,handleTouchend:x}}});function Ee(e,t,r,y,p,d){return m(),w(Te,{to:e.teleport===!1?void 0:e.teleport,disabled:e.teleportDisabled||e.teleport===!1},[v("div",{class:N(e.classes(e.n(),[e.safeArea,e.n("--safe-area")],e.formatElevation(e.elevation,3))),style:ge({height:`${e.toSizeUnit(e.maxAnchor)}`,transform:`translateY(calc(100% - ${e.toSizeUnit(e.visibleHeight)}))`,transition:e.touching?"none":`transform ${e.toNumber(e.duration)}ms var(--floating-panel-transition-timing-function), background-color 0.25s`}),onTouchstart:t[0]||(t[0]=(...n)=>e.handleTouchstart&&e.handleTouchstart(...n)),onTouchmove:t[1]||(t[1]=(...n)=>e.handleTouchmove&&e.handleTouchmove(...n)),onTouchend:t[2]||(t[2]=(...n)=>e.handleTouchend&&e.handleTouchend(...n)),onTouchcancel:t[3]||(t[3]=(...n)=>e.handleTouchend&&e.handleTouchend(...n))},[v("div",{class:N(e.n("header"))},[v("div",{class:N(e.n("header-toolbar"))},null,2)],2),v("div",{class:N(e.n("content")),ref:"contentRef"},[ve(e.$slots,"default")],2)],38)],8,["to","disabled"])}const S=pe(Be,[["render",Ee]]);se(S);const Ve={basicUsage:"基本使用",dragText:"拖拽面板",customAnchors:"自定义锚点",currentAnchorText:"面板锚点高度为",dragHeadOnly:"仅头部拖拽"},Fe={basicUsage:"Basic Usage",dragText:"Drag panel",customAnchors:"Custom Anchors",currentAnchorText:"The panel anchor height is",dragHeadOnly:"Drag Head Only"},{add:Y,use:Le,pack:U,packs:ma,merge:ha}=Ue(),_e=e=>{ke(e),Le(e)};W("zh-CN",we);W("en-US",Se);Y("zh-CN",Ve);Y("en-US",Fe);const Me={style:{"text-align":"center",padding:"5px 15px"}},pa={__name:"index",setup(e){const t=h(null),r=h(0),y=h([100,window.innerHeight*.4,window.innerHeight*.8]),p=h(100),d=h({"--tab-padding":"2px"});return be(n=>{_e(n),t.value&&t.value.resize()}),ye(ze),(n,s)=>{const f=Ae("var-style-provider");return m(),D(R,null,[c(f,{"style-vars":d.value},{default:i(()=>[c(o(Ce),{ref_key:"tabsRef",ref:t,elevation:"",color:"var(--color-primary)","active-color":"#fff","inactive-color":"hsla(0, 0%, 100%, .6)",active:r.value,"onUpdate:active":s[0]||(s[0]=l=>r.value=l),style:{"margin-top":"14px"}},{default:i(()=>[c(o($),{style:{"font-size":"13px"}},{default:i(()=>[H(b(o(U).basicUsage),1)]),_:1}),c(o($),{style:{"font-size":"13px"}},{default:i(()=>[H(b(o(U).customAnchors),1)]),_:1}),c(o($),{style:{"font-size":"13px"}},{default:i(()=>[H(b(o(U).dragHeadOnly),1)]),_:1})]),_:1},8,["active"])]),_:1},8,["style-vars"]),c(o(Ne),{active:r.value,"onUpdate:active":s[2]||(s[2]=l=>r.value=l)},{default:i(()=>[c(o(B),null,{default:i(()=>[r.value===0?(m(),w(o(S),{key:0,teleport:"body"},{default:i(()=>[(m(),D(R,null,M(26,l=>c(o(I),{key:l,title:String.fromCharCode(l+64),border:""},null,8,["title"])),64))]),_:1})):O("",!0)]),_:1}),c(o(B),null,{default:i(()=>[r.value===1?(m(),w(o(S),{key:0,anchor:p.value,"onUpdate:anchor":s[1]||(s[1]=l=>p.value=l),anchors:y.value,teleport:"body"},{default:i(()=>[v("div",Me,[v("p",null,b(o(U).currentAnchorText)+" "+b(Math.floor(p.value))+" px",1)])]),_:1},8,["anchor","anchors"])):O("",!0)]),_:1}),c(o(B),null,{default:i(()=>[r.value===2?(m(),w(o(S),{key:0,"content-draggable":!1,teleport:"body"},{default:i(()=>[(m(),D(R,null,M(26,l=>c(o(I),{key:l,title:String.fromCharCode(l+64),border:""},null,8,["title"])),64))]),_:1})):O("",!0)]),_:1})]),_:1},8,["active"])],64)}}};export{pa as default};
