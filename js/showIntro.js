!function () {
  let view = View('#portfolio')
  let controller = Controller({
    items: null,
    bindEvents: function () {
      items = view.querySelectorAll('.item')
      for (let i = 0; i < items.length; i++) {
        $(items[i]).mouseenter(this.showIntro.bind(this))
        $(items[i]).mouseleave(this.hideIntro.bind(this))
      }
    },
    showIntro: function (e) {
      e.currentTarget.querySelector('.intro-wrapper').style.bottom = '0'
    },
    hideIntro: function (e) {
      e.currentTarget.querySelector('.intro-wrapper').style.bottom = '-150px'
    }
  })
  controller.init(view)
}.call()