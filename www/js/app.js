// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter',
  ['ionic',
    'starter.controllers',
    'starter.services',
    //消息
    'sz.news.route',
    //联系人
    'sz.person.route',
    'sz.space.route'
  ])
  /*执行该主模块的*/
  .run(["$ionicPlatform", "$rootScope", "$log", "$ionicHistory",
    "$state",
    function ($ionicPlatform, $rootScope, $log, $ionicHistory, $state) {
      document.addEventListener("deviceready", function () {
        $cordovaPlugin.someFunction().then(success, error);
      }, false);

      $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }

        //配置全局的参数
        $rootScope.banerUrl = [{}, {}];

        $rootScope.$on("$stateChangeStart", function (event, toState, roParams, formState, $log, $state) {
          //$ionicHistory.clearCache();

          // var user = Storage.get("userInfo");
          /* if (user) {

           } else {

           }*/

          //在此可以请求一些用户的具体参数放在缓存里面，共各个页面所使用；
        })
        $rootScope.$on("$stateChangeSuccess", function (event, toState, roParams, fromState, fromParams) {

        })
        $rootScope.$on('$stateChangeError', function (event, toState, roParams, fromState, fromParams, error) {
          $log.debug('$stateChangeError', arguments);
        });


      });
    }
  ])


  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html',
        controller:"appctr"
      })

      // Each tab has its own nav history stack:
      /* //��Ϣ
       .state('tab.new', {
         url: '/new',
         views: {
           'tab-dash': {
             templateUrl: 'templates/tab-dash.html',
             controller: 'DashCtrl'
           }
         }
       })*/
      //��ϵ��
      /*.state('tab.person', {
          url: '/person',
          views: {
            'tab-chats': {
              templateUrl: 'templates/tab-chats.html',
              //controller: 'ChatsCtrl'
            }
          }
        })*/
      .state('tab.chat-detail', {
        url: '/chats/:chatId',
        views: {
          'tab-person': {
            templateUrl: 'templates/chat-detail.html',
            controller: 'ChatDetailCtrl'
          }
        }
      })
      //�ռ�
      /*.state('tab.space', {
        url: '/space',
        views: {
          'tab-space': {
            templateUrl: 'templates/tab-account.html',
            // controller: 'AccountCtrl'
          }
        }
      });*/

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/new');

  });
