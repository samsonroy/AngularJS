var myApp=angular.module('myApp',[]).controller('myController',function($scope){
    $scope.firstName="krishna";
    $scope.lastName="prasad";
    $scope.getFullName=function(){
        return $scope.firstName + " " + $scope.lastName;
    }
    
    $scope.reverseName=function(){
        var tmp=$scope.firstName;
        $scope.firstName=$scope.lastName;
        $scope.lastName=tmp;
    }
})