angular.module('punto73').controller('formularioController', ['$scope', 'databaseService', '$localStorage', function ($scope, databaseService, $localStorage) {
    $scope.dangerAlert = false;
    $scope.guardarDatos = function () {
      $scope.array = $localStorage.misDatos;
      if (!$scope.array) {
        $scope.array = [$scope.data];
      } else {

        if ($scope.array.length < 10) {
          $scope.array.push($scope.data);
        } else {
          $scope.dangerAlert = true;
        }
      }
      databaseService.insert($scope.array);
      $scope.data = {};
    };
    $scope.array = $localStorage.misDatos;

  }]);
