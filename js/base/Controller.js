window.Controller = function (user_defined) {
  let init = user_defined.init, bindEvents = user_defined.bindEvents

  let object = {
    view: null,
    model: null,
    init: function (view, model) {
      this.view = view
      if (model) {
        this.model = model
        this.model.init()
      }
      if (init) {
        init.call(this, view, model)
      }
      this.bindEvents()
    },
    bindEvents: function () {
      if (bindEvents) {
        bindEvents.call(this)
      }
    }
  }
  for (let key in user_defined) {
    // 加载所有函数，使得后续可以调用
    if (key !== 'init' && key !== 'bindEvents') {
      object[key] = user_defined[key]
    }
  }

  return object
}