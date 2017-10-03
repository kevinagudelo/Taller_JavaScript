angular.module('punto73').controller('LogController', ['$scope', '$log', function ($scope, $log) {
    $scope.$log = $log;
    $scope.message = 'Hello, this is my number 73 script in JavaScript with AngularJS and Bootstrap';
  }]);