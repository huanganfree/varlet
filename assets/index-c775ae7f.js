import{p as $,P as U}from"./index-d4a36d64.js";import{B as V}from"./index-220522c5.js";import{d as C,p as N,c as R,a as n,m as z,w as P}from"./logger-9a144f5d.js";import{d as A,a as I}from"./elements-1fb47fa1.js";import{p as j}from"./index-d39e90ed.js";import{d as q,a as S,w,_ as L,p as T,f as O,i as B,S as h,M as d,m as M,N as r,O as b,P as m,Q as g,R as Q,j as D,aq as W,r as E,n as F,W as G}from"./vue-router-547718df.js";const H={show:Boolean,width:[Number,String],title:String,message:String,messageAlign:{type:String,default:"left"},confirmButton:{type:Boolean,default:!0},cancelButton:{type:Boolean,default:!0},confirmButtonText:String,cancelButtonText:String,confirmButtonTextColor:String,cancelButtonTextColor:String,confirmButtonColor:String,cancelButtonColor:String,dialogClass:String,dialogStyle:Object,onBeforeClose:C(),onConfirm:C(),onCancel:C(),"onUpdate:show":C(),...N($,["overlay","overlayClass","overlayStyle","lockScroll","closeOnClickOverlay","teleport","onOpen","onClose","onOpened","onClosed","onClickOverlay","onRouteChange"])},{n:J,classes:K}=R("dialog"),X=q({name:"VarDialog",components:{VarPopup:U,VarButton:V},inheritAttrs:!1,props:H,setup(o){const a=S(!1),s=S(!1),e=()=>n(o["onUpdate:show"],!1),c=()=>{const{closeOnClickOverlay:l,onClickOverlay:u,onBeforeClose:k}=o;if(n(u),!!l){if(k!=null){n(k,"close",e);return}n(o["onUpdate:show"],!1)}},p=()=>{const{onBeforeClose:l,onConfirm:u}=o;if(n(u),l!=null){n(l,"confirm",e);return}n(o["onUpdate:show"],!1)},f=()=>{const{onBeforeClose:l,onCancel:u}=o;if(n(u),l!=null){n(l,"cancel",e);return}n(o["onUpdate:show"],!1)};return w(()=>o.show,l=>{a.value=l},{immediate:!0}),w(()=>o.closeOnClickOverlay,l=>{if(o.onBeforeClose!=null){s.value=!1;return}s.value=l},{immediate:!0}),{n:J,classes:K,pack:j,dt:A,popupShow:a,popupCloseOnClickOverlay:s,handleClickOverlay:c,confirm:p,cancel:f,toSizeUnit:I}}});function Y(o,a,s,e,c,p){const f=T("var-button"),l=T("var-popup");return O(),B(l,{class:r(o.n("popup")),"var-dialog-cover":"",show:o.popupShow,overlay:o.overlay,"overlay-class":o.overlayClass,"overlay-style":o.overlayStyle,"lock-scroll":o.lockScroll,"close-on-click-overlay":o.popupCloseOnClickOverlay,teleport:o.teleport,onOpen:o.onOpen,onClose:o.onClose,onClosed:o.onClosed,onOpened:o.onOpened,onRouteChange:o.onRouteChange,onClickOverlay:o.handleClickOverlay},{default:h(()=>[d("div",M({class:o.classes(o.n("$--box"),o.n(),o.dialogClass),style:{width:o.toSizeUnit(o.width),...o.dialogStyle}},o.$attrs),[d("div",{class:r(o.n("title"))},[b(o.$slots,"title",{},()=>[m(g(o.dt(o.title,o.pack.dialogTitle)),1)])],2),d("div",{class:r(o.n("message")),style:Q({textAlign:o.messageAlign})},[b(o.$slots,"default",{},()=>[m(g(o.message),1)])],6),d("div",{class:r(o.n("actions"))},[o.cancelButton?(O(),B(f,{key:0,class:r(o.classes(o.n("button"),o.n("cancel-button"))),"var-dialog-cover":"",text:"","text-color":o.cancelButtonTextColor,color:o.cancelButtonColor,onClick:o.cancel},{default:h(()=>[m(g(o.dt(o.cancelButtonText,o.pack.dialogCancelButtonText)),1)]),_:1},8,["class","text-color","color","onClick"])):D("",!0),o.confirmButton?(O(),B(f,{key:1,class:r(o.classes(o.n("button"),o.n("confirm-button"))),"var-dialog-cover":"",text:"","text-color":o.confirmButtonTextColor,color:o.confirmButtonColor,onClick:o.confirm},{default:h(()=>[m(g(o.dt(o.confirmButtonText,o.pack.dialogConfirmButtonText)),1)]),_:1},8,["class","text-color","color","onClick"])):D("",!0)],2)],16)]),_:3},8,["class","show","overlay","overlay-class","overlay-style","lock-scroll","close-on-click-overlay","teleport","onOpen","onClose","onClosed","onOpened","onRouteChange","onClickOverlay"])}const y=L(X,[["render",Y]]);let t,v={};function Z(o={}){return G(o)?{...v,message:o}:{...v,...o}}function i(o){return W()?new Promise(a=>{i.close();const s=Z(o),e=E(s);e.teleport="body",t=e;const{unmountInstance:c}=z(y,e,{onConfirm:()=>{n(e.onConfirm),a("confirm")},onCancel:()=>{n(e.onCancel),a("cancel")},onClose:()=>{n(e.onClose),a("close")},onClosed:()=>{n(e.onClosed),c(),t===e&&(t=null)},onRouteChange:()=>{c(),t===e&&(t=null)},"onUpdate:show":p=>{e.show=p}});e.show=!0}):Promise.resolve()}i.setDefaultOptions=function(o){v=o};i.resetDefaultOptions=function(){v={}};i.close=function(){if(t!=null){const o=t;t=null,F().then(()=>{o.show=!1})}};i.Component=y;P(y);P(y,i);export{i as D};
