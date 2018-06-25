!function () {
  let view = View('#menu')
  let controller = Controller({
    bindEvents: function () {
      var view = this.view
      let liTags = view.querySelectorAll("li")
      for (let i = 0; i < liTags.length; i++) {
        $(liTags[i]).mouseenter(function (e) {
          $(e.currentTarget).addClass("active")
        })
        $(liTags[i]).mouseleave(function (e) {
          $(e.currentTarget).removeClass("active")
        })
      }
    }
  })
  controller.init(view)
}.call()