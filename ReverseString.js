var myApp=angular.module('myApp',[]).controller('myController',function($scope){
    $scope.firstName="krishna";
    $scope.lastName="prasad";
    $scope.getFullName=function(){
        return $scope.firstName.split("").reverse().join("")+" " +$scope.lastName.split("").reverse().join("");
    }  
    
})