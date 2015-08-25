'use strict';

/**
 * @ngdoc overview
 * @name pbtestApp
 * @description
 * # pbtestApp
 *
 * Main module of the application.
 */
angular
  .module('pbtestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'pouchdb',
    'angular-momentjs'
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
      .when('/sidebar', {
        templateUrl: 'views/sidebar.html',
        controller: 'SidebarCtrl'
      })
      .when('/navbar', {
        templateUrl: 'views/navbar.html',
        controller: 'NavbarCtrl'
      })
      .when('/edit', {
        templateUrl: 'views/edit.html',
        controller: 'EditCtrl'
      })
      .when('/edit/:id', {
        templateUrl: 'views/edit.html',
        controller: 'EditCtrl'
      })
      .when('/view/:id', {
        templateUrl: 'views/view.html',
        controller: 'ViewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('AppCtrl', ['$scope', function($scope) {
    $scope.layout = {
      navbarUrl: 'views/navbar.html',
      sidebarUrl: 'views/sidebar.html'
    };
  }]);
