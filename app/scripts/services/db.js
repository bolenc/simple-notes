'use strict';

/**
 * @ngdoc service
 * @name pbtestApp.db
 * @description
 * # db
 * Factory in the pbtestApp.
 */
angular.module('pbtestApp')
  .factory('db', ['$rootScope', 'designDocName', 'Notifications', 'pouchDB', 'remoteSyncUrl', function ($rootScope, designDocName, Notifications, pouchDB, remoteSyncUrl) {
    var db = pouchDB('db', {auto_compaction: true});

    db.changes({
      since: 'now',
      live: true
    }).on('change', function(changed) {
      $rootScope.$emit('dbChange', changed.id);
      Notifications.info('Synchronizing...', changed);
    });

    function syncError(err) {
      Notifications.error('PouchDB sync error ' + err);
    }

    var opts = {live: true, retry: true};
    db.replicate.to(remoteSyncUrl, opts, syncError);
    db.replicate.from(remoteSyncUrl, opts, syncError);

    //Create type index
    var newDoc = {
      _id: '_design/' + designDocName,
      views: {
        by_type: {
          map: function (doc) { emit(doc.type); }.toString()
        }
      }
    };

    function createIndices(doc) {
      db.put(doc).then(function() {
        Notifications.info('Indices created');
      }).catch(function (err) {
        Notifications.error('Error creating indices', err);
      });
    }

    db.get(newDoc._id)
      .then(function(doc) {
        doc.views = newDoc.views;
        createIndices(doc);
      })
      .catch(function() {
        createIndices(newDoc);
      });

    return db;
  }]);
