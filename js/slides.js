!function () {
  let view = View('#portfolio .works')
  let controller = Controller({
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
  })

  controller.init(view)
}.call()