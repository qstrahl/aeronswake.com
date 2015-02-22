'use strict';

/**
 * @ngdoc overview
 * @name aeronswakecomApp
 * @description
 * # aeronswakecomApp
 *
 * Main module of the application.
 */
angular
  .module('aeronswakecomApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
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
      .when('/music', {
        templateUrl: 'views/music.html',
        controller: 'MusicCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function ($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, route) {
      $rootScope.$evalAsync(function () {
        angular.element('[ng-view]').attr('ng-view', route.loadedTemplateUrl.replace(/views\/(.+)\.html/i, '$1'));
      });
    });
  });
