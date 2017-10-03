angular.module('punto73').controller('formularioController', ['$scope', 'databaseService', '$localStorage', function ($scope, databaseService, $localStorage) {
    $scope.dangerAlert = false;
    $scope.here = false;
$scope.guardarDatos = function () {
      $scope.array = $localStorage.misDatos;
      if (!$scope.array) {
        $scope.array = [$scope.data];
      } else {
        $scope.array.push($scope.data);
      }
      databaseService.insert($scope.array);
      $scope.successAlert = true;
      $scope.misDatos = $localStorage.misDatos;
      $scope.data = {};
    };

    $scope.datos = $localStorage.misDatos;

  }]);