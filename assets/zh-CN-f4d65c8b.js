import{_ as o,b as c,e as r,m as p,p as a,q as t,w as l,Q as s,Z as d}from"./index-ba2bae36.js";const h={components:{}},i={class:"varlet-site-doc"},j=a("h1",null,"文件上传",-1),u={class:"card"},g={id:"jie4shao4"},m=a("p",null,[s("提供了文件读取、图片/视频预览能力。 通过监听 "),a("code",null,"after-read"),s(" 事件获取文件上传服务器。")],-1),f={class:"card"},_={id:"ji1ben3shi3yong4"},v=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` files = ref([])

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"handleAfterRead"),s("("),a("span",{class:"hljs-params"},"file"),s(") ")]),s(`{ 
  `),a("span",{class:"hljs-built_in"},"console"),s(`.log(file)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-uploader"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"files"'),s(" @"),a("span",{class:"hljs-attr"},"after-read"),s("="),a("span",{class:"hljs-string"},'"handleAfterRead"'),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),y={class:"card"},b={id:"wen2jian4yu4lan3"},w=a("p",null,"通过分析文件的 url 后缀名判断文件类型，支持图片和视频预览。",-1),k=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` files = ref([
  {
    `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),a("span",{class:"hljs-attr"},"cover"),s(": "),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`
  },
  {
    `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"'https://www.runoob.com/try/demo_source/mov_bbb.mp4'"),s(`,
    `),a("span",{class:"hljs-attr"},"cover"),s(": "),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cover.jpg'"),s(`
  }
])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-uploader"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"files"'),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),x={class:"card"},z={id:"zi4ding4yi4yu4lan3"},F=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Dialog } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` files = ref([
  {
    `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),a("span",{class:"hljs-attr"},"cover"),s(": "),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`
  }
])

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"handlePreview"),s("("),a("span",{class:"hljs-params"},"file"),s(") ")]),s(`{
  Dialog({
    `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'自定义预览'"),s(`,
    `),a("span",{class:"hljs-attr"},"message"),s(": file.url.slice("),a("span",{class:"hljs-number"},"0"),s(", "),a("span",{class:"hljs-number"},"100"),s(`)
  })
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-uploader"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"files"'),s(),a("span",{class:"hljs-attr"},"prevent-default-preview"),s(" @"),a("span",{class:"hljs-attr"},"preview"),s("="),a("span",{class:"hljs-string"},'"handlePreview"'),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),V={class:"card"},R={id:"shang4chuan2zhuang4tai4"},B=a("p",null,[s("提供了 "),a("code",null,"loading"),s("、 "),a("code",null,"success"),s("、 "),a("code",null,"error"),s(" 三种上传状态，并提供了工具函数快速获取对应状态的文件。")],-1),S=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` files = ref([
  {
    `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),a("span",{class:"hljs-attr"},"cover"),s(": "),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),a("span",{class:"hljs-attr"},"state"),s(": "),a("span",{class:"hljs-string"},"'loading'"),s(`
  },
  {
    `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),a("span",{class:"hljs-attr"},"cover"),s(": "),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),a("span",{class:"hljs-attr"},"state"),s(": "),a("span",{class:"hljs-string"},"'success'"),s(`
  },
  {
    `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),a("span",{class:"hljs-attr"},"cover"),s(": "),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),a("span",{class:"hljs-attr"},"state"),s(": "),a("span",{class:"hljs-string"},"'error'"),s(`
  }
])

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"handleAfterRead"),s("("),a("span",{class:"hljs-params"},"file"),s(") ")]),s(`{
  file.state = `),a("span",{class:"hljs-string"},"'loading'"),s(`

  `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
    file.state = `),a("span",{class:"hljs-string"},"'success'"),s(`
  }, `),a("span",{class:"hljs-number"},"1000"),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-uploader"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"files"'),s(" @"),a("span",{class:"hljs-attr"},"after-read"),s("="),a("span",{class:"hljs-string"},'"handleAfterRead"'),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),A={class:"card"},U={id:"shi3yong4jin4du4tiao2"},C=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref, onUnmounted } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` files = ref([])
`),a("span",{class:"hljs-keyword"},"let"),s(` timer

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"handleAfterRead"),s("("),a("span",{class:"hljs-params"},"file"),s(") ")]),s(`{
  file.state = `),a("span",{class:"hljs-string"},"'loading'"),s(`

  timer = `),a("span",{class:"hljs-built_in"},"window"),s(".setInterval("),a("span",{class:"hljs-function"},"() =>"),s(` {
    `),a("span",{class:"hljs-keyword"},"if"),s(" (file.progress === "),a("span",{class:"hljs-number"},"100"),s(`) {
      `),a("span",{class:"hljs-built_in"},"window"),s(`.clearInterval(timer)
      file.state = `),a("span",{class:"hljs-string"},"'success'"),s(`
      `),a("span",{class:"hljs-keyword"},"return"),s(`
    }

    file.progress += `),a("span",{class:"hljs-number"},"10"),s(`
  }, `),a("span",{class:"hljs-number"},"250"),s(`)
}

onUnmounted(`),a("span",{class:"hljs-function"},"() =>"),s(` {
  `),a("span",{class:"hljs-built_in"},"window"),s(`.clearInterval(timer)
})
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-uploader"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"files"'),s(" @"),a("span",{class:"hljs-attr"},"after-read"),s("="),a("span",{class:"hljs-string"},'"handleAfterRead"'),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),N={class:"card"},P={id:"wen2jian4shu4liang4xian4zhi4"},D=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` files = ref([])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-uploader"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"files"'),s(),a("span",{class:"hljs-attr"},":maxlength"),s("="),a("span",{class:"hljs-string"},'"1"'),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),E={class:"card"},I={id:"wen2jian4da4xiao3xian4zhi4"},L=a("p",null,[s("超过限制会被阻止读取，可以通过监听 "),a("code",null,"oversize"),s(" 事件获取文件。")],-1),$=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` files = ref([])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-uploader"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"files"'),s(),a("span",{class:"hljs-attr"},":maxsize"),s("="),a("span",{class:"hljs-string"},'"1024"'),s(" @"),a("span",{class:"hljs-attr"},"oversize"),s("="),a("span",{class:"hljs-string"},`"Snackbar.warning('文件大小超出限制')"`),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),q={class:"card"},T={id:"wen2jian4lie4biao3guo4lü4"},M=a("p",null,[s("通过 "),a("code",null,"before-filter"),s(" 事件对文件进行过滤，返回一个被过滤之后的 "),a("code",null,"VarFile"),s(" 数组。")],-1),Q=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` files = ref([])

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"handleBeforeFilter"),s("("),a("span",{class:"hljs-params"},"files"),s(") ")]),s(`{
  `),a("span",{class:"hljs-keyword"},"return"),s(" files.filter("),a("span",{class:"hljs-function"},[a("span",{class:"hljs-params"},"file"),s(" =>")]),s(" file.name.endsWith("),a("span",{class:"hljs-string"},"'png'"),s(`))
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-uploader"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"files"'),s(),a("span",{class:"hljs-attr"},"multiple"),s(" @"),a("span",{class:"hljs-attr"},"before-filter"),s("="),a("span",{class:"hljs-string"},'"handleBeforeFilter"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`)])],-1),W={class:"card"},Z={id:"shang4chuan2yu4chu3li3"},G=a("p",null,[s("通过注册 "),a("code",null,"before-read"),s(" 事件对文件进行操作，返回假值阻止文件读取。")],-1),H=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` files = ref([])

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"handleBeforeRead"),s("("),a("span",{class:"hljs-params"},"file"),s(") ")]),s(`{
  `),a("span",{class:"hljs-keyword"},"if"),s(" (file.file.size <= "),a("span",{class:"hljs-number"},"1"),s(" * "),a("span",{class:"hljs-number"},"1024"),s(" * "),a("span",{class:"hljs-number"},"1024"),s(`) {
    Snackbar.success(`),a("span",{class:"hljs-string"},"'文件小于1M，上传成功'"),s(`)
    `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-literal"},"true"),s(`
  } `),a("span",{class:"hljs-keyword"},"else"),s(` {
    Snackbar.warning(`),a("span",{class:"hljs-string"},"'文件大于1M，不能上传'"),s(`)
    `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-literal"},"false"),s(`
  }
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-uploader"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"files"'),s(" @"),a("span",{class:"hljs-attr"},"before-read"),s("="),a("span",{class:"hljs-string"},'"handleBeforeRead"'),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),J={class:"card"},K={id:"jin4yong4"},O=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` files = ref([])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-uploader"),s(),a("span",{class:"hljs-attr"},"disabled"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"files"'),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),X={class:"card"},Y={id:"zhi1du2"},ss=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` files = ref([])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-uploader"),s(),a("span",{class:"hljs-attr"},"readonly"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"files"'),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),as={class:"card"},ts={id:"shan1chu2qian2chu3li3"},ls=a("p",null,[s("删除文件之前会触发 "),a("code",null,"before-remove"),s(" 事件，返回假值阻止删除操作。")],-1),es=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Dialog } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` files = ref([
  {
    `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),a("span",{class:"hljs-attr"},"cover"),s(": "),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`
  }
])

`),a("span",{class:"hljs-keyword"},"async"),s(),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"handleBeforeRemove"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),a("span",{class:"hljs-keyword"},"const"),s(" action = "),a("span",{class:"hljs-keyword"},"await"),s(` Dialog({
    `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'是否删除?'"),s(`,
    `),a("span",{class:"hljs-attr"},"message"),s(": "),a("span",{class:"hljs-string"},"'删除后无法撤回'"),s(`
  })

  `),a("span",{class:"hljs-keyword"},"return"),s(" action === "),a("span",{class:"hljs-string"},"'confirm'"),s(`
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-uploader"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"files"'),s(" @"),a("span",{class:"hljs-attr"},"before-remove"),s("="),a("span",{class:"hljs-string"},'"handleBeforeRemove"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),ns={class:"card"},ds={id:"zi4ding4yi4shang4chuan2yang4shi4"},cs=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` files = ref()
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-uploader"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"files"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("上传"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-uploader"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),os={class:"card"},rs={id:"zi4duan4jiao4yan4"},ps=a("p",null,[s("通过传入一个校验器数组可以对值进行校验，校验器返回 "),a("code",null,"true"),s(" 则为校验通过。 以外的值将转换为文本作为用户提示。 第二个参数是一个工具函数集合，可以快速获取符合状态的文件集合。")],-1),hs=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` files = ref([
  {
    `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),a("span",{class:"hljs-attr"},"cover"),s(": "),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),a("span",{class:"hljs-attr"},"state"),s(": "),a("span",{class:"hljs-string"},"'error'"),s(`,
  },
])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-uploader"),s(`
    `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[(v, u) => u.getError().length === 0 || '存在上传失败的文件']"`),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"files"'),s(`
  />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),is={class:"card"},js={id:"zi4ding4yi4xuan4ran3"},us=a("p",null,[s("通过 "),a("code",null,"hide-list"),s(" 隐藏组件的文件列表，自定义文件列表的渲染逻辑。")],-1),gs=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` files = ref([
  {
    `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),a("span",{class:"hljs-attr"},"cover"),s(": "),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),a("span",{class:"hljs-attr"},"state"),s(": "),a("span",{class:"hljs-string"},"'loading'"),s(`,
  },
  {
    `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),a("span",{class:"hljs-attr"},"cover"),s(": "),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),a("span",{class:"hljs-attr"},"state"),s(": "),a("span",{class:"hljs-string"},"'success'"),s(`,
  },
  {
    `),a("span",{class:"hljs-attr"},"url"),s(": "),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),a("span",{class:"hljs-attr"},"cover"),s(": "),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
    `),a("span",{class:"hljs-attr"},"state"),s(": "),a("span",{class:"hljs-string"},"'error'"),s(`,
  },
])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(`
      `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"uploader-example-file"'),s(`
      `),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"f in files"'),s(`
      `),a("span",{class:"hljs-attr"},":key"),s("="),a("span",{class:"hljs-string"},'"f.id"'),s(`
      `),a("span",{class:"hljs-attr"},":src"),s("="),a("span",{class:"hljs-string"},'"f.cover"'),s(`
    />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-uploader"),s(),a("span",{class:"hljs-attr"},"hide-list"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"files"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"round"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"28"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"upload"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-uploader"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".uploader-example-file"),s(` {
  `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"40px"),s(`;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"40px"),s(`;
  `),a("span",{class:"hljs-attribute"},"border-radius"),s(": "),a("span",{class:"hljs-number"},"50%"),s(`;
  `),a("span",{class:"hljs-attribute"},"font-size"),s(": "),a("span",{class:"hljs-number"},"12px"),s(`;
  `),a("span",{class:"hljs-attribute"},"object-fit"),s(`: cover;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),ms=a("h2",null,"API",-1),fs={class:"card"},_s={id:"shu3xing4"},vs=d("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>文件列表</td><td><em>VarFile[]</em></td><td><code>[]</code></td></tr><tr><td><code>accept</code></td><td>接受的文件类型，与原生属性一致</td><td><em>string</em></td><td><code>image/*</code></td></tr><tr><td><code>capture</code></td><td>获取文件方式，与原生属性一致</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>multiple</code></td><td>是否多选文件</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>readonly</code></td><td>是否只读</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>elevation</code></td><td>海拔高度，可选值为 <code>true</code> <code>false</code> 和 <code>0-24</code> 的等级, 不为简单模式时生效</td><td><em>string | number | boolean</em></td><td><code>true</code></td></tr><tr><td><code>removable</code></td><td>是否可以删除</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>maxlength</code></td><td>最大文件个数</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>maxsize</code></td><td>最大文件大小</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>previewed</code></td><td>是否允许预览</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>prevent-default-preview</code></td><td>阻止默认预览行为</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>ripple</code></td><td>是否开启水波纹</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>hide-list</code></td><td>是否隐藏文件列表</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>resolve-type</code></td><td>文件预处理类型，可选值为 <code>default</code> <code>file</code> <code>data-url</code>（<code>default</code>，图片文件包含 dataURL 编码和 File 对象，其他类型仅包含 File 对象。<code>file</code>，仅包含 File 对象。<code>data-url</code>，所有文件类型都包含 dataURL 编码和 File 对象）</td><td><em>string</em></td><td><code>default</code></td></tr><tr><td><code>validate-trigger</code></td><td>触发验证的时机， 可选值为 <code>onChange</code> <code>onRemove</code></td><td><em>ValidateTriggers[]</em></td><td><code>[&#39;onChange&#39;, &#39;onRemove&#39;]</code></td></tr><tr><td><code>rules</code></td><td>验证规则，返回 <code>true</code> 表示验证通过，其余的值则转换为文本作为用户提示</td><td><em>Array&lt;(v: VarFile, u: VarFileUtils) =&gt; any&gt;</em></td><td><code>-</code></td></tr></tbody></table>",1),ys={class:"card"},bs={id:"VarFile"},ws=d("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>file</code></td><td>原生文件</td><td><em>File</em></td><td><code>-</code></td></tr><tr><td><code>name</code></td><td>文件名</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>url</code></td><td>文件地址</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cover</code></td><td>封面图</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>fit</code></td><td>封面图填充模式，可选值为 <code>fill</code> <code>contain</code> <code>cover</code> <code>none</code> <code>scale-down</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>state</code></td><td>文件上传状态，可选值为 <code>loading</code> <code>success</code> <code>error</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>progress</code></td><td>文件上传进度，范围 [0, 100]</td><td><em>number</em></td><td><code>-</code></td></tr></tbody></table>",1),ks={class:"card"},xs={id:"VarFileUtils"},zs=d("<table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>getLoading</code></td><td>获取 <code>state</code> 等于 <code>loading</code> 的文件集合</td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getSuccess</code></td><td>获取 <code>state</code> 等于 <code>success</code> 的文件集合</td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getError</code></td><td>获取 <code>state</code> 等于 <code>error</code> 的文件集合</td><td><code>-</code></td><td><code>VarFile[]</code></td></tr></tbody></table>",1),Fs={class:"card"},Vs={id:"fang1fa3"},Rs=d("<table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>chooseFile</code></td><td>触发选择文件动作，显示文件列表</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>closePreview</code></td><td>关闭预览文件弹出层</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>getLoading</code></td><td>获取 <code>state</code> 等于 <code>loading</code> 的文件集合</td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getSuccess</code></td><td>获取 <code>state</code> 等于 <code>success</code> 的文件集合</td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getError</code></td><td>获取 <code>state</code> 等于 <code>error</code> 的文件集合</td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>validate</code></td><td>触发校验</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>清空校验信息</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>清空绑定的值(设置为 <code>[]</code>)和校验信息</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>",1),Bs={class:"card"},Ss={id:"shi4jian4"},As=d("<table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>before-filter</code></td><td><code>before-read</code> 前触发，对文件列表进行过滤</td><td><code>files: VarFile[]</code></td></tr><tr><td><code>before-read</code></td><td>文件读取前触发，返回假值阻止文件读取(支持 promise)</td><td><code>file: VarFile</code></td></tr><tr><td><code>after-read</code></td><td>文件读取后触发</td><td><code>file: VarFile</code></td></tr><tr><td><code>oversize</code></td><td>文件超过限制大小时触发</td><td><code>file: VarFile</code></td></tr><tr><td><code>before-remove</code></td><td>文件删除前触发，返回假值阻止文件删除(支持 promise)</td><td><code>file: VarFile</code></td></tr><tr><td><code>remove</code></td><td>文件删除时触发</td><td><code>file: VarFile</code></td></tr><tr><td><code>preview</code></td><td>文件预览时触发</td><td><code>file: VarFile</code></td></tr></tbody></table>",1),Us={class:"card"},Cs={id:"cha1cao2"},Ns=d("<table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>上传按钮内容</td><td><code>-</code></td></tr><tr><td><code>extra-message</code></td><td>附加信息</td><td><code>-</code></td></tr></tbody></table>",1),Ps={class:"card"},Ds={id:"yang4shi4bian4liang4"},Es=d('<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--uploader-action-background</code></td><td><code>#f7f8fa</code></td></tr><tr><td><code>--uploader-action-icon-color</code></td><td><code>#888</code></td></tr><tr><td><code>--uploader-action-icon-size</code></td><td><code>24px</code></td></tr><tr><td><code>--uploader-action-margin</code></td><td><code>0 10px 10px 0</code></td></tr><tr><td><code>--uploader-file-size</code></td><td><code>80px</code></td></tr><tr><td><code>--uploader-file-margin</code></td><td><code>0 10px 10px 0</code></td></tr><tr><td><code>--uploader-file-name-background</code></td><td><code>#f7f8fa</code></td></tr><tr><td><code>--uploader-file-name-color</code></td><td><code>#888</code></td></tr><tr><td><code>--uploader-file-name-font-size</code></td><td><code>12px</code></td></tr><tr><td><code>--uploader-file-name-padding</code></td><td><code>10px</code></td></tr><tr><td><code>--uploader-file-text-align</code></td><td><code>center</code></td></tr><tr><td><code>--uploader-file-close-background</code></td><td><code>rgba(0, 0, 0, 0.3)</code></td></tr><tr><td><code>--uploader-file-close-size</code></td><td><code>24px</code></td></tr><tr><td><code>--uploader-file-close-icon-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--uploader-file-close-icon-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--uploader-file-cover-fit</code></td><td><code>cover</code></td></tr><tr><td><code>--uploader-file-cover-background</code></td><td><code>#f7f8fa</code></td></tr><tr><td><code>--uploader-preview-video-width</code></td><td><code>100vw</code></td></tr><tr><td><code>--uploader-preview-video-height</code></td><td><code>100vw</code></td></tr><tr><td><code>--uploader-file-indicator-height</code></td><td><code>4px</code></td></tr><tr><td><code>--uploader-file-indicator-normal-color</code></td><td><code>var(--color-disabled)</code></td></tr><tr><td><code>--uploader-file-indicator-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--uploader-file-indicator-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--uploader-file-progress-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--uploader-disabled-color</code></td><td><code>#ddd</code></td></tr><tr><td><code>--uploader-disabled-text-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--uploader-loading-background</code></td><td><code>linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.3), hsla(0, 0%, 100%, 0))</code></td></tr></tbody></table>',2);function Is(Ls,$s,qs,Ts,Ms,Qs){const e=c("router-link"),n=c("var-site-code-example");return r(),p("div",i,[j,a("div",u,[a("h3",g,[t(e,{to:"#jie4shao4"},{default:l(()=>[s("#")]),_:1}),s("介绍")]),m]),a("div",f,[a("h3",_,[t(e,{to:"#ji1ben3shi3yong4"},{default:l(()=>[s("#")]),_:1}),s("基本使用")]),t(n,null,{default:l(()=>[v]),_:1})]),a("div",y,[a("h3",b,[t(e,{to:"#wen2jian4yu4lan3"},{default:l(()=>[s("#")]),_:1}),s("文件预览")]),w,t(n,null,{default:l(()=>[k]),_:1})]),a("div",x,[a("h3",z,[t(e,{to:"#zi4ding4yi4yu4lan3"},{default:l(()=>[s("#")]),_:1}),s("自定义预览")]),t(n,null,{default:l(()=>[F]),_:1})]),a("div",V,[a("h3",R,[t(e,{to:"#shang4chuan2zhuang4tai4"},{default:l(()=>[s("#")]),_:1}),s("上传状态")]),B,t(n,null,{default:l(()=>[S]),_:1})]),a("div",A,[a("h3",U,[t(e,{to:"#shi3yong4jin4du4tiao2"},{default:l(()=>[s("#")]),_:1}),s("使用进度条")]),t(n,null,{default:l(()=>[C]),_:1})]),a("div",N,[a("h3",P,[t(e,{to:"#wen2jian4shu4liang4xian4zhi4"},{default:l(()=>[s("#")]),_:1}),s("文件数量限制")]),t(n,null,{default:l(()=>[D]),_:1})]),a("div",E,[a("h3",I,[t(e,{to:"#wen2jian4da4xiao3xian4zhi4"},{default:l(()=>[s("#")]),_:1}),s("文件大小限制")]),L,t(n,null,{default:l(()=>[$]),_:1})]),a("div",q,[a("h3",T,[t(e,{to:"#wen2jian4lie4biao3guo4lü4"},{default:l(()=>[s("#")]),_:1}),s("文件列表过滤")]),M,t(n,null,{default:l(()=>[Q]),_:1})]),a("div",W,[a("h3",Z,[t(e,{to:"#shang4chuan2yu4chu3li3"},{default:l(()=>[s("#")]),_:1}),s("上传预处理")]),G,t(n,null,{default:l(()=>[H]),_:1})]),a("div",J,[a("h3",K,[t(e,{to:"#jin4yong4"},{default:l(()=>[s("#")]),_:1}),s("禁用")]),t(n,null,{default:l(()=>[O]),_:1})]),a("div",X,[a("h3",Y,[t(e,{to:"#zhi1du2"},{default:l(()=>[s("#")]),_:1}),s("只读")]),t(n,null,{default:l(()=>[ss]),_:1})]),a("div",as,[a("h3",ts,[t(e,{to:"#shan1chu2qian2chu3li3"},{default:l(()=>[s("#")]),_:1}),s("删除前处理")]),ls,t(n,null,{default:l(()=>[es]),_:1})]),a("div",ns,[a("h3",ds,[t(e,{to:"#zi4ding4yi4shang4chuan2yang4shi4"},{default:l(()=>[s("#")]),_:1}),s("自定义上传样式")]),t(n,null,{default:l(()=>[cs]),_:1})]),a("div",os,[a("h3",rs,[t(e,{to:"#zi4duan4jiao4yan4"},{default:l(()=>[s("#")]),_:1}),s("字段校验")]),ps,t(n,null,{default:l(()=>[hs]),_:1})]),a("div",is,[a("h3",js,[t(e,{to:"#zi4ding4yi4xuan4ran3"},{default:l(()=>[s("#")]),_:1}),s("自定义渲染")]),us,t(n,null,{default:l(()=>[gs]),_:1})]),ms,a("div",fs,[a("h3",_s,[t(e,{to:"#shu3xing4"},{default:l(()=>[s("#")]),_:1}),s("属性")]),vs]),a("div",ys,[a("h3",bs,[t(e,{to:"#VarFile"},{default:l(()=>[s("#")]),_:1}),s("VarFile")]),ws]),a("div",ks,[a("h3",xs,[t(e,{to:"#VarFileUtils"},{default:l(()=>[s("#")]),_:1}),s("VarFileUtils")]),zs]),a("div",Fs,[a("h3",Vs,[t(e,{to:"#fang1fa3"},{default:l(()=>[s("#")]),_:1}),s("方法")]),Rs]),a("div",Bs,[a("h3",Ss,[t(e,{to:"#shi4jian4"},{default:l(()=>[s("#")]),_:1}),s("事件")]),As]),a("div",Us,[a("h3",Cs,[t(e,{to:"#cha1cao2"},{default:l(()=>[s("#")]),_:1}),s("插槽")]),Ns]),a("div",Ps,[a("h3",Ds,[t(e,{to:"#yang4shi4bian4liang4"},{default:l(()=>[s("#")]),_:1}),s("样式变量")]),Es])])}const Zs=o(h,[["render",Is]]);export{Zs as default};
