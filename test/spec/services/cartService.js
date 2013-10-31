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

  it('should add sushi into cart', function () {
      var sushi = {name:"Sushi thon", price: 5, img: "img_sushi_thon.png"};

      Cartservice.add(sushi);
      expect(Cartservice.getCart().sushies.length).toBe(1);
      expect(Cartservice.getCart().sushies[0]).toBe(sushi);
  });

});
