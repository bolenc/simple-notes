# Data-Oriented Angularjs

An experiment in replacing service calls with databases and synchronization.

This project was generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

## Dependencies

You'll need something implementing the CouchDB sync API, such as the [Couchbase Sync Gateway](http://www.couchbase.com/nosql-databases/downloads). You'll need at least version 1.1.0 to avoid CORS issues. The included couchbase-sync.json should give a good base for experimentation.
