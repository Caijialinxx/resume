window.Model = function (user_defined) {
  let tableName = user_defined.tableName
  return {
    init: function () {
      let APP_ID = 'cJEG2Dk1CraojDVdtANz144V-gzGzoHsz'
      let APP_KEY = '3gOhg9eS5JbVpoNL19ASOaAT'
      AV.init({ appId: APP_ID, appKey: APP_KEY })
    },
    fetch: function () {
      let messagesQuery = new AV.Query(tableName)
      return messagesQuery.find()
    },
    add: function (datasObj) {
      let MessagesDB = AV.Object.extend(tableName)
      let message = new MessagesDB()
      let datas = {}
      datasObj.map((data) => {
        datas[data.key] = data.value
        return datas
      })
      return message.save(datas)
    },
    // delete: function () { },
    // update: function () { }
  }
}