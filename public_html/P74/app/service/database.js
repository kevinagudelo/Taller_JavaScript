angular.module('punto73').service('databaseService', ['$localStorage', function ($localStorage) {
//    
//    this.insert = function (data) {
//      $localStorage.misDatos = data;
//    };

    this.insert = function (data) {
      return new Promise(function (resolve, reject) {
        $localStorage.misDatos = data;
        resolve(true);
      });
    };

  }]);