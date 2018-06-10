!function () {
  var APP_ID = 'cJEG2Dk1CraojDVdtANz144V-gzGzoHsz'
  var APP_KEY = '3gOhg9eS5JbVpoNL19ASOaAT'

  AV.init({
    appId: APP_ID,
    appKey: APP_KEY
  })

  // 获取历史留言
  var msgQuery = new AV.Query('Messages')
  msgQuery.find().then(function (msgs) {
    msgs.forEach(function (msg) {
      displayMsg(msg)
    })
  }, function (error) {
    console.log(`Error: ${error}`)
  })

  $('#postMsgForm').submit((e) => {
    e.preventDefault()
    let username = $('input[name=username]')[0].value.trim(),
      content = $('textarea[name=content]')[0].value
    if (username.length !== 0 && content.trim().length !== 0) {
      let MessagesDB = AV.Object.extend('Messages')
      let message = new MessagesDB()
      message.save({
        'username': username,
        'content': content
      }).then(function (msg) {
        // 刷新并显示新留言
        displayMsg(msg)
        // 成功保存之后，执行其他逻辑.
      }, function (error) {
        // 异常处理
        console.error('Failed to create new object, with error message: ' + error.message)
      })
    } else {
      alert('昵称和留言不能为空哦！')
    }
  })

  function displayMsg(message) {
    let li = document.createElement('li'),
      div_username = document.createElement('div'),
      div_content = document.createElement('div'),
      div_time = document.createElement('div')
    
    div_username.textContent = message.attributes.username
    div_content.textContent = message.attributes.content
    div_time.textContent = message.createdAt.toLocaleString()

    div_username.className = 'msg_username'
    div_content.className = 'msg_content'
    div_time.className = 'msg_time'
    // li.innerHTML = `${message.attributes.username}：<br>${message.attributes.content}<span class="time">${message.createdAt.toLocaleString()}</span>`
    $(li).append(div_username, div_time, div_content)
    $('#messages > ol').append(li)
  }

}.call()