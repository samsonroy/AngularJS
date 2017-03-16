var myApp=angular.module('LunchCheck',[]).controller('myController',function($scope){
    $scope.mySplit = function(name, nb) {
    var array = name.split(',');
    return array[nb];
}

      })