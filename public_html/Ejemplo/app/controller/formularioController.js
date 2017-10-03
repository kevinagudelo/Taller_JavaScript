angular.module('punto73').controller('formularioController', ['$scope', 'databaseService', function ($scope, database) {

    $scope.data = {};
    $scope.successAlert = false;

    $scope.guardarDatos = function () {
      database.insert($scope.data);
      $scope.successAlert = true;
    };

  }]);