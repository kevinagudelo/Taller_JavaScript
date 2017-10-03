angular.module('punto73').service('databaseService', ['$localStorage', '$webSql', function ($localStorage) {

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
