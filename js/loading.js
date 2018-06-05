// 设置loading
!function () {
  setTimeout(function () {
    welcome.className = "finished"
    $('#about').removeClass("offset")
    $('#topNavBar').removeClass("offset")
  }, 1000)
}.call()