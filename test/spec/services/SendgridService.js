'use strict';

describe('Service: SendgridService', function () {

  // load the service's module
  beforeEach(module('lawyerEw'));

  // instantiate service
  var SendgridService;
  beforeEach(inject(function(_SendgridService_) {
    SendgridService = _SendgridService_;
  }));

  it('should do something', function () {
    expect(!!SendgridService).toBe(true);
  });

});
