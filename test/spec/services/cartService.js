'use strict';

describe('Service: Cartservice', function () {

  // load the service's module
  beforeEach(module('SushishopApp'));

  // instantiate service
  var Cartservice;
  var Catalogservice;
  beforeEach(inject(function (_Cartservice_,_Catalogservice_) {
    Cartservice = _Cartservice_;
    Catalogservice = _Catalogservice_;
  }));

  it('should do something', function () {
    expect(!!Cartservice).toBe(true);
  });

  it('should add sushi into cart', function () {
      var sushi = {name:"Sushi thon", price: 5, img: "img_sushi_thon.png"};

      Cartservice.add(sushi);
      expect(Cartservice.getCart().sushies.length).toBe(1);
      expect(Cartservice.getCart().sushies[0].name).toBe(sushi.name);
  });

  it('should remove sushi from cart',function(){
     var allSushies = Catalogservice.getSushies();

      Cartservice.add(allSushies[0]);


     var sushiWillBeDead = allSushies[0];

     Cartservice.remove(sushiWillBeDead);

      expect(Cartservice.getCart().sushies.length).toBe(0);
  });

  it('should\'nt add sushi twice',function(){
      var sushi = {name:"Sushi thon", price: 5, img: "img_sushi_thon.png"};

      Cartservice.add(sushi);
      Cartservice.add(sushi);

      expect(Cartservice.getCart().sushies.length).toBe(1);
      expect(Cartservice.getCart().sushies[0].name).toBe(sushi.name); 
  });

  it('remove sushi update quantity',function(){
      var sushi = {name:"Sushi thon", price: 5, img: "img_sushi_thon.png"};

      Cartservice.add(sushi);
      Cartservice.add(sushi);
      Cartservice.remove(sushi, 1);

      expect(Cartservice.getCart().sushies.length).toBe(1);
      expect(Cartservice.getCart().sushies[0].name).toBe(sushi.name);
      expect(Cartservice.getCart().sushies[0].quantity).toBe(1);
  });

  it('delete sushi with all quantity',function(){
      var sushi = {name:"Sushi thon", price: 5, img: "img_sushi_thon.png"};

      Cartservice.add(sushi);
      Cartservice.add(sushi);
      Cartservice.remove(sushi);

      expect(Cartservice.getCart().sushies.length).toBe(0);
  });

  it('should update quantity for sushi add twice ',function(){
      var sushi = {name:"Sushi thon", price: 5, img: "img_sushi_thon.png"};

      Cartservice.add(sushi);
      Cartservice.add(sushi);

      expect(Cartservice.getCart().sushies.length).toBe(1);
      expect(Cartservice.getCart().sushies[0].name).toBe(sushi.name);
      expect(Cartservice.getCart().sushies[0].quantity).toBe(2); 
  });

  it('Total is correctly computed when add sushi', function(){
      var sushi = {name:"Sushi thon", price: 5, img: "img_sushi_thon.png"};

      Cartservice.add(sushi);
      Cartservice.add(sushi);

      expect(Cartservice.getCart().total).toBe(10);
  });

  it('Total is correctly computed when add sushi', function(){
        var sushi = {name:"Sushi thon", price: 5, img: "img_sushi_thon.png"};

        Cartservice.add(sushi);
        Cartservice.add(sushi);
        Cartservice.add(sushi);
        Cartservice.add(sushi);
        Cartservice.remove(sushi);

        expect(Cartservice.getCart().total).toBe(0);
  });

});
