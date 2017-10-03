angular.module('punto73').controller('formularioController', ['$scope', 'databaseService', '$localStorage', function ($scope, database, $localStorage) {

    $scope.data = {};
    $scope.successAlert = true;

    $scope.guardarDatos = function () {
      database.insert($scope.data);
      $scope.successAlert = false;
      $scope.misDatos = $localStorage.misDatos;
    };

  }]);