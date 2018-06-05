!function () {
  let view = document.getElementById('menu')
  let controller = {
    view: null,
    init: function (view) {
      this.view = view
      this.bindEvents()
    },
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
  }
  controller.init(view)
}.call()