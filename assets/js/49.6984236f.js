(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{479:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("项目总结大杂烩，持续完善，更多的是记录问题"),s("br"),t._v(" "),s("img",{attrs:{src:"http://image.icey.cc/2018-10-07-003754.jpg",alt:""}})]),t._v(" "),s("ul",[s("li",[t._v("项目一：接手诸葛装修项目近俩月，到上线。总结下我做的工作，踩的坑，和不足吧。")]),t._v(" "),s("li",[t._v("项目二：商户中心项目")])]),t._v(" "),s("h3",{attrs:{id:"项目介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目介绍"}},[t._v("#")]),t._v(" 项目介绍")]),t._v(" "),s("p",[t._v("诸葛装修，通过微信授权登陆的webapp，用到了很多微信的jssdk，只能通过微信的webview才能运行。一个装修知识的问答系统，有普通用户和管家用户入口。\n因为项目的独特性和部分地方的复杂性使得某些表述不清。旨在自己记录一些小问题，小心得，便于以后进行回顾总结！！")]),t._v(" "),s("h3",{attrs:{id:"技术选型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#技术选型"}},[t._v("#")]),t._v(" 技术选型")]),t._v(" "),s("ul",[s("li",[t._v("前端框架：vue，vue-router")]),t._v(" "),s("li",[t._v("组件库选择：移动端museui  pc端elementUI  地图组件vue-baidu-map等")]),t._v(" "),s("li",[t._v("Rquest库："),s("a",{attrs:{href:"https://www.kancloud.cn/yunye/axios/234845",target:"_blank",rel:"noopener noreferrer"}},[t._v("axios"),s("OutboundLink")],1),t._v(" 起初前一个前端进行了两层的封装处理，但是因为后台接口的频繁改变，很多无法按约定进行前后交互，我自己进行比较通用的改变。")]),t._v(" "),s("li")]),t._v(" "),s("h3",{attrs:{id:"一些值得注意的点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一些值得注意的点"}},[t._v("#")]),t._v(" 一些值得注意的点")]),t._v(" "),s("ul",[s("li",[t._v("前端的登陆校验：\n"),s("ul",[s("li",[t._v("todo: 封装一个自己的前端校验规则")])])]),t._v(" "),s("li",[t._v("前端unitl工具函数的封装")]),t._v(" "),s("li",[t._v("本地不存在字体，网络字体的使用")]),t._v(" "),s("li",[t._v("子父组件，兄弟组件传值问题（未读小红点实时刷新）")]),t._v(" "),s("li",[t._v("ios滑动组件的流畅度问题")]),t._v(" "),s("li",[t._v("根据分页功能实现前端的上拉加载问题")]),t._v(" "),s("li",[t._v("static和assets静态资源的区别")]),t._v(" "),s("li",[t._v("todo 版本号问题！！！！")]),t._v(" "),s("li",[t._v("如何抽离一个通用的AutoListView组件")]),t._v(" "),s("li",[t._v("微信开发者工具的使用")]),t._v(" "),s("li",[t._v("Charles的使用，真机调试")]),t._v(" "),s("li",[t._v("微信sdk的使用，前面不正确？ 现在存在小问题：分享链接无法初始化微信sdk config")]),t._v(" "),s("li",[t._v("多行省略号，单号省略号经常用到")]),t._v(" "),s("li",[t._v("elemet.ui三级联动的实现")]),t._v(" "),s("li",[t._v("简单请求和预检请求的问题")]),t._v(" "),s("li",[t._v("前端实现一个简单的数字字母随机图形验证")])]),t._v(" "),s("h3",{attrs:{id:"常见的业务问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见的业务问题"}},[t._v("#")]),t._v(" 常见的业务问题")]),t._v(" "),s("ul",[s("li",[t._v("自动登录实现思路")])]),t._v(" "),s("h3",{attrs:{id:"vue的一些问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue的一些问题"}},[t._v("#")]),t._v(" vue的一些问题")]),t._v(" "),s("ul",[s("li",[t._v("通过监控和计算实现子组件数据的实时刷新")]),t._v(" "),s("li",[t._v("组件生命周期问题，还是不是很熟练")]),t._v(" "),s("li",[t._v("组件缓存问题")]),t._v(" "),s("li",[t._v("事件监控 EventBus的使用")]),t._v(" "),s("li",[t._v("App.vue注册msg弹出层，$on注册,其他组件或reques里$emit调用")]),t._v(" "),s("li",[t._v("flex布局的使用")]),t._v(" "),s("li",[t._v("minix的使用")]),t._v(" "),s("li",[t._v("filter的全局使用")])]),t._v(" "),s("h4",{attrs:{id:"webpack的一些配置问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack的一些配置问题"}},[t._v("#")]),t._v(" webpack的一些配置问题")]),t._v(" "),s("ul",[s("li",[t._v("vue项目上线是需要结合实际的项目部署路径对静态资源的路径进行修改")]),t._v(" "),s("li",[t._v("其他常用配置暂时忘了")])]),t._v(" "),s("h3",{attrs:{id:"webapp的踩坑点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webapp的踩坑点"}},[t._v("#")]),t._v(" webApp的踩坑点")]),t._v(" "),s("ul",[s("li",[t._v("不同设备的适配问题")]),t._v(" "),s("li",[t._v("ios端的某些兼容处理")])]),t._v(" "),s("h3",{attrs:{id:"pc端的踩坑点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pc端的踩坑点"}},[t._v("#")]),t._v(" pc端的踩坑点")]),t._v(" "),s("ul",[s("li",[t._v("页面响应式")]),t._v(" "),s("li",[t._v("pc浏览器兼容问题")]),t._v(" "),s("li",[t._v("如何选取合适的技术选型")])]),t._v(" "),s("h3",{attrs:{id:"muse-ui-踩坑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#muse-ui-踩坑"}},[t._v("#")]),t._v(" muse ui 踩坑")]),t._v(" "),s("h3",{attrs:{id:"element-ui-的一些使用技巧"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#element-ui-的一些使用技巧"}},[t._v("#")]),t._v(" element ui 的一些使用技巧")]),t._v(" "),s("ul",[s("li",[t._v("按需加载的注意事项")]),t._v(" "),s("li",[t._v("自定义主题样式")]),t._v(" "),s("li",[t._v("利用EventBus的$on和$emit结合弹出曾全局注册提示信息，用于反馈")]),t._v(" "),s("li",[t._v("分页插件的总页数和页码的调整")]),t._v(" "),s("li",[t._v("全局ajax设置请求等待")]),t._v(" "),s("li",[t._v("表单校验自定义规则")])]),t._v(" "),s("h3",{attrs:{id:"axios的使用技巧"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#axios的使用技巧"}},[t._v("#")]),t._v(" axios的使用技巧")]),t._v(" "),s("ul",[s("li",[t._v("post和get传参处理")]),t._v(" "),s("li",[t._v("全局对请求参数和响应数据进行校验，特别注意对响应状态码的提前拦截。一定要和后段进行沟通，进行约定：\n"),s("ul",[s("li",[t._v("code=1正常返回数据。其他进行message提示，或者进行不同情况的处理")]),t._v(" "),s("li",[t._v("error的正确处理。404错误还是500错误的提示")]),t._v(" "),s("li",[t._v("交互的合理性")])])]),t._v(" "),s("li",[t._v("vue ajax实现文件下载  "),s("a",{attrs:{href:"https://blog.csdn.net/qq_32340877/article/details/79864462",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击"),s("OutboundLink")],1),t._v("\n\b")])]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通用导出 + 下载函数")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("doExport")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("params")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("axios")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'get'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("firstName")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fred'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("lastName")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Flintstone'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("responseType")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blob'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("result")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createObjectURL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Blob")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" link "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            link"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("display "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'none'")]),t._v("\n            link"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" url\n            link"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAttribute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'download'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'excel.xlsx'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n            document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("link"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            link"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("click")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br")])]),s("h3",{attrs:{id:"其他组件的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他组件的使用"}},[t._v("#")]),t._v(" 其他组件的使用")]),t._v(" "),s("ul",[s("li",[t._v("vue-baidu-map的使用\n"),s("ul",[s("li",[t._v("检索地区")])])]),t._v(" "),s("li",[t._v("在vue项目中使用md5.js及base64.js\n"),s("ul",[s("li",[t._v("安装")]),t._v(" "),s("li",[t._v("引入")]),t._v(" "),s("li",[t._v("使用")])])])]),t._v(" "),s("h3",{attrs:{id:"发散与坑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发散与坑"}},[t._v("#")]),t._v(" 发散与坑")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Blob",target:"_blank",rel:"noopener noreferrer"}},[t._v("Blob"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.cnblogs.com/hhhyaaon/p/5928152.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("[HTML5] Blob对象"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);