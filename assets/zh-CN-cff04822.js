import{_ as o,p as c,f as r,h as p,M as s,q as l,S as n,P as a}from"./vue-router-547718df.js";const h={components:{}},i={class:"varlet-site-doc"},d=s("h1",null,"暗黑模式",-1),_={class:"card"},u={id:"介绍"},j=s("p",null,"组件库第一方提供了暗黑模式的主题，暗黑模式的优势在于在弱光环境下具有更高的可读性。",-1),m={class:"card"},g={id:"切换主题"},v=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"setup"),a(">")]),s("span",{class:"javascript"},[a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { StyleProvider, Themes } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/ui'"),a(`

`),s("span",{class:"hljs-keyword"},"let"),a(" currentTheme = "),s("span",{class:"hljs-literal"},"null"),a(`

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title"},"toggleTheme"),a("("),s("span",{class:"hljs-params"}),a(") ")]),a(`{
  currentTheme = currentTheme ? `),s("span",{class:"hljs-literal"},"null"),a(` : Themes.dark
  StyleProvider(currentTheme)
}
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-button"),a(),s("span",{class:"hljs-attr"},"block"),a(" @"),s("span",{class:"hljs-attr"},"click"),a("="),s("span",{class:"hljs-string"},'"toggleTheme"'),a(">")]),a("切换主题"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-button"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),b=s("p",null,[a("注入组件库推荐的 "),s("code",null,"文字颜色"),a(" 和 "),s("code",null,"背景颜色"),a(" 变量来控制整体颜色。")],-1),f=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-selector-tag"},"body"),a(` {
  `),s("span",{class:"hljs-attribute"},"transition"),a(": background-color ."),s("span",{class:"hljs-number"},"25s"),a(", color ."),s("span",{class:"hljs-number"},"25s"),a(`;
  `),s("span",{class:"hljs-attribute"},"color"),a(": "),s("span",{class:"hljs-built_in"},"var"),a(`(--color-text);
  `),s("span",{class:"hljs-attribute"},"background-color"),a(": "),s("span",{class:"hljs-built_in"},"var"),a(`(--color-body);
}
`)])],-1);function k(y,T,x,w,N,$){const e=c("router-link"),t=c("var-site-code-example");return r(),p("div",i,[d,s("div",_,[s("h3",u,[l(e,{to:"#介绍"},{default:n(()=>[a("#")]),_:1}),a("介绍")]),j]),s("div",m,[s("h3",g,[l(e,{to:"#切换主题"},{default:n(()=>[a("#")]),_:1}),a("切换主题")]),l(t,{"playground-ignore":""},{default:n(()=>[v]),_:1}),b,l(t,{"playground-ignore":""},{default:n(()=>[f]),_:1})])])}const C=o(h,[["render",k]]);export{C as default};
