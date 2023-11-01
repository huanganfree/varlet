import{d as ye,r as k,D as T,a4 as D,G as fe,_ as ge,b as ne,e as Y,m as S,q as $,w as E,p as H,R as w,T as he,x as A,W as Ve,b2 as s,b3 as We,b4 as je,N as pe,O as Ce,as as Ee,Q as L,at as ze,y as He,j as an,a2 as me,v as re,aQ as rn,f as Be,t as ln,F as sn,al as un,U as M}from"./index-ba2bae36.js";import{d as Te,c as se,f as cn,a as Z,w as dn}from"./components-b4bea23d.js";import{B as Ae}from"./index-b6014f56.js";import{I as mn}from"./index-d9f34410.js";import{p as Q,u as vn,b as Fe,_ as fn,c as hn,a as pn}from"./index-bcc640ab.js";import{p as Le}from"./shared-104f51c5.js";import{d as yn}from"./index-d8fbf18c.js";import{A as ie}from"./appType-18c8b942.js";import"./index-85ab28c6.js";import"./index-bc58714c.js";/* empty css               */import"./index-de3cc273.js";import"./elements-75b8c791.js";import"./logger-525ef361.js";import"./index-8c8e5e90.js";import"./index-2a9d0a0e.js";const Me=[{index:"01"},{index:"02"},{index:"03"},{index:"04"},{index:"05"},{index:"06"},{index:"07"},{index:"08"},{index:"09"},{index:"10"},{index:"11"},{index:"12"}],ve=[{index:"0"},{index:"1"},{index:"2"},{index:"3"},{index:"4"},{index:"5"},{index:"6"}],gn={modelValue:[String,Array],type:{type:String,default:"date"},hint:String,allowedDates:Function,color:String,headerColor:String,titleColor:String,elevation:{type:[Boolean,Number,String],default:!1},buttonElevation:{type:[Boolean,Number,String],default:!0},firstDayOfWeek:{type:[String,Number],default:0},min:String,max:String,showCurrent:{type:Boolean,default:!0},readonly:Boolean,multiple:Boolean,range:Boolean,touchable:{type:Boolean,default:!0},onPreview:Te(),onChange:Te(),"onUpdate:modelValue":Te()},{n:kn}=se("picker-header"),Dn=ye({name:"PanelHeader",components:{VarButton:Ae,VarIcon:mn},props:{date:{type:Object,required:!0},type:{type:String,default:"date"},disabled:{type:Object,required:!0}},emits:["check-panel","check-date"],setup(e,{emit:l}){const O=k(!1),V=k(0),B=T(()=>{var c;const{date:r,type:i}=e,{previewMonth:t,previewYear:a}=r;if(i==="month")return D(a)+V.value;const v=(c=Q.value.datePickerMonthDict)==null?void 0:c[t.index].name;return Q.value.lang==="zh-CN"?`${a} ${v}`:`${v} ${a}`}),f=r=>{r==="prev"&&e.disabled.left||r==="next"&&e.disabled.right||(l("check-date",r),O.value=r==="prev",V.value+=r==="prev"?-1:1)};return fe(()=>e.date,()=>{V.value=0}),{n:kn,reverse:O,showDate:B,checkDate:f}}});function $n(e,l,O,V,B,f){const r=ne("var-icon"),i=ne("var-button");return Y(),S("div",{class:A(e.n())},[$(i,{round:"",text:"",style:{filter:"opacity(0.54)"},disabled:e.disabled.left,onClick:l[0]||(l[0]=t=>e.checkDate("prev"))},{default:E(()=>[$(r,{name:"chevron-left"})]),_:1},8,["disabled"]),H("div",{class:A(e.n("value")),onClick:l[1]||(l[1]=t=>e.$emit("check-panel"))},[$(he,{name:`var-date-picker${e.reverse?"-reverse":""}-translatex`},{default:E(()=>[(Y(),S("div",{key:e.showDate},w(e.showDate),1))]),_:1},8,["name"])],2),$(i,{round:"",text:"",style:{filter:"opacity(0.54)"},disabled:e.disabled.right,onClick:l[2]||(l[2]=t=>e.checkDate("next"))},{default:E(()=>[$(r,{name:"chevron-right"})]),_:1},8,["disabled"])],2)}const Ke=ge(Dn,[["render",$n]]);s.extend(We);s.extend(je);const{n:be,classes:wn}=se("month-picker"),{n:Ye}=se("date-picker"),bn=ye({name:"MonthPickerPanel",components:{VarButton:Ae,PanelHeader:Ke},props:{choose:{type:Object,required:!0},preview:{type:Object,required:!0},current:{type:String,required:!0},clickYear:{type:Function,required:!0},componentProps:{type:Object,required:!0}},emits:["check-preview","choose-month"],setup(e,{emit:l}){const[O,V]=e.current.split("-"),B=k(!1),f=k(0),r=k(null),i=Ve({left:!1,right:!1}),t=T(()=>e.choose.chooseYear===e.preview.previewYear),a=T(()=>e.preview.previewYear===O),v=m=>{var y;return((y=Q.value.datePickerMonthDict)==null?void 0:y[m].abbr)??""},c=m=>{const{preview:{previewYear:y},componentProps:{min:I,max:q}}=e;let F=!0,W=!0;const o=`${y}-${m}`;return q&&(F=s(o).isSameOrBefore(s(q),"month")),I&&(W=s(o).isSameOrAfter(s(I),"month")),F&&W},b=m=>{const{choose:{chooseMonths:y,chooseDays:I,chooseRangeMonth:q},componentProps:{type:F,range:W}}=e;if(W){if(!q.length)return!1;const o=s(m).isSameOrBefore(s(q[1]),"month"),h=s(m).isSameOrAfter(s(q[0]),"month");return o&&h}return F==="month"?y.includes(m):I.some(o=>o.includes(m))},oe=m=>{const{choose:{chooseMonth:y},preview:{previewYear:I},componentProps:{allowedDates:q,color:F,multiple:W,range:o}}=e,h=`${I}-${m}`,C=()=>o||W?b(h):(y==null?void 0:y.index)===m&&t.value,P=(()=>c(m)?q?!q(h):!1:!0)(),U=()=>P?!0:o||W?!b(h):!t.value||(y==null?void 0:y.index)!==m,K=()=>a.value&&V===m&&e.componentProps.showCurrent?(o||W||t.value)&&P?!0:o||W?!b(h):t.value?(y==null?void 0:y.index)!==V:!0:!1,X=()=>P?"":K()?F??"":C()?"":`${Ye()}-color-cover`,J=X().startsWith(Ye());return{outline:K(),text:U(),color:U()?"":F,textColor:J?"":X(),[`${Ye()}-color-cover`]:J,class:wn(be("button"),[P,be("button--disabled")]),disabled:P}},te=(m,y)=>{y.currentTarget.classList.contains(be("button--disabled"))||l("choose-month",m)},x=m=>{B.value=m==="prev",f.value+=m==="prev"?-1:1,l("check-preview","year",m)},G=m=>{r.value.checkDate(m)};return fe(()=>e.preview.previewYear,m=>{const{componentProps:{min:y,max:I}}=e;I&&(i.right=!s(`${D(m)+1}`).isSameOrBefore(s(I),"year")),y&&(i.left=!s(`${D(m)-1}`).isSameOrAfter(s(y),"year"))},{immediate:!0}),{n:be,nDate:Ye,pack:Q,MONTH_LIST:Me,headerEl:r,reverse:B,panelKey:f,panelBtnDisabled:i,forwardRef:G,buttonProps:oe,getMonthAbbr:v,chooseMonth:te,checkDate:x}}});function Yn(e,l,O,V,B,f){const r=ne("panel-header"),i=ne("var-button");return Y(),S("div",{class:A(e.n())},[H("div",{class:A(e.n("content"))},[$(r,{ref:"headerEl",type:"month",date:e.preview,disabled:e.panelBtnDisabled,onCheckPanel:e.clickYear,onCheckDate:e.checkDate},null,8,["date","disabled","onCheckPanel","onCheckDate"]),$(he,{name:`${e.nDate()}${e.reverse?"-reverse":""}-translatex`},{default:E(()=>[(Y(),S("ul",{key:e.panelKey},[(Y(!0),S(pe,null,Ce(e.MONTH_LIST,t=>(Y(),S("li",{key:t.index},[$(i,Ee({type:"primary","var-month-picker-cover":"",ripple:!1,elevation:e.componentProps.buttonElevation},{...e.buttonProps(t.index)},{onClick:a=>e.chooseMonth(t,a)}),{default:E(()=>[L(w(e.getMonthAbbr(t.index)),1)]),_:2},1040,["elevation","onClick"])]))),128))]))]),_:1},8,["name"])],2)],2)}const Pn=ge(bn,[["render",Yn]]),{n:qe,classes:Mn}=se("year-picker"),Cn=ye({name:"YearPickerPanel",props:{preview:{type:String},componentProps:{type:Object,required:!0}},emits:["choose-year"],setup(e,{emit:l}){const O=k(),V=T(()=>{const f=[],{preview:r,componentProps:{max:i,min:t}}=e;if(!r)return f;let a=[D(r)+100,D(r)-100];if(i){const v=s(i).format("YYYY-MM-D"),c=D(v.split("-")[0]);if(c<a[0]&&c>a[1]&&(a=[c,a[1]]),c<=a[1])return[c]}if(t){const v=s(t).format("YYYY-MM-D"),c=D(v.split("-")[0]);if(c<a[0]&&c>a[1]&&(a=[a[0],c]),c>=a[0])return[c]}for(let v=a[0];v>=a[1];v--)f.push(v);return f}),B=f=>{l("choose-year",f)};return ze(()=>{const f=O.value.querySelector(`.${qe("item--active")}`);f==null||f.scrollIntoView({block:"center"})}),{n:qe,classes:Mn,panel:O,yearList:V,chooseYear:B,toNumber:D}}}),Vn=["onClick"];function Sn(e,l,O,V,B,f){return Y(),S("ul",{ref:"panel",class:A(e.n())},[(Y(!0),S(pe,null,Ce(e.yearList,r=>(Y(),S("li",{key:r,class:A(e.classes(e.n("item"),[r===e.toNumber(e.preview),e.n("item--active")])),style:He({color:r===e.toNumber(e.preview)?e.componentProps.color:""}),onClick:i=>e.chooseYear(r)},w(r),15,Vn))),128))],2)}const On=ge(Cn,[["render",Sn]]);s.extend(We);s.extend(je);const{n:ue,classes:Bn}=se("day-picker"),{n:Pe}=se("date-picker"),Tn=ye({name:"DayPickerPanel",components:{VarButton:Ae,PanelHeader:Ke},props:{choose:{type:Object,required:!0},preview:{type:Object,required:!0},current:{type:String,required:!0},clickMonth:{type:Function,required:!0},componentProps:{type:Object,required:!0}},emits:["check-preview","choose-day"],setup(e,{emit:l}){const[O,V,B]=e.current.split("-"),f=k([]),r=k(!1),i=k(0),t=k(null),a=Ve({left:!1,right:!1}),v=T(()=>e.preview.previewYear===O&&e.preview.previewMonth.index===V),c=T(()=>{var o;return e.choose.chooseYear===e.preview.previewYear&&((o=e.choose.chooseMonth)==null?void 0:o.index)===e.preview.previewMonth.index}),b=T(()=>{const o=ve.findIndex(h=>h.index===e.componentProps.firstDayOfWeek);return o===-1||o===0?ve:ve.slice(o).concat(ve.slice(0,o))}),oe=o=>{var h;return((h=Q.value.datePickerWeekDict)==null?void 0:h[o].abbr)??""},te=o=>o>0?o:"",x=()=>{const{preview:{previewMonth:o,previewYear:h}}=e,C=s(`${h}-${o.index}`).daysInMonth(),N=s(`${h}-${o.index}-01`).day(),P=b.value.findIndex(U=>U.index===`${N}`);f.value=[...Array(P).fill(-1),...Array.from(Array(C+1).keys())].filter(U=>U)},G=()=>{const{preview:{previewYear:o,previewMonth:h},componentProps:{max:C,min:N}}=e;if(C){const P=`${o}-${D(h.index)+1}`;a.right=!s(P).isSameOrBefore(s(C),"month")}if(N){const P=`${o}-${D(h.index)-1}`;a.left=!s(P).isSameOrAfter(s(N),"month")}},m=o=>{const{preview:{previewYear:h,previewMonth:C},componentProps:{min:N,max:P}}=e;let U=!0,K=!0;const X=`${h}-${C.index}-${o}`;return P&&(U=s(X).isSameOrBefore(s(P),"day")),N&&(K=s(X).isSameOrAfter(s(N),"day")),U&&K},y=o=>{const{choose:{chooseDays:h,chooseRangeDay:C},componentProps:{range:N}}=e;if(N){if(!C.length)return!1;const P=s(o).isSameOrBefore(s(C[1]),"day"),U=s(o).isSameOrAfter(s(C[0]),"day");return P&&U}return h.includes(o)},I=o=>{if(o<0)return{text:!0,outline:!1,textColor:"",class:ue("button"),disabled:!0};const{choose:{chooseDay:h},preview:{previewYear:C,previewMonth:N},componentProps:{allowedDates:P,color:U,multiple:K,range:X}}=e,J=`${C}-${N.index}-${o}`,ce=()=>X||K?y(J):D(h)===o&&c.value,_=(()=>m(o)?P?!P(J):!1:!0)(),Se=()=>_?!0:X||K?!y(J):!c.value||D(h)!==o,De=()=>v.value&&D(B)===o&&e.componentProps.showCurrent?(X||K||c.value)&&_?!0:X||K?!y(J):c.value?h!==B:!0:!1,$e=()=>_?"":De()?U??"":ce()?"":`${Pe()}-color-cover`,we=$e().startsWith(Pe());return{text:Se(),outline:De(),textColor:we?"":$e(),[`${Pe()}-color-cover`]:we,class:Bn(ue("button"),ue("button--usable"),[_,ue("button--disabled")]),disabled:_}},q=o=>{r.value=o==="prev",i.value+=o==="prev"?-1:1,l("check-preview","month",o)},F=(o,h)=>{h.currentTarget.classList.contains(ue("button--disabled"))||l("choose-day",o)},W=o=>{t.value.checkDate(o)};return ze(()=>{x(),G()}),fe(()=>e.preview,()=>{x(),G()}),{n:ue,nDate:Pe,days:f,reverse:r,headerEl:t,panelKey:i,sortWeekList:b,panelBtnDisabled:a,forwardRef:W,filterDay:te,getDayAbbr:oe,checkDate:q,chooseDay:F,buttonProps:I}}});function En(e,l,O,V,B,f){const r=ne("panel-header"),i=ne("var-button");return Y(),S("div",{class:A(e.n())},[H("div",{class:A(e.n("content"))},[$(r,{ref:"headerEl",type:"day",date:e.preview,disabled:e.panelBtnDisabled,onCheckPanel:e.clickMonth,onCheckDate:e.checkDate},null,8,["date","disabled","onCheckPanel","onCheckDate"]),$(he,{name:`${e.nDate()}${e.reverse?"-reverse":""}-translatex`},{default:E(()=>[(Y(),S("div",{key:e.panelKey},[H("ul",{class:A(e.n("head"))},[(Y(!0),S(pe,null,Ce(e.sortWeekList,t=>(Y(),S("li",{key:t.index},w(e.getDayAbbr(t.index)),1))),128))],2),H("ul",{class:A(e.n("body"))},[(Y(!0),S(pe,null,Ce(e.days,(t,a)=>(Y(),S("li",{key:a},[$(i,Ee({type:"primary","var-day-picker-cover":"",round:"",ripple:!1,elevation:e.componentProps.buttonElevation},{...e.buttonProps(t)},{onClick:v=>e.chooseDay(t,v)}),{default:E(()=>[L(w(e.filterDay(t)),1)]),_:2},1040,["elevation","onClick"])]))),128))],2)]))]),_:1},8,["name"])],2)],2)}const An=ge(Tn,[["render",En]]),{name:Nn,n:Rn,classes:In}=se("date-picker"),Un=ye({name:Nn,components:{MonthPickerPanel:Pn,YearPickerPanel:On,DayPickerPanel:An},props:gn,setup(e){const l=s().format("YYYY-MM-D"),[O,V]=l.split("-"),B=Me.find(n=>n.index===V),f=k(!1),r=k(!1),i=k(!0),t=k(),a=k(),v=k(),c=k(B),b=k(O),oe=k(!1),te=k([]),x=k([]),G=k([]),m=k([]),y=k(null),I=k(null),q=Ve({allowedDates:e.allowedDates,type:e.type,color:e.color,firstDayOfWeek:e.firstDayOfWeek,min:e.min,max:e.max,showCurrent:e.showCurrent,multiple:e.multiple,range:e.range,buttonElevation:e.buttonElevation}),F=T(()=>({chooseMonth:t.value,chooseYear:a.value,chooseDay:v.value,chooseMonths:te.value,chooseDays:x.value,chooseRangeMonth:G.value,chooseRangeDay:m.value})),W=T(()=>({previewMonth:c.value,previewYear:b.value})),o=T(()=>{var p;const{multiple:n,range:d}=e;if(d)return G.value.length?`${G.value[0]} ~ ${G.value[1]}`:"";let u="";return t.value&&(u=((p=Q.value.datePickerMonthDict)==null?void 0:p[t.value.index].name)??""),n?`${te.value.length}${Q.value.datePickerSelected}`:u}),h=T(()=>{var z,ae;const{multiple:n,range:d}=e;if(d){const de=m.value.map(on=>s(on).format("YYYY-MM-DD"));return de.length?`${de[0]} ~ ${de[1]}`:""}if(n)return`${x.value.length}${Q.value.datePickerSelected}`;if(!a.value||!t.value||!v.value)return"";const u=s(`${a.value}-${t.value.index}-${v.value}`).day(),p=ve.find(de=>de.index===`${u}`),g=((z=Q.value.datePickerWeekDict)==null?void 0:z[p.index].name)??"",R=((ae=Q.value.datePickerMonthDict)==null?void 0:ae[t.value.index].name)??"",j=Le(v.value,2,"0");return Q.value.lang==="zh-CN"?`${t.value.index}-${j} ${g.slice(0,3)}`:`${g.slice(0,3)}, ${R.slice(0,3)} ${v.value}`}),C=T(()=>f.value?"year":e.type==="month"||r.value?"month":e.type==="date"?"date":""),N=T(()=>!e.touchable||["","year"].includes(C.value)),P=T(()=>{var u,p;const n=s(`${a.value}-${(u=t.value)==null?void 0:u.index}-${v.value}`).day(),d=v.value?Le(v.value,2,"0"):"";return{week:`${n}`,year:a.value??"",month:((p=t.value)==null?void 0:p.index)??"",date:d}}),U=T(()=>F.value.chooseRangeDay.map(n=>s(n).format("YYYY-MM-DD"))),K=T(()=>a.value===b.value),X=T(()=>{var n;return((n=t.value)==null?void 0:n.index)===c.value.index});let J=0,ce=0,ke="",_;fe(()=>e.modelValue,n=>{if(!(!_e()||Oe(n)||!n))if(e.range){if(!me(n))return;i.value=n.length!==1,en(n,e.type)}else if(e.multiple){if(!me(n))return;nn(n,e.type)}else tn(n)},{immediate:!0}),fe(C,Ue);function Se(n){n==="year"?f.value=!0:n==="month"?r.value=!0:(f.value=!1,r.value=!1)}function De(n){if(N.value)return;const{clientX:d,clientY:u}=n.touches[0];J=d,ce=u}function $e(n,d){return n>=d&&n>20?"x":"y"}function we(n){if(N.value)return;const{clientX:d,clientY:u}=n.touches[0],p=d-J,g=u-ce;_=$e(Math.abs(p),Math.abs(g)),ke=p>0?"prev":"next"}async function Qe(){if(N.value||_!=="x")return;const n=C.value==="month"?y:I;await an(),n.value.forwardRef(ke),Ue()}function Ne(n,d){const u=d==="month"?G:m;if(u.value=i.value?[n,n]:[u.value[0],n],i.value=!i.value,i.value){const g=s(u.value[0]).isAfter(u.value[1])?[u.value[1],u.value[0]]:[...u.value];Z(e["onUpdate:modelValue"],g),Z(e.onChange,g)}}function Re(n,d){const u=d==="month"?te:x,p=d==="month"?"YYYY-MM":"YYYY-MM-DD",g=u.value.map(j=>s(j).format(p)),R=g.findIndex(j=>j===n);R===-1?g.push(n):g.splice(R,1),Z(e["onUpdate:modelValue"],g),Z(e.onChange,g)}function Ie(n,d){return!a.value||!t.value?!1:K.value?n==="month"?d.index<t.value.index:X.value?d<D(v.value):t.value.index>c.value.index:a.value>b.value}function Ge(n){const{readonly:d,range:u,multiple:p,onChange:g,"onUpdate:modelValue":R}=e;if(n<0||d)return;oe.value=Ie("day",n);const j=`${b.value}-${c.value.index}-${n}`,z=s(j).format("YYYY-MM-DD");u?Ne(z,"day"):p?Re(z,"day"):(Z(R,z),Z(g,z))}function Je(n){const{type:d,readonly:u,range:p,multiple:g,onChange:R,onPreview:j,"onUpdate:modelValue":z}=e;if(oe.value=Ie("month",n),d==="month"&&!u){const ae=`${b.value}-${n.index}`;p?Ne(ae,"month"):g?Re(ae,"month"):(Z(z,ae),Z(R,ae))}else c.value=n,Z(j,D(b.value),D(c.value.index));r.value=!1}function Ze(n){b.value=`${n}`,f.value=!1,r.value=!0,Z(e.onPreview,D(b.value),D(c.value.index))}function xe(n,d){const u=d==="prev"?-1:1;if(n==="year")b.value=`${D(b.value)+u}`;else{let p=D(c.value.index)+u;p<1&&(b.value=`${D(b.value)-1}`,p=12),p>12&&(b.value=`${D(b.value)+1}`,p=1),c.value=Me.find(g=>D(g.index)===p)}Z(e.onPreview,D(b.value),D(c.value.index))}function _e(){return(e.multiple||e.range)&&!me(e.modelValue)?(console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'),!1):!e.multiple&&!e.range&&me(e.modelValue)?(console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'),!1):!0}function Oe(n){return me(n)?!1:n==="Invalid Date"?(console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'),!0):!1}function en(n,d){const u=d==="month"?G:m,p=d==="month"?"YYYY-MM":"YYYY-MM-D",g=n.map(z=>s(z).format(p)).slice(0,2);if(u.value.some(z=>Oe(z)))return;u.value=g;const j=s(u.value[0]).isAfter(u.value[1]);u.value.length===2&&j&&(u.value=[u.value[1],u.value[0]])}function nn(n,d){const u=d==="month"?te:x,p=d==="month"?"YYYY-MM":"YYYY-MM-D",g=Array.from(new Set(n.map(R=>s(R).format(p))));u.value=g.filter(R=>R!=="Invalid Date")}function tn(n){const d=s(n).format("YYYY-MM-D");if(Oe(d))return;const[u,p,g]=d.split("-"),R=Me.find(j=>j.index===p);t.value=R,a.value=u,v.value=g,c.value=R,b.value=u}function Ue(){ce=0,J=0,ke="",_=void 0}return{monthPanelEl:y,dayPanelEl:I,reverse:oe,currentDate:l,chooseMonth:t,chooseYear:a,chooseDay:v,previewYear:b,isYearPanel:f,isMonthPanel:r,getMonthTitle:o,getDateTitle:h,getPanelType:C,getChoose:F,getPreview:W,componentProps:q,slotProps:P,formatRange:U,pack:Q,n:Rn,classes:In,clickEl:Se,handleTouchstart:De,handleTouchmove:we,handleTouchend:Qe,getChooseDay:Ge,getChooseMonth:Je,getChooseYear:Ze,checkPreview:xe,formatElevation:cn}}});function Ln(e,l,O,V,B,f){const r=ne("year-picker-panel"),i=ne("month-picker-panel"),t=ne("day-picker-panel");return Y(),S("div",{class:A(e.classes(e.n(),e.formatElevation(e.elevation,2)))},[H("div",{class:A(e.n("title")),style:He({background:e.titleColor||e.headerColor||e.color})},[H("div",{class:A(e.n("title-select"))},[H("div",{class:A(e.n("title-hint"))},w(e.hint??e.pack.datePickerHint),3),H("div",{class:A(e.classes(e.n("title-year"),[e.isYearPanel,e.n("title-year--active")])),onClick:l[0]||(l[0]=a=>e.clickEl("year"))},[re(e.$slots,"year",{year:e.chooseYear},()=>[L(w(e.chooseYear),1)])],2)],2),H("div",{class:A(e.classes(e.n("title-date"),[!e.isYearPanel,e.n("title-date--active")],[e.range,e.n("title-date--range")])),onClick:l[1]||(l[1]=a=>e.clickEl("date"))},[$(he,{name:e.multiple?"":`${e.n()}${e.reverse?"-reverse":""}-translatey`},{default:E(()=>{var a,v,c;return[e.type==="month"?(Y(),S("div",{key:`${e.chooseYear}${(a=e.chooseMonth)==null?void 0:a.index}`},[e.range?re(e.$slots,"range",{key:0,choose:e.getChoose.chooseRangeMonth},()=>[L(w(e.getMonthTitle),1)]):e.multiple?re(e.$slots,"multiple",{key:1,choose:e.getChoose.chooseMonths},()=>[L(w(e.getMonthTitle),1)]):re(e.$slots,"month",{key:2,month:(v=e.chooseMonth)==null?void 0:v.index,year:e.chooseYear},()=>[L(w(e.getMonthTitle),1)])])):(Y(),S("div",{key:`${e.chooseYear}${(c=e.chooseMonth)==null?void 0:c.index}${e.chooseDay}`},[e.range?re(e.$slots,"range",{key:0,choose:e.formatRange},()=>[L(w(e.getDateTitle),1)]):e.multiple?re(e.$slots,"multiple",{key:1,choose:e.getChoose.chooseDays},()=>[L(w(e.getDateTitle),1)]):re(e.$slots,"date",rn(Ee({key:2},e.slotProps)),()=>[L(w(e.getDateTitle),1)])]))]}),_:3},8,["name"])],2)],6),H("div",{class:A(e.n("body")),onTouchstart:l[2]||(l[2]=(...a)=>e.handleTouchstart&&e.handleTouchstart(...a)),onTouchmove:l[3]||(l[3]=(...a)=>e.handleTouchmove&&e.handleTouchmove(...a)),onTouchend:l[4]||(l[4]=(...a)=>e.handleTouchend&&e.handleTouchend(...a))},[$(he,{name:`${e.n()}-panel-fade`},{default:E(()=>[e.getPanelType==="year"?(Y(),Be(r,{key:0,"component-props":e.componentProps,preview:e.previewYear,onChooseYear:e.getChooseYear},null,8,["component-props","preview","onChooseYear"])):e.getPanelType==="month"?(Y(),Be(i,{key:1,ref:"monthPanelEl",current:e.currentDate,choose:e.getChoose,preview:e.getPreview,"click-year":()=>e.clickEl("year"),"component-props":e.componentProps,onChooseMonth:e.getChooseMonth,onCheckPreview:e.checkPreview},null,8,["current","choose","preview","click-year","component-props","onChooseMonth","onCheckPreview"])):e.getPanelType==="date"?(Y(),Be(t,{key:2,ref:"dayPanelEl",current:e.currentDate,choose:e.getChoose,preview:e.getPreview,"component-props":e.componentProps,"click-month":()=>e.clickEl("month"),onChooseDay:e.getChooseDay,onCheckPreview:e.checkPreview},null,8,["current","choose","preview","component-props","click-month","onChooseDay","onCheckPreview"])):ln("",!0)]),_:1},8,["name"])],34)],2)}const le=ge(Un,[["render",Ln]]);dn(le);const qn={basicUsage:"基本使用",monthPicker:"月份选择器",multiple:"多选",range:"选择范围",dateLimit:"日期限制",custom:"自定义",year:"年",month:"月",divider:"年"},Wn={basicUsage:"Basic Usage",monthPicker:"Month Picker",multiple:"Multiple",range:"Range",dateLimit:"Date Limit",custom:"Custom",year:"",month:"",divider:"-"},{add:Xe,use:jn,pack:ee,packs:lt,merge:st}=vn(),zn=e=>{pn(e),jn(e)};Fe("zh-CN",fn);Fe("en-US",hn);Xe("zh-CN",qn);Xe("en-US",Wn);const it={__name:"index",setup(e){const l=Ve({date:"2021-04",date1:"2021-04-08",date2:["",""],date3:["2021-02-01","2021-02-15"],date4:"2020-11-11",date5:"2021-05"}),O=r=>parseInt(r.split("-")[1],10)%2===1,V=r=>parseInt(r.split("-")[2],10)%2===1;function B(r){console.log(r)}function f(r,i){console.log(r,i)}return sn(zn),un(yn),(r,i)=>(Y(),S(pe,null,[$(M(ie),null,{default:E(()=>[L(w(M(ee).basicUsage),1)]),_:1}),$(M(le),{modelValue:l.date1,"onUpdate:modelValue":i[0]||(i[0]=t=>l.date1=t)},null,8,["modelValue"]),$(M(ie),null,{default:E(()=>[L(w(M(ee).monthPicker),1)]),_:1}),$(M(le),{type:"month",modelValue:l.date,"onUpdate:modelValue":i[1]||(i[1]=t=>l.date=t),elevation:""},null,8,["modelValue"]),$(M(ie),null,{default:E(()=>[L(w(M(ee).multiple),1)]),_:1}),$(M(le),{type:"date",modelValue:l.date2,"onUpdate:modelValue":i[2]||(i[2]=t=>l.date2=t),multiple:""},null,8,["modelValue"]),$(M(ie),null,{default:E(()=>[L(w(M(ee).range),1)]),_:1}),$(M(le),{type:"date",modelValue:l.date3,"onUpdate:modelValue":i[3]||(i[3]=t=>l.date3=t),range:""},null,8,["modelValue"]),$(M(ie),null,{default:E(()=>[L(w(M(ee).dateLimit),1)]),_:1}),$(M(le),{type:"date",modelValue:l.date4,"onUpdate:modelValue":i[4]||(i[4]=t=>l.date4=t),min:"2020-10-15",max:"2021-01-15","allowed-dates":V},null,8,["modelValue"]),$(M(ie),null,{default:E(()=>[L(w(M(ee).custom),1)]),_:1}),$(M(le),{type:"month","allowed-dates":O,modelValue:l.date5,"onUpdate:modelValue":i[5]||(i[5]=t=>l.date5=t),max:"2022-01",min:"2016-07",elevation:"","header-color":"purple",color:"#7bb872","first-day-of-week":"1",onPreview:f,onChange:B},{year:E(({year:t})=>[H("span",null,w(t)+w(M(ee).year),1)]),month:E(({year:t,month:a})=>[H("span",null,w(t)+w(M(ee).divider)+w(a)+w(M(ee).month),1)]),_:1},8,["modelValue"])],64))}};export{it as default};
