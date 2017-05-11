/**
 * Created by Administrator on 2017/4/21.
 */
angular.module('sz.person.controllers', ['person.servers'])
    //联系人
    .controller('szPersonCtrl', ['$scope','$log','Chats',function($scope,$log,Chats) {

        $scope.chats = Chats.all();
        $scope.remove = function(chat) {
        Chats.remove(chat);
        $log.debug("联系人11");
      };
    }])
    //联系人详情
  .controller('personDetailCtrl', ['$scope','$log','Chats','$stateParams','$ionicHistory',
    function($scope,$log,Chats,$stateParams,$ionicHistory) {
    $scope.chat = Chats.get($stateParams.chatId);
    $scope.goBack = function(){
      $ionicHistory.goBack();
    }
      $log.debug("详情");
      (function(){
        var ss = $ionicHistory.currentHistoryId();
        console.log(ss)
      })()
  }])

