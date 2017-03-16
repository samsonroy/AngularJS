 var app=angular.module('myApp',[]);
    app.controller('personController',function($scope) {
                   $scope.firstName = "";
                   $scope.lastName = "";
                   $scope.getFullName=function() {
        return $scope.firstName + " " + $scope.lastName;
    }
                   });