!function () {
  let view = View('#portfolio .works')
  let controller = {
    view: null,
    init: function (view) {
      this.view = view
      this.bindEvents()
    },
    bindEvents: function () {
      let view = this.view
      var mySwiper = new Swiper(view.querySelector('.swiper-container'), this.options)
    },
    options: {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    }
  }
  controller.init(view)
}.call()