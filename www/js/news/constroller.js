/**
 * Created by Administrator on 2017/4/21.
 */
angular.module('sz.news.controllers', [])
    //消息
    .controller('szNewsCtrl', ['$scope','$log',function($scope,$log,$ionicHistory) {
        $log.debug("消息模块22");
        (function(){
          //var ss = $ionicHistory.backView();
          console.log(68)
        })()
    }])
    //视频
  .controller('szPhoneCtrl', ['$scope','$log',function($scope,$log) {
         $log.debug("视频模块")
  }])


