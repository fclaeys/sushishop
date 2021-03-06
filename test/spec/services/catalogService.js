'use strict';

describe('Service: Catalogservice', function () {

  // load the service's module
  beforeEach(module('SushishopApp'));

  // instantiate service
  var Catalogservice;
  beforeEach(inject(function (_Catalogservice_) {
    Catalogservice = _Catalogservice_;
  }));

  it('should do something', function () {
    expect(!!Catalogservice).toBe(true);
  });

  it('should return catalog', function(){
    expect(Catalogservice.getSushies()).not.toBeNull();
    expect(Catalogservice.getSushies().length).toBeGreaterThan(0);
  });

});
