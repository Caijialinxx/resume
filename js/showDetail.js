!function () {
  let view = View('#skills')
  let controller = Controller({
    detailHeader: null,
    detailContent: null,
    details: {
      'HTML': `掌握 HTML 元素的使用，理解其语义化标签的作用并能够写出结构清晰的页面。掌握 HTML5 新元素如 canvas 、 nav 及 WebStorage API 等的使用。`,
      'CSS': `掌握 CSS 盒模型、媒体查询等的使用，此外熟练使用 CSS3 动画、转换、过渡、弹性盒子布局、盒阴影等，能够利用 CSS 布局网页及实现精美的效果。`,
      'JavaScript': `掌握 JavaScript ，如作用域、闭包、 DOM 操作等。能够使用 ES6 语法，如 let 、 const 、 箭头函数、模板字面量、解构赋值、模块、类和 Promise 等。`,
      'jQuery': `熟悉 jQuery 常用 API 的使用，如 Ajax 、 DOM 操作相关、特效、事件等。曾使用原生 JavaScript 封装过简易版的 jQuery.ajax() 。<a href='https://caijialinxx.github.io/homework/ajaxReq/' target='_blank'>查看源码</a>`,
      'React & React Native': `使用过 React 和  React Native 分别开发 PC 端和移动端的 ToDo 项目，主要功能有标记完成状态、添加/删除/移动待办及样式的变化。掌握 JSX 、组件、 props 、 state 及生命周期，掌握 React Native 的原生 UI 组件、 React Navigation 、动画等 API 的使用。`,
      'Webpack': `有使用 Webpack 打包项目的经验，了解其管理资源的方法，如 css-loader 、 file-loader 等。`,
      '移动端开发': `会使用 REM 、 vw / vh 、 媒体查询等技术制作适配手机设备的页面，有 React Native 移动端开发经验。`,
      'Node.js': `有 Node.js 搭配 Express 和 Socket.IO 开发在线聊天室的经验，并已将项目部署到 Heroku 。<a href='https://arcane-mountain-17783.herokuapp.com/' target='_blank'>点击试用</a>`,
      '其他': `会使用 Scss 及 Less 动态开发 CSS ，懂得嵌套规则、父选择器 & 、属性嵌套、插值语句、变量、混合等的使用；理解 MVC 、 MVVM 思想；掌握 HTTP 基础……`,
    },
    bindEvents: function () {
      this.detailHeader = view.querySelector('h3')
      this.detailContent = view.querySelector('p')
      skillTags = view.querySelectorAll('li')
      for (let i = 0; i < skillTags.length; i++) {
        console.log(skillTags[i])
        $(skillTags[i]).mouseenter(this.showDetail.bind(this))
      }
    },
    showDetail: function (e) {
      let name = e.currentTarget.dataset.name
      this.detailHeader.innerText = name
      this.detailContent.innerHTML = this.details[name]
    },
    topNavBarRemoveSticky: function () {
      $(this.view).removeClass("sticky")
    }
  })
  controller.init(view)
}.call()