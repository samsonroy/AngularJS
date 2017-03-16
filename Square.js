var myApp=angular.module('myApp',[]);
myApp.controller('SquareController',['$scope',function($scope) {
                                   $scope.computeSquare=function(value){
                                   return value * value;
                                   }
                                   }])