
angular.module('punto73').controller('formularioController', ['$scope', 'databaseService', '$localStorage', '$webSql', function ($scope, databaseService, $localStorage, $webSql, ) {
    $scope.noRepeat = false;
    $scope.noRepeat2 = false;
    $scope.dangerAlert = false;
    $scope.db = $webSql.openDatabase('Contact', '1.0', 'Contact List', 2 * 1024 * 1024);

    $scope.db.createTable('user', {

      "name": {
        "type": "TEXT",
        "null": "NOT NULL"

      },
      "surname": {
        "type": "TEXT",
        "null": "NOT NULL"
      },
      "phone": {
        "type": "INTEGER"
      },
      "address": {
        "type": "TEXT"
      },
      "email": {
        "type": "TEXT"
      },
      "created": {
        "type": "TIMESTAMP",
        "null": "NOT NULL",
        "default": "CURRENT_TIMESTAMP" // default value
      }
    });
    if ($localStorage.misDatos) {
      $scope.array = $localStorage.misDatos;
    }
    $scope.prueba = function () {

      $scope.db.selectAll("user").then(function (results) {
        $scope.users = [];
        for (var i = 0; i < results.rows.length; i++) {
          $scope.users.push(results.rows.item(i));
        }
        console.log($scope.users.email);
      })

//      $scope.db.select("user", {
//        "rowid": {
//          "value": '1'
//        }
//      }).then(function (results) {
//        $scope.users = [];
//        for (i = 0; i < results.rows.length; i++) {
//          $scope.users.push(results.rows.item(i));
//        }
//        console.log($scope.users[0].name);
//      })


    };
    $scope.guardarDatos = function () {

      $scope.db.insert('user', {"name": $scope.data.name, "surname": $scope.data.surname, 'phone': $scope.data.phone, "address": $scope.data.address, "email": $scope.data.email});
      $scope.array = [$scope.data];

      databaseService.insert($scope.array);
      $scope.data = {};
    };
    $scope.array = $localStorage.misDatos;

  }]);
