import{a as r}from"./elements-1fb47fa1.js";import{d as y,a as w,b as u,aO as S,ai as g,Z as B,_ as $,f as m,h,O as b,N as f,Q as k,j as v,R as D}from"./vue-router-547718df.js";import{o as N,c as I,w as z}from"./logger-9a144f5d.js";const C={inset:{type:[Boolean,Number,String],default:!1},vertical:Boolean,description:String,margin:String,dashed:Boolean,hairline:Boolean},{n:T,classes:U}=I("divider"),M=y({name:"VarDivider",props:C,setup(e,{slots:o}){const n=w(!1),l=u(()=>{const{vertical:s,inset:t}=e;return!s&&t===!0}),d=u(()=>{const{inset:s,vertical:t,margin:c}=e;if(S(s)||t)return{margin:c};const i=B(s),p=Math.abs(i)+(s+"").replace(i+"","");return{margin:c,width:`calc(100% - ${r(p)})`,left:i>0?r(p):r(0)}}),a=()=>{const{description:s,vertical:t}=e;n.value=(o.default||s!=null)&&!t};return N(()=>{a()}),g(()=>{a()}),{n:T,classes:U,withText:n,style:d,withPresetInset:l}}});function O(e,o,n,l,d,a){return m(),h("div",{class:f(e.classes(e.n(),e.n("$--box"),[e.vertical,e.n("--vertical")],[e.withText,e.n("--with-text")],[e.withPresetInset,e.n("--inset")],[e.dashed,e.n("--dashed")],[e.hairline,e.n("--hairline")])),style:D(e.style)},[e.vertical?v("",!0):b(e.$slots,"default",{key:0},()=>[e.description?(m(),h("span",{key:0,class:f(e.n("text"))},k(e.description),3)):v("",!0)])],6)}const P=$(M,[["render",O]]);z(P);export{P as D};
