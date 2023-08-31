import{_ as o,p as n,f as r,h as p,M as s,q as d,S as e,P as t,ap as l}from"./vue-router-547718df.js";const h={components:{}},i={class:"varlet-site-doc"},j=s("h1",null,"日期选择器",-1),m={class:"card"},g={id:"介绍"},_=s("p",null,"用于选择日期或日期范围。",-1),u={class:"card"},f={id:"基本使用"},k=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(" date = ref("),s("span",{class:"hljs-string"},"'2021-04-08'"),t(`)
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-date-picker"),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"date"'),t(" />")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),y={class:"card"},v={id:"月份选择器"},b=s("p",null,[t("使用 "),s("code",null,"type"),t(" 属性切换选择器的类型，"),s("code",null,"type"),t(" 默认值为 "),s("code",null,"date")],-1),w=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(" date = ref("),s("span",{class:"hljs-string"},"'2021-04-08'"),t(`)
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-date-picker"),t(),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"month"'),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"date"'),t(),s("span",{class:"hljs-attr"},"elevation"),t(" />")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),x={class:"card"},Y={id:"多选"},D=s("p",null,[t("通过 "),s("code",null,"multiple"),t(" 属性选择多个日期，此时 "),s("code",null,"date"),t(" 为一个数组。")],-1),z=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(` date = ref([])
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-date-picker"),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"date"'),t(),s("span",{class:"hljs-attr"},"multiple"),t(" />")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),M={class:"card"},I={id:"选择范围"},N=s("p",null,[t("通过 "),s("code",null,"range"),t(" 属性选择一个日期范围，此时 "),s("code",null,"date"),t(" 为 "),s("code",null,"[startDate, endDate]"),t("。")],-1),S=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(" date = ref(["),s("span",{class:"hljs-string"},"'2021-04-08'"),t(", "),s("span",{class:"hljs-string"},"'2021-04-20'"),t(`])
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-date-picker"),t(),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"date"'),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"date"'),t(),s("span",{class:"hljs-attr"},"range"),t(" />")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),B={class:"card"},C={id:"日期限制"},V=s("p",null,[t("通过 "),s("code",null,"min"),t(" 和 "),s("code",null,"max"),t(" 属性来控制可选择的日期范围，使用 "),s("code",null,"allowed-dates"),t(" 属性限制可以选择的日期。")],-1),$=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(" date = ref("),s("span",{class:"hljs-string"},"'2020-11-11'"),t(`)

`),s("span",{class:"hljs-keyword"},"const"),t(" allowedDates = "),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"val"),t(" =>")]),t(),s("span",{class:"hljs-built_in"},"parseInt"),t("(val.split("),s("span",{class:"hljs-string"},"'-'"),t(")["),s("span",{class:"hljs-number"},"2"),t("], "),s("span",{class:"hljs-number"},"10"),t(") % "),s("span",{class:"hljs-number"},"2"),t(" === "),s("span",{class:"hljs-number"},"1"),t(`
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-date-picker"),t(`
    `),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"date"'),t(`
    `),s("span",{class:"hljs-attr"},"min"),t("="),s("span",{class:"hljs-string"},'"2020-10-15"'),t(`
    `),s("span",{class:"hljs-attr"},"max"),t("="),s("span",{class:"hljs-string"},'"2021-01-15"'),t(`
    `),s("span",{class:"hljs-attr"},":allowed-dates"),t("="),s("span",{class:"hljs-string"},'"allowedDates"'),t(`
  />`)]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),O={class:"card"},P={id:"自定义"},q=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(" date = ref("),s("span",{class:"hljs-string"},"'2021-05'"),t(`)

`),s("span",{class:"hljs-keyword"},"const"),t(" allowedDates = "),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"val"),t(" =>")]),t(),s("span",{class:"hljs-built_in"},"parseInt"),t("(val.split("),s("span",{class:"hljs-string"},"'-'"),t(")["),s("span",{class:"hljs-number"},"1"),t("], "),s("span",{class:"hljs-number"},"10"),t(") % "),s("span",{class:"hljs-number"},"2"),t(" === "),s("span",{class:"hljs-number"},"1"),t(`

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),t(),s("span",{class:"hljs-title"},"change"),t("("),s("span",{class:"hljs-params"},"date"),t(") ")]),t(`{
  `),s("span",{class:"hljs-built_in"},"console"),t(`.log(date)
}
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-date-picker"),t(`
    `),s("span",{class:"hljs-attr"},"elevation"),t(`
    `),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"month"'),t(`
    `),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"date"'),t(`
    `),s("span",{class:"hljs-attr"},"min"),t("="),s("span",{class:"hljs-string"},'"2016-07"'),t(`
    `),s("span",{class:"hljs-attr"},"max"),t("="),s("span",{class:"hljs-string"},'"2022-01"'),t(`
    `),s("span",{class:"hljs-attr"},"header-color"),t("="),s("span",{class:"hljs-string"},'"purple"'),t(`
    `),s("span",{class:"hljs-attr"},"color"),t("="),s("span",{class:"hljs-string"},'"#7bb872"'),t(`
    `),s("span",{class:"hljs-attr"},"first-day-of-week"),t("="),s("span",{class:"hljs-string"},'"1"'),t(`
    `),s("span",{class:"hljs-attr"},":allowed-dates"),t("="),s("span",{class:"hljs-string"},'"allowedDates"'),t(`
    @`),s("span",{class:"hljs-attr"},"change"),t("="),s("span",{class:"hljs-string"},'"change"'),t(`
  >`)]),t(`
    `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(" #"),s("span",{class:"hljs-attr"},"year"),t("="),s("span",{class:"hljs-string"},'"{ year }"'),t(">")]),t(`
      `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"span"),t(">")]),t("{{ year }}年"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"span"),t(">")]),t(`
    `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
    `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(" #"),s("span",{class:"hljs-attr"},"month"),t("="),s("span",{class:"hljs-string"},'"{ year, month }"'),t(">")]),t(`
      `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"span"),t(">")]),t("{{ year }}年{{ month }}月"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"span"),t(">")]),t(`
    `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-date-picker"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),A=s("h2",null,"API",-1),E={class:"card"},T={id:"属性"},F=l("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>被选择的日期（ISO 8601 格式，<code>YYYY-MM-DD</code> 或 <code>YYYY-MM</code>）</td><td><em>string[] | string</em></td><td><code>undefined</code></td></tr><tr><td><code>type</code></td><td>选择器类型，可选值为 <code>date month</code></td><td><em>string</em></td><td><code>date</code></td></tr><tr><td><code>allowed-dates</code></td><td>限制可以选择的日期</td><td><em>function</em></td><td><code>-</code></td></tr><tr><td><code>color</code></td><td>选择器的颜色</td><td><em>string</em></td><td><code>#2979ff</code></td></tr><tr><td><code>header-color</code></td><td>标题背景色。如果未指定，将使用由 color 属性或默认颜色。</td><td><em>string</em></td><td><code>#2979ff</code></td></tr><tr><td><code>elevation</code></td><td>海拔高度，可选值为 <code>true</code> <code>false</code> 和 <code>0-24</code> 的等级</td><td><em>string | number | boolean</em></td><td><code>false</code></td></tr><tr><td><code>button-elevation</code></td><td>Button 的海拔高度</td><td><em>string | number | boolean</em></td><td><code>true</code></td></tr><tr><td><code>first-day-of-week</code></td><td>设置一周的第一天，从周日的 0 开始。</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>min</code></td><td>允许的最小日期/月份（ISO 8601格式）</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>max</code></td><td>允许的最大日期/月份（ISO 8601格式）</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>show-current</code></td><td>是否显示当前日期</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>readonly</code></td><td>是否只读</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>multiple</code></td><td>是否支持选择多个日期</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>range</code></td><td>是否支持选择一个范围</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>touchable</code></td><td>是否支持拖动切换面板</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table>",1),G={class:"card"},H={id:"事件"},J=l("<table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td><code>preview</code></td><td>日期切换时触发</td><td><code>year: number</code> <br><code>month: number</code></td></tr><tr><td><code>change</code></td><td>日期改变时触发</td><td><code>value: string | string[]</code></td></tr></tbody></table>",1),K={class:"card"},L={id:"插槽"},Q=l("<p><code>weekIndex</code> 表示一周的第 <code>n</code> 天，从周末的 <code>0</code> 开始</p><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>year</code></td><td>自定义标题中的年</td><td><code>year: YYYY</code></td></tr><tr><td><code>month</code></td><td>自定义标题中的月</td><td><code>year: YYYY</code> <br> <code>month: MM</code></td></tr><tr><td><code>date</code></td><td>自定义标题中的日期</td><td><code>year: YYYY</code> <br> <code>month: MM</code> <br> <code>date: DD</code> <br> <code>week: weekIndex</code></td></tr><tr><td><code>range</code></td><td>自定义标题中的范围</td><td><code>choose: [startData, endDate]</code></td></tr><tr><td><code>multiple</code></td><td>自定义标题中的多选</td><td><code>choose: [&#39;YYYY-MM-DD&#39; | &#39;YYYY-MM&#39;]</code></td></tr></tbody></table>",2),R={class:"card"},U={id:"样式变量"},W=l('<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--date-picker-border-radius</code></td><td><code>4px</code></td></tr><tr><td><code>--date-picker-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--date-picker-min-width</code></td><td><code>290px</code></td></tr><tr><td><code>--date-picker-height</code></td><td><code>385px</code></td></tr><tr><td><code>--date-picker-main-color</code></td><td><code>rgba(0, 0, 0, .87)</code></td></tr><tr><td><code>--date-picker-title-padding</code></td><td><code>16px</code></td></tr><tr><td><code>--date-picker-title-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--date-picker-title-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--date-picker-title-year-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--date-picker-title-year-font-weight</code></td><td><code>500</code></td></tr><tr><td><code>--date-picker-title-year-margin-bottom</code></td><td><code>8px</code></td></tr><tr><td><code>--date-picker-title-date-height</code></td><td><code>48px</code></td></tr><tr><td><code>--date-picker-title-date-font-size</code></td><td><code>34px</code></td></tr><tr><td><code>--date-picker-title-date-font-weight</code></td><td><code>500</code></td></tr><tr><td><code>--date-picker-title-date-range-font-size</code></td><td><code>20px</code></td></tr><tr><td><code>--date-picker-body-background-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--picker-header-padding</code></td><td><code>4px 16px</code></td></tr><tr><td><code>--picker-header-color</code></td><td><code>#555</code></td></tr><tr><td><code>--month-picker-padding</code></td><td><code>0 12px</code></td></tr><tr><td><code>--month-picker-item-width</code></td><td><code>33%</code></td></tr><tr><td><code>--month-picker-item-height</code></td><td><code>56px</code></td></tr><tr><td><code>--month-picker-item-button-max-width</code></td><td><code>140px</code></td></tr><tr><td><code>--year-picker-font-weight</code></td><td><code>400</code></td></tr><tr><td><code>--year-picker-item-padding</code></td><td><code>8px 0</code></td></tr><tr><td><code>--year-picker-item-active-font-size</code></td><td><code>26px</code></td></tr><tr><td><code>--year-picker-item-active-font-weight</code></td><td><code>500</code></td></tr><tr><td><code>--year-picker-item-active-font-padding</code></td><td><code>10px 0</code></td></tr><tr><td><code>--year-picker-item-active-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--year-picker-item-color</code></td><td><code>#555</code></td></tr><tr><td><code>--day-picker-content-item-width</code></td><td><code>14.28%</code></td></tr><tr><td><code>--day-picker-content-item-font-size</code></td><td><code>var(--font-size-sm)</code></td></tr><tr><td><code>--day-picker-content-item-padding</code></td><td><code>2px 0</code></td></tr><tr><td><code>--day-picker-content-item-button-width</code></td><td><code>32px</code></td></tr><tr><td><code>--day-picker-content-item-button-height</code></td><td><code>32px</code></td></tr><tr><td><code>--day-picker-content-item-button-font-size</code></td><td><code>var(--font-size-sm)</code></td></tr><tr><td><code>--day-picker-head-item-color</code></td><td><code>rgba(0, 0, 0, 0.38)</code></td></tr><tr><td><code>--day-picker-head-item-padding</code></td><td><code>8px 0</code></td></tr><tr><td><code>--day-picker-head-item-font-weight</code></td><td><code>600</code></td></tr></tbody></table>',2);function X(Z,tt,st,dt,et,at){const a=n("router-link"),c=n("var-site-code-example");return r(),p("div",i,[j,s("div",m,[s("h3",g,[d(a,{to:"#介绍"},{default:e(()=>[t("#")]),_:1}),t("介绍")]),_]),s("div",u,[s("h3",f,[d(a,{to:"#基本使用"},{default:e(()=>[t("#")]),_:1}),t("基本使用")]),d(c,null,{default:e(()=>[k]),_:1})]),s("div",y,[s("h3",v,[d(a,{to:"#月份选择器"},{default:e(()=>[t("#")]),_:1}),t("月份选择器")]),b,d(c,null,{default:e(()=>[w]),_:1})]),s("div",x,[s("h3",Y,[d(a,{to:"#多选"},{default:e(()=>[t("#")]),_:1}),t("多选")]),D,d(c,null,{default:e(()=>[z]),_:1})]),s("div",M,[s("h3",I,[d(a,{to:"#选择范围"},{default:e(()=>[t("#")]),_:1}),t("选择范围")]),N,d(c,null,{default:e(()=>[S]),_:1})]),s("div",B,[s("h3",C,[d(a,{to:"#日期限制"},{default:e(()=>[t("#")]),_:1}),t("日期限制")]),V,d(c,null,{default:e(()=>[$]),_:1})]),s("div",O,[s("h3",P,[d(a,{to:"#自定义"},{default:e(()=>[t("#")]),_:1}),t("自定义")]),d(c,null,{default:e(()=>[q]),_:1})]),A,s("div",E,[s("h3",T,[d(a,{to:"#属性"},{default:e(()=>[t("#")]),_:1}),t("属性")]),F]),s("div",G,[s("h3",H,[d(a,{to:"#事件"},{default:e(()=>[t("#")]),_:1}),t("事件")]),J]),s("div",K,[s("h3",L,[d(a,{to:"#插槽"},{default:e(()=>[t("#")]),_:1}),t("插槽")]),Q]),s("div",R,[s("h3",U,[d(a,{to:"#样式变量"},{default:e(()=>[t("#")]),_:1}),t("样式变量")]),W])])}const lt=o(h,[["render",X]]);export{lt as default};
