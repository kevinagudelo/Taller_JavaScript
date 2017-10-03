angular.module('punto73').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('index', {
      url: '/',
      controller: 'indexController',
      templateUrl: 'app/template/index.html',
      resolve: {
        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load('app/controller/indexController.js');
          }]
      }
    }).state('form', {
      url: '/formulario',
      controller: 'formularioController',
      templateUrl: 'app/template/formulario.html',
      resolve: {
        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load('app/controller/formularioController.js');
          }]
      }
    });
    $urlRouterProvider.otherwise('/');
  }]);