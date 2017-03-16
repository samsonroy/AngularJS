var myApp=angular.module('spicyApp',[]);
myApp.controller('SpicyController',['$scope',function($scope){
    $scope.customSpicy="";
    $scope.spicy='very';
    $scope.spice=function(spicy){
        $scope.customSpicy=spicy
           $scope.spicy=spicy;
    }
   
}])