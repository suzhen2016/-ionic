/**
 * Created by Administrator on 2017/4/21.
 */
angular.module("sz.person.route",['sz.person.controllers'])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            //联系人
            .state("tab.person",{
                url:"/person",
                views:{
                    'tab-person': {
                        templateUrl: 'js/person/templates/person.html',
                        controller: 'szPersonCtrl'
                    }
                }
            })
          .state('personDetail', {
            url: '/personDetail/:chatId',
            templateUrl: 'js/person/templates/personDetail.html',
            controller: 'personDetailCtrl'
          })

    })
