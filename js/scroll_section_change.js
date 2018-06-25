!function () {
  let view = $("section[data-x]")
  let controller = Controller({
    nearestIndex: undefined,
    highlightLi: null,
    pageYOffset: undefined,
    minTop: undefined,
    currentSectionDistance: undefined,
    bindEvents: function () {
      window.addEventListener('scroll', () => {
        this.nearestIndex = 0
        this.pageYOffset = Math.round(window.pageYOffset)
        this.liHighlighted()
        this.sectionFloatUp()
      })
    },
    liHighlighted: function () {
      //滚动到某一section高亮其对应菜单
      for (let i = 1; i < this.view.length; i++) {
        this.minTop = Math.abs(this.view[this.nearestIndex].offsetTop - this.pageYOffset)
        this.currentSectionDistance = Math.abs(this.view[i].offsetTop - this.pageYOffset)
        if (this.currentSectionDistance < this.minTop) {
          this.nearestIndex = i
        }
      }
      this.highlightLi = $("a[href='#" + this.view[this.nearestIndex].id + "']").parent()
      $(this.highlightLi).siblings().removeClass("highlight")
      $(this.highlightLi).addClass("highlight")
    },
    sectionFloatUp: function () {
      //滚动到某一section从下浮起
      $(this.view[this.nearestIndex]).removeClass("offset")
    }
  })
  controller.init(view)
}.call()