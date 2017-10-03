angular.module('punto73').controller('formularioController', ['$scope', 'databaseService', '$localStorage', function ($scope, database, $localStorage) {

    $scope.data = {};
    $scope.successAlert = false;

    $scope.guardarDatos = function () {
      database.insert($scope.data);
      //database.insert($scope.ls);
      $scope.successAlert = true;
      $scope.misDatos = $localStorage.misDatos;
    };
    $scope.reset = function () {
      $scope.successAlert = false;  
    };
  }]);