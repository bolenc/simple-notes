'use strict';

/**
 * @ngdoc function
 * @name pbtestApp.controller:EditCtrl
 * @description
 * # EditCtrl
 * Controller of the pbtestApp
 */
angular.module('pbtestApp')
  .controller('EditCtrl', ['$location', '$routeParams', '$scope', 'Notes', 'Notifications', function ($location, $routeParams, $scope, Notes, Notifications) {
    $scope.doc = {};
    $scope.working = {};

    if ($routeParams.id) {
      $scope.doc = Notes.get($routeParams.id);
    }

    $scope.save = function() {
      Notes.save($scope.doc).then(function(data) {
        // Redirect to view mode
        $location.url('/view/' + $scope.doc._id);
        $location.replace();
      }).catch(function(err) {
        Notifications.error('Error saving note:' + err);
      });
    };

    $scope.delete = function() {
      Notes.remove($scope.doc).then(function() {
        // Redirect to view mode
        $location.url('/');
        $location.replace();
      }).catch(function(err) {
        Notifications.error('Error deleting note:' + err);
      });
    };
  }]);
