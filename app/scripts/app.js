'use strict';

/**
 * @ngdoc overview
 * @name klasskrigApp
 * @description
 * # klasskrigApp
 *
 * Main module of the application.
 */
angular
  .module('klasskrigApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
