import{d as B,r as W,D as I,G as z,at as Z,_ as P,b as C,P as J,Y as X,e as b,m as x,p as m,x as u,v as d,Q as q,R as D,f as h,t as N,y as L,q as k,w as v,as as O,T as nn,au as en,W as A,a5 as on,ac as tn,av as an,a4 as j,aw as sn,aq as rn}from"./index-ba2bae36.js";import{p as g,L as ln}from"./index-de3cc273.js";import{I as cn}from"./index-d9f34410.js";import{u as dn}from"./zIndex-6555f30c.js";import{p as y,d as p,c as U,a as c,u as un,m as pn,w as _}from"./components-b4bea23d.js";import{u as fn}from"./lock-f26c8833.js";import{c as mn}from"./index-bc58714c.js";const G={type:String,position:{type:String,default:"top"},content:{type:[String,Function,Object]},contentClass:String,duration:{type:Number,default:3e3},vertical:Boolean,loadingType:y(g,"type"),loadingSize:y(g,"size"),loadingRadius:y(g,"radius"),loadingColor:{...y(g,"color"),default:"currentColor"},lockScroll:Boolean,show:Boolean,teleport:{type:[String,Object,Boolean],default:"body"},forbidClick:Boolean,onOpen:p(),onOpened:p(),onClose:p(),onClosed:p(),"onUpdate:show":p(),_update:String},{n:vn,classes:gn}=U("snackbar"),yn={success:"checkbox-marked-circle",warning:"warning",info:"information",error:"error",loading:""},bn=B({name:"VarSnackbarCore",components:{VarLoading:ln,VarIcon:cn},props:G,setup(n){const o=W(null),{zIndex:e}=dn(()=>n.show,1);fn(()=>n.show,()=>n.lockScroll);const s=I(()=>n.type==="loading"||n.forbidClick),t=I(()=>n.type?yn[n.type]:""),i=()=>{o.value=setTimeout(()=>{n.type!=="loading"&&c(n["onUpdate:show"],!1)},n.duration)};return z(()=>n.show,l=>{l?(c(n.onOpen),i()):l===!1&&(clearTimeout(o.value),c(n.onClose))}),z(()=>n._update,()=>{clearTimeout(o.value),i()}),Z(()=>{n.show&&(c(n.onOpen),i())}),{SNACKBAR_TYPE:F,n:vn,classes:gn,zIndex:e,iconName:t,isForbidClick:s}}});function kn(n,o,e,s,t,i){const l=C("var-icon"),S=C("var-loading");return J((b(),x("div",{class:u(n.n()),style:L({pointerEvents:n.isForbidClick?"auto":"none",zIndex:n.zIndex})},[m("div",{class:u(n.classes(n.n("wrapper"),n.n(`wrapper-${n.position}`),n.n("$-elevation--4"),[n.vertical,n.n("vertical")],[n.type&&n.SNACKBAR_TYPE.includes(n.type),n.n(`wrapper-${n.type}`)])),style:L({zIndex:n.zIndex})},[m("div",{class:u([n.n("content"),n.contentClass])},[d(n.$slots,"default",{},()=>[q(D(n.content),1)])],2),m("div",{class:u([n.n("icon")])},[n.iconName?(b(),h(l,{key:0,name:n.iconName},null,8,["name"])):N("",!0),n.type==="loading"?(b(),h(S,{key:1,type:n.loadingType,size:n.loadingSize,color:n.loadingColor,radius:n.loadingRadius},null,8,["type","size","color","radius"])):N("",!0),d(n.$slots,"icon")],2),m("div",{class:u(n.n("action"))},[d(n.$slots,"action")],2)],6)],6)),[[X,n.show]])}const R=P(bn,[["render",kn]]),{name:Sn,n:wn}=U("snackbar"),Cn=B({name:Sn,components:{VarSnackbarCore:R},props:G,setup(){const{disabled:n}=un();return{disabled:n,n:wn}}});function hn(n,o,e,s,t,i){const l=C("var-snackbar-core");return b(),h(en,{to:n.teleport===!1?void 0:n.teleport,disabled:n.disabled||n.teleport===!1},[k(nn,{name:`${n.n()}-fade`,onAfterEnter:n.onOpened,onAfterLeave:n.onClosed},{default:v(()=>[k(l,O(n.$props,{class:n.n("transition")}),{icon:v(()=>[d(n.$slots,"icon")]),action:v(()=>[d(n.$slots,"action")]),default:v(()=>[d(n.$slots,"default",{},()=>[q(D(n.content),1)])]),_:3},16,["class"])]),_:3},8,["name","onAfterEnter","onAfterLeave"])],8,["to","disabled"])}const E=P(Cn,[["render",hn]]);function On(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!sn(n)}const F=["loading","success","warning","info","error"];let V=0,$=!1,M,f=!1;const Y={type:void 0,content:"",icon:"",action:"",position:"top",duration:3e3,vertical:!1,contentClass:void 0,loadingType:"circle",loadingSize:"normal",lockScroll:!1,teleport:"body",forbidClick:!1,onOpen:()=>{},onOpened:()=>{},onClose:()=>{},onClosed:()=>{}};let a=A([]),T=Y;const $n={name:"var-snackbar-fade",tag:"div",class:"var-transition-group"},w=n=>()=>rn(n)?n():n,An={setup(){return()=>{const n=a.map(({id:o,reactiveSnackOptions:e,_update:s})=>{const t=document.querySelector(".var-transition-group");e.forbidClick||e.type==="loading"?t.classList.add("var-pointer-auto"):t.classList.remove("var-pointer-auto");const i={position:f?"relative":"absolute",...Ln(e.position)},{content:l,icon:S,action:K}=e,H={default:w(l),icon:w(S),action:w(K)};return k(R,O(e,{key:o,style:i,"data-id":o,_update:s,show:e.show,"onUpdate:show":Q=>e.show=Q}),H)});return k(an,O($n,{style:{zIndex:mn.zIndex},onAfterEnter:En,onAfterLeave:Tn}),On(n)?n:{default:()=>[n]})}}},r=function(n){const o=zn(n),e=A({...T,...o});e.show=!0,$||($=!0,M=pn(An).unmountInstance);const{length:s}=a,t={id:V++,reactiveSnackOptions:e};if(s===0||f)In(t);else{const i=`update-${V}`;Nn(e,i)}return{clear(){!f&&a.length?a[0].reactiveSnackOptions.show=!1:e.show=!1}}};F.forEach(n=>{r[n]=o=>(on(o)?o.type=n:o={content:o,type:n},r(o))});r.allowMultiple=function(n=!1){n!==f&&(a.forEach(o=>{o.reactiveSnackOptions.show=!1}),f=n)};r.clear=function(){a.forEach(n=>{n.reactiveSnackOptions.show=!1})};r.setDefaultOptions=function(n){T=n};r.resetDefaultOptions=function(){T=Y};function En(n){const o=n.getAttribute("data-id"),e=a.find(s=>s.id===j(o));e&&c(e.reactiveSnackOptions.onOpened)}function Tn(n){n.parentElement&&n.parentElement.classList.remove("var-pointer-auto");const o=n.getAttribute("data-id"),e=a.find(t=>t.id===j(o));e&&(e.animationEnd=!0,c(e.reactiveSnackOptions.onClosed)),a.every(t=>t.animationEnd)&&(c(M),a=A([]),$=!1)}function In(n){a.push(n)}function zn(n={}){return tn(n)?{content:n}:n}function Nn(n,o){const[e]=a;e.reactiveSnackOptions={...e.reactiveSnackOptions,...n},e._update=o}function Ln(n="top"){return n==="bottom"?{top:"85%"}:{top:n==="top"?"5%":"45%"}}r.Component=E;_(E);_(E,r);const _n=r;export{_n as S};
