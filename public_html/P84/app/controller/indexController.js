angular.module('punto73').controller('formularioController', ['$scope', function ($scope) {

    $scope.edit = function (persona) {
      for (let data of $scope.array) {
        if (persona.email == data.email) {
          $scope.data = data;
          $scope.dangerAlert = false;

        }

      }
    };
    $scope.reset = function () {
      delete $scope.data;
    };
    $scope.guardarDatos = function () {
      $scope.noRepeat = false;
      $scope.noRepeat2 = false;
      $scope.dangerAlert = false;

      if (!$scope.array) {
        $scope.array = [$scope.data];
      } else {
        $scope.array.forEach((person) => {
          for (let email in person) {
            if (person[email] === $scope.data.email) {
              $scope.dangerAlert = true;
              $scope.noRepeat = true;

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
          console.log("no entra");
        }
      }
      ;
      $scope.data = {};
    };


  }]);
