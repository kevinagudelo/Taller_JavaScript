angular.module('punto73').service('databaseService', ['$localStorage', function ($localStorage) {
    /*
     this.insert = function (array) {
     $localStorage.misDatos = array;
     };
     */
    let database = new Promise((resolve, reject) => {
      this.insert = array => {
        resolve(array);
        reject(array);
      };
    });
    database
            .then(response => $localStorage.misDatos = response)
            .catch(error => console.error(error));

    //

  }]);

//Hay estan las dos formas jajajaj