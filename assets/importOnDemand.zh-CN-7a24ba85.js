import{_ as c,p as o,f as p,h as r,M as s,q as a,S as l,P as n}from"./vue-router-547718df.js";const i={components:{}},h={class:"varlet-site-doc"},u=s("h1",null,"按需引入",-1),d={class:"card"},j={id:"介绍"},m=s("p",null,"按需引入避免了组件的全量导入，可以有效的减少发布包的大小。",-1),_={class:"card"},g={id:"自动引入"},v=s("p",null,[n("通过插件 "),s("a",{href:"https://github.com/antfu/unplugin-vue-components"},"unplugin-vue-components"),n(" 和 "),s("a",{href:"https://github.com/antfu/unplugin-auto-import"},"unplugin-auto-import"),n(" 实现组件自动按需导入，这也是我们最推荐的方式。")],-1),y=s("h4",null,"安装插件",-1),k=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," npm"),n(`
npm i unplugin-vue-components unplugin-auto-import -D
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," yarn"),n(`
yarn add unplugin-vue-components unplugin-auto-import -D
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," pnpm"),n(`
pnpm add unplugin-vue-components unplugin-auto-import -D
`)])],-1),f=s("h4",null,"Vite",-1),w=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// vite.config.js"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" vue "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'@vitejs/plugin-vue'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" components "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'unplugin-vue-components/vite'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" autoImport "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'unplugin-auto-import/vite'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" { VarletUIResolver } "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'unplugin-vue-components/resolvers'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" { defineConfig } "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'vite'"),n(`

`),s("span",{class:"hljs-keyword"},"export"),n(),s("span",{class:"hljs-keyword"},"default"),n(` defineConfig({
  `),s("span",{class:"hljs-attr"},"plugins"),n(`: [
    vue(),
    components({
      `),s("span",{class:"hljs-attr"},"resolvers"),n(`: [VarletUIResolver()]
    }),
    autoImport({
      `),s("span",{class:"hljs-attr"},"resolvers"),n(": [VarletUIResolver({ "),s("span",{class:"hljs-attr"},"autoImport"),n(": "),s("span",{class:"hljs-literal"},"true"),n(` })]
    })
  ]
})
`)])],-1),b=s("h4",null,"Vue CLI",-1),I=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// vue.config.js"),n(`
`),s("span",{class:"hljs-keyword"},"const"),n(" Components = "),s("span",{class:"hljs-built_in"},"require"),n("("),s("span",{class:"hljs-string"},"'unplugin-vue-components/webpack'"),n(`)
`),s("span",{class:"hljs-keyword"},"const"),n(" AutoImport = "),s("span",{class:"hljs-built_in"},"require"),n("("),s("span",{class:"hljs-string"},"'unplugin-auto-import/webpack'"),n(`)
`),s("span",{class:"hljs-keyword"},"const"),n(" { VarletUIResolver } = "),s("span",{class:"hljs-built_in"},"require"),n("("),s("span",{class:"hljs-string"},"'unplugin-vue-components/resolvers'"),n(`)

`),s("span",{class:"hljs-built_in"},"module"),n(`.exports = {
  `),s("span",{class:"hljs-attr"},"configureWebpack"),n(`: {
    `),s("span",{class:"hljs-attr"},"plugins"),n(`: [
      Components({
        `),s("span",{class:"hljs-attr"},"resolvers"),n(`: [VarletUIResolver()]
      }),
      AutoImport({
        `),s("span",{class:"hljs-attr"},"resolvers"),n(": [VarletUIResolver({ "),s("span",{class:"hljs-attr"},"autoImport"),n(": "),s("span",{class:"hljs-literal"},"true"),n(` })]
      })
    ]
  }
}
`)])],-1),V=s("h4",null,"Typescript 配置注意",-1),x=s("p",null,[n("为了得到良好的 IDE 语法高亮，请确保上述两个插件生成的类型声明文件被 "),s("code",null,"typescript"),n(" 识别，可在 "),s("code",null,"tsconfig.json"),n(" 中进行如下配置:")],-1),C=s("pre",{class:"hljs"},[s("code",null,[n(`{
  `),s("span",{class:"hljs-attr"},'"include"'),n(": ["),s("span",{class:"hljs-string"},'"auto-imports.d.ts"'),n(", "),s("span",{class:"hljs-string"},'"components.d.ts"'),n(`]
}
`)])],-1),B={class:"card"},R={id:"手动引入"},U=s("p",null,[n("每一个组件都是一个 "),s("code",null,"Vue插件"),n("，并由 "),s("code",null,"组件逻辑"),n(" 和 "),s("code",null,"样式文件"),n(" 组成，手动引入的使用方式如下。")],-1),D=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),n(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'vue'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" { Button } "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'@varlet/ui'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(),s("span",{class:"hljs-string"},"'@varlet/ui/es/button/style/index'"),n(`

createApp().use(Button)
`)])],-1),q=s("p",null,"或",-1),A=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[n("<"),s("span",{class:"hljs-name"},"script"),n(),s("span",{class:"hljs-attr"},"setup"),n(">")]),s("span",{class:"javascript"},[n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" { Button "),s("span",{class:"hljs-keyword"},"as"),n(" VarButton } "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'@varlet/ui'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(),s("span",{class:"hljs-string"},"'@varlet/ui/es/button/style/index'"),n(`
`)]),s("span",{class:"hljs-tag"},[n("</"),s("span",{class:"hljs-name"},"script"),n(">")]),n(`

`),s("span",{class:"hljs-tag"},[n("<"),s("span",{class:"hljs-name"},"template"),n(">")]),n(`
  `),s("span",{class:"hljs-tag"},[n("<"),s("span",{class:"hljs-name"},"var-button"),n(">")]),n("说你好"),s("span",{class:"hljs-tag"},[n("</"),s("span",{class:"hljs-name"},"var-button"),n(">")]),n(`
`),s("span",{class:"hljs-tag"},[n("</"),s("span",{class:"hljs-name"},"template"),n(">")]),n(`
`)])],-1),N={class:"card"},S={id:"手动引入和自动引入对比"},$=s("h4",null,"手动引入",-1),E=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[n("<"),s("span",{class:"hljs-name"},"script"),n(),s("span",{class:"hljs-attr"},"setup"),n(">")]),s("span",{class:"javascript"},[n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" { Button "),s("span",{class:"hljs-keyword"},"as"),n(" VarButton, Snackbar } "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'@varlet/ui'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(),s("span",{class:"hljs-string"},"'@varlet/ui/es/button/style/index'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(),s("span",{class:"hljs-string"},"'@varlet/ui/es/snackbar/style/index'"),n(`

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),n(),s("span",{class:"hljs-title"},"handleClick"),n("("),s("span",{class:"hljs-params"}),n(") ")]),n(`{
  Snackbar(`),s("span",{class:"hljs-string"},"'你好!'"),n(`)
}
`)]),s("span",{class:"hljs-tag"},[n("</"),s("span",{class:"hljs-name"},"script"),n(">")]),n(`

`),s("span",{class:"hljs-tag"},[n("<"),s("span",{class:"hljs-name"},"template"),n(">")]),n(`
  `),s("span",{class:"hljs-tag"},[n("<"),s("span",{class:"hljs-name"},"var-button"),n(" @"),s("span",{class:"hljs-attr"},"click"),n("="),s("span",{class:"hljs-string"},'"handleClick"'),n(">")]),n("说你好"),s("span",{class:"hljs-tag"},[n("</"),s("span",{class:"hljs-name"},"var-button"),n(">")]),n(`
`),s("span",{class:"hljs-tag"},[n("</"),s("span",{class:"hljs-name"},"template"),n(">")]),n(`
`)])],-1),T=s("h4",null,"自动引入",-1),z=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[n("<"),s("span",{class:"hljs-name"},"script"),n(),s("span",{class:"hljs-attr"},"setup"),n(">")]),s("span",{class:"javascript"},[n(`
`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),n(),s("span",{class:"hljs-title"},"handleClick"),n("("),s("span",{class:"hljs-params"}),n(") ")]),n(`{
  Snackbar(`),s("span",{class:"hljs-string"},"'你好!'"),n(`)
}
`)]),s("span",{class:"hljs-tag"},[n("</"),s("span",{class:"hljs-name"},"script"),n(">")]),n(`

`),s("span",{class:"hljs-tag"},[n("<"),s("span",{class:"hljs-name"},"template"),n(">")]),n(`
  `),s("span",{class:"hljs-tag"},[n("<"),s("span",{class:"hljs-name"},"var-button"),n(" @"),s("span",{class:"hljs-attr"},"click"),n("="),s("span",{class:"hljs-string"},'"handleClick"'),n(">")]),n("说你好"),s("span",{class:"hljs-tag"},[n("</"),s("span",{class:"hljs-name"},"var-button"),n(">")]),n(`
`),s("span",{class:"hljs-tag"},[n("</"),s("span",{class:"hljs-name"},"template"),n(">")]),n(`
`)])],-1),L={class:"card"},M={id:"文件路径注意"},O=s("p",null,[n("在 "),s("code",null,"@varlet/ui@2.7.0"),n(" 及其之后的版本，我们推荐使用如下省略后缀名的文件引入方式，以兼容 "),s("code",null,"js"),n(" 和 "),s("code",null,"mjs")],-1),P=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),n(),s("span",{class:"hljs-string"},"'@varlet/ui/es/style'"),n(`
`)])],-1);function W(F,G,H,J,K,Q){const e=o("router-link"),t=o("var-site-code-example");return p(),r("div",h,[u,s("div",d,[s("h3",j,[a(e,{to:"#介绍"},{default:l(()=>[n("#")]),_:1}),n("介绍")]),m]),s("div",_,[s("h3",g,[a(e,{to:"#自动引入"},{default:l(()=>[n("#")]),_:1}),n("自动引入")]),v,y,a(t,{"playground-ignore":""},{default:l(()=>[k]),_:1}),f,a(t,{"playground-ignore":""},{default:l(()=>[w]),_:1}),b,a(t,{"playground-ignore":""},{default:l(()=>[I]),_:1}),V,x,a(t,{"playground-ignore":""},{default:l(()=>[C]),_:1})]),s("div",B,[s("h3",R,[a(e,{to:"#手动引入"},{default:l(()=>[n("#")]),_:1}),n("手动引入")]),U,a(t,{"playground-ignore":""},{default:l(()=>[D]),_:1}),q,a(t,{"playground-ignore":""},{default:l(()=>[A]),_:1})]),s("div",N,[s("h3",S,[a(e,{to:"#手动引入和自动引入对比"},{default:l(()=>[n("#")]),_:1}),n("手动引入和自动引入对比")]),$,a(t,{"playground-ignore":""},{default:l(()=>[E]),_:1}),T,a(t,{"playground-ignore":""},{default:l(()=>[z]),_:1})]),s("div",L,[s("h3",M,[a(e,{to:"#文件路径注意"},{default:l(()=>[n("#")]),_:1}),n("文件路径注意")]),O,a(t,{"playground-ignore":""},{default:l(()=>[P]),_:1})])])}const Y=c(i,[["render",W]]);export{Y as default};
