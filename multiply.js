 var myApp=angular.module('myApp', []);
     myApp.controller('myController',['$scope',function($scope) {
          $scope.computeTable=function(value,n)    {
                  return value*n;
          }
      }])
