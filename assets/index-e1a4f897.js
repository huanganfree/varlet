import{d as Q,u as U,c as Z,a as _,w as tt}from"./components-b4bea23d.js";import{t as g}from"./elements-75b8c791.js";import{d as et,r as f,b5 as nt,W as ot,G as at,aC as lt,at as st,aO as it,ah as $,aD as B,_ as rt,e as ut,f as dt,p as ct,v as ft,as as ht,au as mt}from"./index-ba2bae36.js";const gt={direction:{type:String,default:"xy"},attraction:String,disabled:Boolean,boundary:{type:Object,default:()=>({top:0,bottom:0,left:0,right:0})},zIndex:{type:[Number,String],default:90},teleport:{type:[String,Object,Boolean],default:"body"},onClick:Q()},{name:vt,n:bt,classes:pt}=Z("drag"),Tt=et({name:vt,inheritAttrs:!1,props:gt,setup(t,{attrs:a}){const v=f(null),r=f(0),u=f(0),d=f(!1),o=f(!1),{touching:S,dragging:D,moveX:W,moveY:z,startTouch:R,moveTouch:H,endTouch:N,resetTouch:O}=nt(),{disabled:P}=U(),l=ot({top:0,bottom:0,left:0,right:0});at(()=>t.boundary,Y),lt(p),st(()=>{Y(),p()});function A(e){t.disabled||(R(e),k())}async function I(e){!S.value||t.disabled||(H(e),it(e),o.value=!1,d.value=!0,t.direction.includes("x")&&(r.value+=W.value),t.direction.includes("y")&&(u.value+=z.value),X())}function j(){t.disabled||(N(),o.value=!0,L())}function x(e){D.value||_(t.onClick,e)}function k(){const{left:e,top:n}=b();r.value=e,u.value=n}function b(){const e=$(v.value),n=$(window),i=e.top-n.top,s=n.bottom-e.bottom,c=e.left-n.left,T=n.right-e.right,{width:h,height:m}=e,{width:y,height:w}=n;return{top:i,bottom:s,left:c,right:T,width:h,height:m,halfWidth:h/2,halfHeight:m/2,windowWidth:y,windowHeight:w}}function C(){const e=b(),n=l.left,i=e.windowWidth-l.right-e.width,s=l.top,c=e.windowHeight-l.bottom-e.height;return{minX:n,minY:s,maxX:n<i?i:n,maxY:s<c?c:s}}function L(){if(t.attraction==null)return;const{halfWidth:e,halfHeight:n,top:i,bottom:s,left:c,right:T}=b(),{minX:h,minY:m,maxX:y,maxY:w}=C(),V=c+e-l.left,q=T+e-l.right,E=i+n-l.top,F=s+n-l.bottom,J=V<=q,K=E<=F;t.attraction.includes("x")&&(r.value=J?h:y),t.attraction.includes("y")&&(u.value=K?m:w)}function X(){const{minX:e,minY:n,maxX:i,maxY:s}=C();r.value=B(r.value,e,i),u.value=B(u.value,n,s)}function Y(){const{top:e=0,bottom:n=0,left:i=0,right:s=0}=t.boundary;l.top=g(e),l.bottom=g(n),l.left=g(i),l.right=g(s)}function G(){const e=a.style??{};return{...a,style:{...e,top:d.value?0:e.top,left:d.value?0:e.left,right:d.value?"auto":e.right,bottom:d.value?"auto":e.bottom,transform:d.value?`translate(${r.value}px, ${u.value}px)`:e.transform}}}function p(){d.value&&(k(),X())}function M(){O(),o.value=!1,d.value=!1,r.value=0,u.value=0}return{drag:v,x:r,y:u,enableTransition:o,dragging:D,teleportDisabled:P,n:bt,classes:pt,getAttrs:G,handleTouchstart:A,handleTouchmove:I,handleTouchend:j,handleClick:x,resize:p,reset:M}}});function yt(t,a,v,r,u,d){return ut(),dt(mt,{to:t.teleport===!1?void 0:t.teleport,disabled:t.teleportDisabled||t.teleport===!1},[ct("div",ht({ref:"drag",class:t.classes(t.n(),t.n("$--box"),[t.enableTransition,t.n("--transition")]),style:{"z-index":t.zIndex},onTouchstart:a[0]||(a[0]=(...o)=>t.handleTouchstart&&t.handleTouchstart(...o)),onTouchmove:a[1]||(a[1]=(...o)=>t.handleTouchmove&&t.handleTouchmove(...o)),onTouchend:a[2]||(a[2]=(...o)=>t.handleTouchend&&t.handleTouchend(...o)),onTouchcancel:a[3]||(a[3]=(...o)=>t.handleTouchend&&t.handleTouchend(...o)),onClick:a[4]||(a[4]=(...o)=>t.handleClick&&t.handleClick(...o))},t.getAttrs()),[ft(t.$slots,"default")],16)],8,["to","disabled"])}const wt=rt(Tt,[["render",yt]]);tt(wt);export{wt as D};
