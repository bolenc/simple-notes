'use strict';

/**
 * @ngdoc function
 * @name pbtestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pbtestApp
 */
angular.module('pbtestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
