!function () {
  let view = View('section#messages')

  let model = Model({ tableName: 'Messages' })

  let controller = Controller({
    init: function () {
      this.loadMessages()
    },
    bindEvents: function () {
      $('#postMsgForm').submit((e) => {
        e.preventDefault()
        this.submitMessage()
      })
    },
    loadMessages: function () {
      this.model.fetch().then((msgs) => {
        msgs.forEach((msg) => {
          this.displayMessage(msg)
        })
      }, function (error) {
        console.log(`Error: ${error}`)
      })
    },
    submitMessage: function () {
      let username = $('input[name=username]')[0].value.trim(),
        content = $('textarea[name=content]')[0].value
      if (username.length !== 0 && content.trim().length !== 0) {
        this.model.add([{ key: 'username', value: username }, { key: 'content', value: content }]).then((msg) => {
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
  })

  controller.init(view, model)
}.call()    