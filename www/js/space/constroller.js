/**
 * Created by Administrator on 2017/4/29.
 */
angular.module('sz.space.ctr',[])
.controller('spaceCtr',['$scope',function($scope){
    console.log("ss")
}])
  .controller('moreCtr',['$scope','$ionicHistory',function($scope,$ionicHistory){
    console.log("moreww");
    vm = this;
    vm.goBack = function(){
      $ionicHistory.goBack();
    }
  }])
  .controller('dealtiCtr',['$scope','$ionicHistory',function($scope,$ionicHistory){
    console.log("dealtiCtr");
    vm = this;
    vm.goBack = function(){
      $ionicHistory.goBack();
    }
    $ionicHistory.currentTitle();
    $scope.clickS = function(){
      console.log("jj")
     // $ionicHistory.currentStateName();

     // $ionicHistory.goBack();

     // $ionicHistory.forwardView();
      //var ss = $ionicHistory.currentHistoryId()
      //var ss= $ionicHistory.backTitle();
      //var ss=$ionicHistory.viewHistory();
      $ionicHistory.clearHistory()
      var ss = $ionicHistory.backView();



      console.log(ss)
    }


  }])
