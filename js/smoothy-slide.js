!function () {
  let aTags = $("#menu > li > a")
  let controller = Controller({
    targetTop: undefined,
    currentTop: undefined,
    bindEvents: function () {
      let view = this.view
      for (let i = 0; i < view.length; i++) {
        $(view[i]).click((e) => {
          let href = $(e.target).attr('href')
          if (href[0] === "#") {
            e.preventDefault()
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
      requestAnimationFrame(animate)
      let coords = { y: this.currentTop }
      let tween = new TWEEN.Tween(coords)
        .to({ y: this.targetTop }, 1000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onUpdate(function () {
          window.scrollTo(0, coords.y)
        })
        .start();
    }
  })
  controller.init(aTags)
}.call()