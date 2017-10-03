angular.module('punto73').controller('formularioController', ['$scope', 'databaseService', '$localStorage', function ($scope, databaseService, $localStorage) {
    $scope.noRepeat = false;
    $scope.noRepeat2 = false;
    $scope.dangerAlert = false;
    if ($localStorage.misDatos) {
      $scope.array = $localStorage.misDatos;
    }
    $scope.guardarDatos = function () {
      if (!$scope.array) {
        $scope.array = [$scope.data];
      } else {
        $scope.array.forEach((person) => {
          for (let email in person) {
            if (person[email] === $scope.data.email) {
              $scope.dangerAlert = true;
              $scope.noRepeat = true

            }
          }
          for (let phone in person) {
            if (person[phone] === $scope.data.phone) {
              $scope.dangerAlert = true;
              $scope.noRepeat2 = true;

            }
          }
        });
        if (($scope.noRepeat == false) && ($scope.noRepeat2 == false)) {
          $scope.array.push($scope.data);
        } else {
          console.log("no entra")
        }
      }
      databaseService.insert($scope.array);
      $scope.data = {};
    };
    $scope.array = $localStorage.misDatos;

  }]);
