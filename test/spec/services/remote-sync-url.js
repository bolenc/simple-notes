'use strict';

describe('Service: remoteSyncUrl', function () {

  // load the service's module
  beforeEach(module('pbtestApp'));

  // instantiate service
  var remoteSyncUrl;
  beforeEach(inject(function (_remoteSyncUrl_) {
    remoteSyncUrl = _remoteSyncUrl_;
  }));

  it('should do something', function () {
    expect(!!remoteSyncUrl).toBe(true);
  });

});
