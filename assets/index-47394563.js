import{F as I,u as N}from"./provide-bd6f36e3.js";import{d as V,h as E,a as u,c as H,w as F,g as Q}from"./components-b4bea23d.js";import{a1 as X,d as U,D as j,G as T,n as W,_ as K,b as A,e as B,m as w,p as G,v as S,x as c,q as b,a3 as Z,r as _,L as z,P as x,y as ee,as as ae}from"./index-ba2bae36.js";import{I as oe}from"./index-d9f34410.js";import{v as re}from"./index-85ab28c6.js";import{H as ne}from"./index-2a9d0a0e.js";import{H as se,u as ie}from"./index-8c8e5e90.js";const le={modelValue:{type:[String,Number,Boolean,Object,Array],default:void 0},direction:{type:String,default:"horizontal"},validateTrigger:{type:Array,default:()=>["onChange"]},rules:Array,onChange:V(),"onUpdate:modelValue":V()},L=Symbol("RADIO_GROUP_BIND_RADIO_KEY");function de(){const{bindChildren:e,childProviders:o,length:n}=X(L);return{length:n,radios:o,bindRadios:e}}const{name:te,n:ue,classes:ce}=H("radio-group"),ve=U({name:te,components:{VarFormDetails:I},props:le,setup(e){const{length:o,radios:n,bindRadios:v}=de(),{bindForm:s}=N(),{errorMessage:m,validateWithTrigger:t,validate:h,resetValidation:a}=E(),f=j(()=>m.value),g={onToggle:y,validate:k,reset:C,resetValidation:a,errorMessage:f};T(()=>e.modelValue,R),T(()=>o.value,R),u(s,g),v(g);function p(d){W(()=>{const{validateTrigger:M,rules:O,modelValue:$}=e;t(M,d,O,$)})}function R(){return n.forEach(({sync:d})=>d(e.modelValue))}function y(d){u(e["onUpdate:modelValue"],d),u(e.onChange,d),p("onChange")}function k(){return h(e.rules,e.modelValue)}function C(){u(e["onUpdate:modelValue"],void 0),a()}return{errorMessage:m,n:ue,classes:ce,reset:C,validate:k,resetValidation:a}}});function me(e,o,n,v,s,m){const t=A("var-form-details");return B(),w("div",{class:c(e.n("wrap"))},[G("div",{class:c(e.classes(e.n(),e.n(`--${e.direction}`)))},[S(e.$slots,"default")],2),b(t,{"error-message":e.errorMessage},null,8,["error-message"])],2)}const ge=K(ve,[["render",me]]);F(ge);const he={modelValue:{type:[String,Number,Boolean,Object,Array],default:!1},checkedValue:{type:[String,Number,Boolean,Object,Array],default:!0},uncheckedValue:{type:[String,Number,Boolean,Object,Array],default:!1},disabled:Boolean,readonly:Boolean,checkedColor:String,uncheckedColor:String,iconSize:[String,Number],ripple:{type:Boolean,default:!0},validateTrigger:{type:Array,default:()=>["onChange"]},rules:Array,onClick:V(),onChange:V(),"onUpdate:modelValue":V()};function fe(){const{bindParent:e,parentProvider:o,index:n}=Z(L);return{index:n,radioGroup:o,bindRadioGroup:e}}const{name:pe,n:ye,classes:ke}=H("radio"),be=U({name:pe,directives:{Ripple:re,Hover:ne},components:{VarIcon:oe,VarFormDetails:I,VarHoverOverlay:se},inheritAttrs:!1,props:he,setup(e){const o=Q(e,"modelValue"),n=j(()=>o.value===e.checkedValue),v=_(!1),{radioGroup:s,bindRadioGroup:m}=fe(),{hovering:t,handleHovering:h}=ie(),{form:a,bindForm:f}=N(),{errorMessage:g,validateWithTrigger:p,validate:R,resetValidation:y}=E(),k={sync:O,validate:P,resetValidation:y,reset:$};u(m,k),u(f,k);function C(i){W(()=>{const{validateTrigger:r,rules:l,modelValue:D}=e;p(r,i,l,D)})}function d(i){const{checkedValue:r,onChange:l}=e;s&&o.value===r||(o.value=i,u(l,o.value),s==null||s.onToggle(r),C("onChange"))}function M(i){const{disabled:r,readonly:l,uncheckedValue:D,checkedValue:q,onClick:J}=e;a!=null&&a.disabled.value||r||(u(J,i),!(a!=null&&a.readonly.value||l)&&(v.value=!0,d(n.value?D:q)))}function O(i){const{checkedValue:r,uncheckedValue:l}=e;o.value=i===r?r:l}function $(){o.value=e.uncheckedValue,y()}function P(){return R(e.rules,e.modelValue)}function Y(i){const{uncheckedValue:r,checkedValue:l}=e;![r,l].includes(i)&&(i=n.value?r:l),d(i)}return{withAnimation:v,checked:n,errorMessage:g,radioGroupErrorMessage:s==null?void 0:s.errorMessage,formDisabled:a==null?void 0:a.disabled,formReadonly:a==null?void 0:a.readonly,hovering:t,handleHovering:h,n:ye,classes:ke,handleClick:M,toggle:Y,reset:$,validate:P,resetValidation:y}}});function Ve(e,o,n,v,s,m){const t=A("var-icon"),h=A("var-hover-overlay"),a=A("var-form-details"),f=z("ripple"),g=z("hover");return B(),w("div",{class:c(e.n("wrap"))},[G("div",ae({class:e.n(),onClick:o[0]||(o[0]=(...p)=>e.handleClick&&e.handleClick(...p))},e.$attrs),[x((B(),w("div",{class:c(e.classes(e.n("action"),[e.checked,e.n("--checked"),e.n("--unchecked")],[e.errorMessage||e.radioGroupErrorMessage,e.n("--error")],[e.formDisabled||e.disabled,e.n("--disabled")])),style:ee({color:e.checked?e.checkedColor:e.uncheckedColor})},[e.checked?S(e.$slots,"checked-icon",{key:0},()=>[b(t,{class:c(e.classes(e.n("icon"),[e.withAnimation,e.n("--with-animation")])),"var-radio-cover":"",name:"radio-marked",size:e.iconSize},null,8,["class","size"])]):S(e.$slots,"unchecked-icon",{key:1},()=>[b(t,{class:c(e.classes(e.n("icon"),[e.withAnimation,e.n("--with-animation")])),"var-radio-cover":"",name:"radio-blank",size:e.iconSize},null,8,["class","size"])]),b(h,{hovering:!e.disabled&&!e.formDisabled&&e.hovering},null,8,["hovering"])],6)),[[f,{disabled:e.formReadonly||e.readonly||e.formDisabled||e.disabled||!e.ripple}],[g,e.handleHovering,"desktop"]]),G("div",{class:c(e.classes(e.n("text"),[e.errorMessage||e.radioGroupErrorMessage,e.n("--error")],[e.formDisabled||e.disabled,e.n("--disabled")]))},[S(e.$slots,"default")],2)],16),b(a,{"error-message":e.errorMessage},null,8,["error-message"])],2)}const Re=K(be,[["render",Ve]]);F(Re);export{Re as R,ge as a};
