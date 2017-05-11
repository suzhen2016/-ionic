/**
 * Created by Administrator on 2017/4/21.
 */
angular.module('person.servers', [])

  .factory('Chats', function() {
    var chats = [{
      id: 0,
      name: '李白',
      lastText: '安徽省 合肥?',
      face: 'img/ben.png'
    }, {
      id: 1,
      name: '白居易',
      lastText: '唐代诗人',
      face: 'img/max.png'
    }, {
      id: 2,
      name: '苏镇',
      lastText: '山东 聊城',
      face: 'img/adam.jpg'
    }, {
      id: 3,
      name: '黑龙江大学',
      lastText: '黑龙江 哈尔滨',
      face: 'img/perry.png'
    }, {
      id: 4,
      name: '北京元谋人',
      lastText: '北京 门头沟.',
      face: 'img/mike.png'
    }];

    return {
      all: function() {
        return chats;
      },
      remove: function(chat) {
        chats.splice(chats.indexOf(chat), 1);
      },
      get: function(chatId) {
        for (var i = 0; i < chats.length; i++) {
          if (chats[i].id === parseInt(chatId)) {
            return chats[i];
          }
        }
        return null;
      }
    };
  });
