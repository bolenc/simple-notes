'use strict';

describe('Service: designDoc', function () {

  // load the service's module
  beforeEach(module('pbtestApp'));

  // instantiate service
  var designDoc;
  beforeEach(inject(function (_designDoc_) {
    designDoc = _designDoc_;
  }));

  it('should do something', function () {
    expect(!!designDoc).toBe(true);
  });

});
