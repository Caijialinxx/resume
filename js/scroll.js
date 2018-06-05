!function () {
  let controller = {
    topNavBar: null,
    sections: null,
    nearestIndex: undefined,
    highlightLi: null,
    pageYOffset: undefined,
    minTop: undefined,
    currentSectionDistance: undefined,
    init: function () {
      this.topNavBar = $('#topNavBar')
      this.sections = $("section[data-x]")
      this.bindEvents()
    },
    bindEvents: function () {
      window.onscroll = () => {
        this.nearestIndex = 0
        this.pageYOffset = Math.round(window.pageYOffset)
        if (this.pageYOffset > 0) {
          this.topNavBarAddSticky()
          this.liHighlight()
          this.sectionFloatUp()
        } else {
          this.topNavBarRemoveSticky()
        }
      }
    },
    topNavBarAddSticky: function () {
      //导航栏浮起
      $(this.topNavBar).addClass("sticky")
    },
    topNavBarRemoveSticky: function () {
      //导航栏复原
      $(this.topNavBar).removeClass("sticky")
    },
    liHighlight: function () {
      //滚动到某一section高亮其对应菜单
      for (let i = 1; i < this.sections.length; i++) {
        this.minTop = Math.abs(this.sections[this.nearestIndex].offsetTop - this.pageYOffset)
        this.currentSectionDistance = Math.abs(this.sections[i].offsetTop - this.pageYOffset)
        if (this.currentSectionDistance < this.minTop) {
          this.nearestIndex = i
        }
      }
      this.highlightLi = $("a[href='#" + this.sections[this.nearestIndex].id + "']").parent()
      $(this.highlightLi).siblings().removeClass("highlight")
      $(this.highlightLi).addClass("highlight")
    },
    sectionFloatUp: function () {
      //滚动到某一section从下浮起
      $(this.sections[this.nearestIndex]).removeClass("offset")
    }
  }
  controller.init()
}.call()