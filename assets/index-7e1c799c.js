import{d as R}from"./index-ea9abee8.js";import{o as P,f as w,c as M,w as V}from"./logger-9a144f5d.js";import{d as I,a as $,b as E,ai as O,_ as j,f as v,h,M as b,N as i,O as p,R as y,P as n,Q as l,j as A,aa as D,aC as F,q as a,S as o,an as t,F as G}from"./vue-router-547718df.js";import{I as f}from"./index-6ea553c6.js";import{M as q}from"./index-0e7fc1fb.js";import{B as m}from"./index-220522c5.js";import{C}from"./index-932d5f4f.js";import{T as Q,a as _}from"./index-f558a91e.js";import{u as H,b as z,_ as J,c as K,a as W}from"./index-d39e90ed.js";import{A as c}from"./appType-610d2e23.js";import"./elements-1fb47fa1.js";import"./usePopover-d6a9cdbb.js";import"./zIndex-d095b494.js";import"./index-89a3ce91.js";import"./index-fde800b6.js";/* empty css               */import"./index-f194146b.js";import"./index-d113846f.js";import"./index-ef9afa54.js";import"./useChildren-05343878.js";import"./index-ccb5886c.js";import"./onSmartUnmounted-610a74e1.js";import"./onWindowResize-4d20ed42.js";const X={color:String,textColor:String,title:String,titlePosition:{type:String,default:"left"},elevation:{type:[Boolean,String,Number],default:!0},round:Boolean,image:String,imageLinearGradient:String,safeAreaTop:Boolean},{n:Y,classes:Z}=M("app-bar"),x=I({name:"VarAppBar",props:X,setup(e,{slots:d}){const S=$(),u=$(),g=()=>{S.value=d.left?0:void 0,u.value=d.right?0:void 0},k=E(()=>{const{image:B,color:L,textColor:U,imageLinearGradient:T}=e;return B!=null?{"background-image":`${T?`linear-gradient(${T}), `:""}url(${B})`,"background-position":"center center","background-size":"cover"}:{background:L,color:U}});return P(g),O(g),{n:Y,classes:Z,formatElevation:w,rootStyles:k,paddingLeft:S,paddingRight:u}}});function tt(e,d,S,u,g,k){return v(),h("div",{class:i(e.classes(e.n(),e.n("$--box"),[e.safeAreaTop,e.n("--safe-area-top")],[e.round,e.n("--round")],e.formatElevation(e.elevation,3))),style:y(e.rootStyles)},[b("div",{class:i(e.n("toolbar"))},[b("div",{class:i(e.n("left"))},[p(e.$slots,"left"),e.titlePosition==="left"?(v(),h("div",{key:0,class:i(e.n("title")),style:y({paddingLeft:e.paddingLeft})},[p(e.$slots,"default",{},()=>[n(l(e.title),1)])],6)):A("",!0)],2),e.titlePosition==="center"?(v(),h("div",{key:0,class:i(e.n("title"))},[p(e.$slots,"default",{},()=>[n(l(e.title),1)])],2)):A("",!0),b("div",{class:i(e.n("right"))},[e.titlePosition==="right"?(v(),h("div",{key:0,class:i(e.n("title")),style:y({paddingRight:e.paddingRight})},[p(e.$slots,"default",{},()=>[n(l(e.title),1)])],6)):A("",!0),p(e.$slots,"right")],2)],2),p(e.$slots,"content")],6)}const s=j(x,[["render",tt]]);V(s);const et={basicUsage:"基本使用",customStyle:"自定义背景色",addSlotsAtTitle:"添加标题处插槽",title:"标题",addLeftAndRightSlot:"添加左右插槽",option:"选项卡",search:"搜索",round:"开启圆角",custom:"扩展内容"},at={basicUsage:"Basic Usage",customStyle:"Custom Background Color",addSlotsAtTitle:"Add Slots At Title",title:"Title",addLeftAndRightSlot:"Add Left And Right Slot",option:"OPTION",search:"search",round:"Use Border Radius",custom:"Custom Content"},{add:N,use:ot,pack:r,packs:Nt,merge:Lt}=H(),rt=e=>{W(e),ot(e)};z("zh-CN",J);z("en-US",K);N("zh-CN",et);N("en-US",at);const Ut={__name:"index",setup(e){const d=$(0);return D(rt),F(R),(S,u)=>(v(),h(G,null,[a(t(c),null,{default:o(()=>[n(l(t(r).basicUsage),1)]),_:1}),a(t(s),{title:t(r).title},null,8,["title"]),a(t(c),null,{default:o(()=>[n(l(t(r).addSlotsAtTitle),1)]),_:1}),a(t(s),null,{default:o(()=>[n(l(t(r).addSlotsAtTitle),1)]),_:1}),a(t(c),null,{default:o(()=>[n(l(t(r).addLeftAndRightSlot),1)]),_:1}),a(t(s),{title:t(r).title},{left:o(()=>[a(t(m),{round:"",text:"",color:"transparent","text-color":"#ffffff"},{default:o(()=>[a(t(f),{name:"chevron-left",size:24})]),_:1})]),right:o(()=>[a(t(q),null,{menu:o(()=>[a(t(C),{ripple:""},{default:o(()=>[n(l(t(r).option),1)]),_:1}),a(t(C),{ripple:""},{default:o(()=>[n(l(t(r).option),1)]),_:1}),a(t(C),{ripple:""},{default:o(()=>[n(l(t(r).option),1)]),_:1})]),default:o(()=>[a(t(m),{round:"",text:"",color:"transparent","text-color":"#ffffff"},{default:o(()=>[a(t(f),{name:"menu",size:24})]),_:1})]),_:1})]),_:1},8,["title"]),a(t(c),null,{default:o(()=>[n(l(t(r).round),1)]),_:1}),a(t(s),{title:t(r).round,"title-position":"center",round:""},null,8,["title"]),a(t(c),null,{default:o(()=>[n(l(t(r).customStyle),1)]),_:1}),a(t(s),{title:t(r).title,"title-position":"center",color:"linear-gradient(90deg, rgba(72,176,221,1) 0%, rgba(0,208,161,1) 100%)"},null,8,["title"]),a(t(c),null,{default:o(()=>[n(l(t(r).custom),1)]),_:1}),a(t(s),{round:"",image:"https://varlet.gitee.io/varlet-ui/tree.jpeg","image-linear-gradient":"to right top, rgba(29, 68, 147, 0.5) 0%, rgba(74, 198, 170, 0.9) 100%"},{left:o(()=>[a(t(m),{round:"",text:"",color:"transparent","text-color":"#fff"},{default:o(()=>[a(t(f),{name:"menu",size:24})]),_:1})]),right:o(()=>[a(t(m),{round:"",text:"",color:"transparent","text-color":"#fff"},{default:o(()=>[a(t(f),{name:"map-marker-radius",size:24})]),_:1}),a(t(m),{round:"",text:"",color:"transparent","text-color":"#fff"},{default:o(()=>[a(t(f),{name:"star",size:24})]),_:1}),a(t(m),{round:"",text:"",color:"transparent","text-color":"#fff"},{default:o(()=>[a(t(f),{name:"heart",size:24})]),_:1})]),content:o(()=>[a(t(Q),{style:{"margin-top":"20vmin"},color:"transparent","active-color":"#fff","inactive-color":"#ddd",active:d.value,"onUpdate:active":u[0]||(u[0]=g=>d.value=g)},{default:o(()=>[a(t(_),null,{default:o(()=>[n(l(t(r).option),1)]),_:1}),a(t(_),null,{default:o(()=>[n(l(t(r).option),1)]),_:1}),a(t(_),null,{default:o(()=>[n(l(t(r).option),1)]),_:1})]),_:1},8,["active"])]),default:o(()=>[n(l(t(r).title)+" ",1)]),_:1})],64))}};export{Ut as default};
