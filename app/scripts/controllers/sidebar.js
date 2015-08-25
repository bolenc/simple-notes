'use strict';

/**
 * @ngdoc function
 * @name pbtestApp.controller:SidebarCtrl
 * @description
 * # SidebarCtrl
 * Controller of the pbtestApp
 */
angular.module('pbtestApp')
  .controller('SidebarCtrl', function ($scope, $rootScope, Notes, Notifications) {
    function loadSidebar() {
      $scope.docs = Notes.all();

      $scope.docs.$promise.catch(function(err) {
        Notifications.error(err);
      });
    }

    loadSidebar();

    $rootScope.$on('dbChange', function(data) {
      loadSidebar();
      console.log('dbChange', data);
    });
  });
