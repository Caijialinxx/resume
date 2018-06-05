!function () {
  let aTags = $("#menu > li > a")
  let controller = {
    view: null,
    targetTop: undefined,
    currentTop: undefined,
    init: function (view) {
      this.view = view
      this.bindEvents()
    },
    bindEvents: function () {
      let view = this.view
      for (let i = 0; i < view.length; i++) {
        $(view[i]).click((e) => {
          let href = $(e.target).attr('href')
          if (href[0] === "#") {
            e.preventDefault()           //阻止a便签的锚点跳转事件，使得跳转时页面不会闪动
            this.targetTop = document.querySelector(href).offsetTop
            this.currentTop = window.pageYOffset
            this.smoothySlide()
          }
        })
      }
    },
    smoothySlide: function () {
      function animate(time) {
        requestAnimationFrame(animate)
        TWEEN.update(time)
      }
      requestAnimationFrame(animate)            //浏览器根据CPU来求动画变化间隔，相当于duration
      let coords = { y: this.currentTop }
      let tween = new TWEEN.Tween(coords)
        .to({ y: this.targetTop }, 1000)             //相当于setInterval()
        .easing(TWEEN.Easing.Quadratic.InOut)   //选择动画类型
        .onUpdate(function () {                 //需要执行的动作，相当于setInterval中的function
          window.scrollTo(0, coords.y)
        })
        .start();
      /*自己使用原生JS来实现平滑滚动*/
      // let n = 20                   //动几次
      // let duration = 300 / n       //多长时间动一次
      // let times = 0
      // let distancePerTimes = (targetTop - currentTop) / n   //每次移动的距离
      // let id = setInterval(() => {
      //   times++
      //   window.scrollTo(0, currentTop + distancePerTimes * times)
      //   if (times === n) {
      //     window.clearInterval(id)
      //     return
      //   }
      // }, duration)
    }
  }
  controller.init(aTags)
}.call()