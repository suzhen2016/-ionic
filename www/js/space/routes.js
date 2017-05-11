/**
 * Created by Administrator on 2017/4/29.
 */
angular.module("sz.space.route",['sz.space.ctr'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('taba', {
        url: '/taba',
        abstract: true,
        templateUrl: './templates/tabs.html',
        controller:"appctr"
      })
      .state('taba.space',{
        url:"/space",
        views:{
          "tab-space":{
            templateUrl:"js/space/template/space.html",
            controller:'spaceCtr'
          }
        }
      })
      .state('more',{
        url:"/more",
        views:{
          "":{
            templateUrl:"js/space/template/more.html",
            controller:'moreCtr as vm'
          }
        }
      })
      .state('dealti',{
        url:"/dealti",
        views:{
          "":{
            templateUrl:"js/space/template/dealti.html",
            controller:'dealtiCtr as vm'
          }
        }
      })
      .state('ye',{
        url:"/ye",
        views:{
          "":{
            templateUrl:"js/space/template/ye.html",
            controller:'dealtiCtr as vm'
          }
        }
      })
  })
