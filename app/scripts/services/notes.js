'use strict';

/**
 * @ngdoc service
 * @name pbtestApp.notes
 * @description
 * # notes
 * Service in the pbtestApp.
 */
angular.module('pbtestApp')
  .service('Notes', ['$moment', '$q', 'db', 'designDocName', function ($moment, $q, db, designDocName) {
    var docType = 'Notes';

    this.get = function (id) {
      var defer = $q.defer(),
          result = {$promise: defer.promise};

      db.get(id).then(function(data) {
        _.extend(result, data);
        defer.resolve(result);
      }).catch(function (err) {
        defer.reject(err);
      });

      return result;
    };

    this.all = function () {
      var defer = $q.defer(),
          result = [];
      result.$promise = defer.promise;

      db.query(designDocName + '/by_type', {key: docType, include_docs: true}).then(function (data) {
        result.push.apply(result, _.pluck(data.rows, 'doc'));
        defer.resolve(result);
      }).catch(function (err) {
        defer.reject(err);
      });

      return result;
    };

    this.save = function (doc) {
      if (! angular.isDefined(doc._id)) {
        doc._id = $moment().format();
      }

      if (! angular.isDefined(doc.type)) {
        doc.type = docType;
      }

      doc = _.omit(doc, '$promise');

      doc.$promise = db.put(doc);

      return doc.$promise;
    };

    this.remove = function(doc) {
      return db.remove(doc);
    };
  }]);
