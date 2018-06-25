!function () {
  let view = View('#topNavBar')
  let controller = Controller({
    pageYOffset: undefined,
    bindEvents: function () {
      window.onscroll = () => {
        this.pageYOffset = Math.round(window.pageYOffset)
        if (this.pageYOffset > 0) {
          this.topNavBarAddSticky()
        } else {
          this.topNavBarRemoveSticky()
        }
      }
    },
    topNavBarAddSticky: function () {
      $(this.view).addClass("sticky")
    },
    topNavBarRemoveSticky: function () {
      $(this.view).removeClass("sticky")
    }
  })
  controller.init(view)
}.call()