'use strict';

/**
 * @ngdoc service
 * @name pbtestApp.notifications
 * @description
 * # notifications
 * Service in the pbtestApp.
 */
angular.module('pbtestApp')
  .service('Notifications', ['$log', function ($log) {
    var Types = {
      Success: 'Success',
      Error: 'Error',
      Info: 'Info',
      Warning: 'Warning'
    };

      this.list = [];

      this.info = function () {
        this.add(arguments[0], Types.Info);
        $log.log.apply($log, arguments);
      };

      this.error = function () {
        this.add(arguments[0], Types.Error);
        $log.error.apply($log, arguments);
      };

      this.add = function (msg, type) {
        this.list.push({message: msg, type: type});
      };
  }]);
