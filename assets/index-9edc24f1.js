import{a as r}from"./elements-75b8c791.js";import{d as y,r as w,D as m,aW as B,at as S,aB as g,a4 as $,_ as b,e as p,m as f,v as k,x as h,R as D,t as v,y as I}from"./index-ba2bae36.js";import{c as N,w as z}from"./components-b4bea23d.js";const C={inset:{type:[Boolean,Number,String],default:!1},vertical:Boolean,description:String,margin:String,dashed:Boolean,hairline:Boolean},{name:T,n:U,classes:M}=N("divider"),P=y({name:T,props:C,setup(e,{slots:o}){const n=w(!1),l=m(()=>{const{vertical:t,inset:s}=e;return!t&&s===!0}),d=m(()=>{const{inset:t,vertical:s,margin:c}=e;if(B(t)||s)return{margin:c};const i=$(t),u=Math.abs(i)+(t+"").replace(i+"","");return{margin:c,width:`calc(100% - ${r(u)})`,left:i>0?r(u):r(0)}});S(a),g(a);function a(){const{description:t,vertical:s}=e;n.value=(o.default||t!=null)&&!s}return{n:U,classes:M,withText:n,style:d,withPresetInset:l}}});function W(e,o,n,l,d,a){return p(),f("div",{class:h(e.classes(e.n(),e.n("$--box"),[e.vertical,e.n("--vertical")],[e.withText,e.n("--with-text")],[e.withPresetInset,e.n("--inset")],[e.dashed,e.n("--dashed")],[e.hairline,e.n("--hairline")])),style:I(e.style)},[e.vertical?v("",!0):k(e.$slots,"default",{key:0},()=>[e.description?(p(),f("span",{key:0,class:h(e.n("text"))},D(e.description),3)):v("",!0)])],6)}const E=b(P,[["render",W]]);z(E);export{E as D};
