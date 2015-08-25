'use strict';

/**
 * @ngdoc function
 * @name pbtestApp.controller:ViewCtrl
 * @description
 * # ViewCtrl
 * Controller of the pbtestApp
 */
angular.module('pbtestApp')
  .controller('ViewCtrl', ['$location', '$rootScope', '$routeParams', '$scope', 'Notes', function ($location, $rootScope, $routeParams, $scope, Notes) {
    if (! $routeParams.id) {
      $location.replace();
      $location.url('/');
    }
    $scope.edit = function() {
      $location.url('/edit/' + $routeParams.id);
    };

    function loadNotes() {
      $scope.doc = Notes.get($routeParams.id);
    }

    loadNotes();

    $rootScope.$on('dbChange', function(event, changedId) {
      if (changedId === $routeParams.id) {
        loadNotes();
      }
    });

  }]);
