'use strict';

describe('Service: Cartservice', function () {

  // load the service's module
  beforeEach(module('SushishopApp'));

  // instantiate service
  var Cartservice;
  beforeEach(inject(function (_Cartservice_) {
    Cartservice = _Cartservice_;
  }));

  it('should do something', function () {
    expect(!!Cartservice).toBe(true);
  });

});
