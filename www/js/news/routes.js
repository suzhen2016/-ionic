/**
 * Created by Administrator on 2017/4/21.
 */
angular.module("sz.news.route",['sz.news.controllers'])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
        //消息
        .state("tab.new",{
            url:"/new",
           /* abstract: true,*/
          cache:'false',
          views:{
                'tab-new': {
                    templateUrl: './js/news/templates/news.html',
                    controller: 'szNewsCtrl'
                }
            }
        })
            .state("tab.phone",{
                url:"/phone",
              cache:'false',
              views:{
                    'tab-new': {
                        templateUrl: './js/news/templates/phone.html',
                        controller: 'szPhoneCtrl'
                    }
                }
            })

    })
