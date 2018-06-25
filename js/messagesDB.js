!function () {
  let view = View('section#messages')

  var model = {
    // 初始化
    init: function () {
      let APP_ID = 'cJEG2Dk1CraojDVdtANz144V-gzGzoHsz'
      let APP_KEY = '3gOhg9eS5JbVpoNL19ASOaAT'
      AV.init({ appId: APP_ID, appKey: APP_KEY })
    },
    // 获取留言数据
    fetchMessages: function () {
      let messagesQuery = new AV.Query('Messages')
      return messagesQuery.find()
    },
    // 添加留言数据
    addMessage: function (username, content) {
      let MessagesDB = AV.Object.extend('Messages')
      let message = new MessagesDB()
      console.log(message)
      return message.save({ 'username': username, 'content': content })
    }
  }

  var controller = {
    view: null,
    model: null,
    init: function (view, model) {
      this.view = view
      this.model = model
      this.model.init()
      this.loadMessages()
      this.bindEvents()
    },
    loadMessages: function () {
      this.model.fetchMessages().then((msgs) => {
        msgs.forEach((msg) => {
          this.displayMessage(msg)
        })
      }, function (error) {
        console.log(`Error: ${error}`)
      })
    },
    bindEvents: function () {
      $('#postMsgForm').submit((e) => {
        e.preventDefault()
        this.submitMessage()
      })
    },
    submitMessage: function () {
      let username = $('input[name=username]')[0].value.trim(),
        content = $('textarea[name=content]')[0].value
      if (username.length !== 0 && content.trim().length !== 0) {
        this.model.addMessage(username, content).then((msg) => {
          this.displayMessage(msg)
          $('textarea[name=content]')[0].value = ''
        }, function (error) {
          console.error('Failed to create new object, with error message: ' + error.message)
        })
      } else {
        alert('昵称和留言不能为空哦！')
      }
    },
    displayMessage: function (message) {
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

      $(li).append(div_username, div_time, div_content)
      $('#messages > ol').append(li)
    },
  }

  controller.init(view, model)
}.call()