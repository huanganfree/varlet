import{r as f,b as h,aB as p,ax as d,z as u,C as m}from"./vue-router-547718df.js";function C(e){const i=[],o=n=>{if(n!=null&&n.component){o(n==null?void 0:n.component.subTree);return}Array.isArray(n==null?void 0:n.children)&&n.children.forEach(s=>{m(s)&&(i.push(s),o(s))})};return o(e),i}function x(e){const i=u(),o=f([]),n=[],s=h(()=>o.length),r=()=>{const t=C(i.subTree);o.sort((c,v)=>t.indexOf(c.vnode)-t.indexOf(v.vnode))},a=(t,c)=>{o.push(t),n.push(c),r()},l=(t,c)=>{d(o,t),d(n,c)};return{length:s,childProviders:n,bindChildren:t=>{p(e,Object.assign({childInstances:o,collect:a,clear:l},t))}}}export{x as u};
