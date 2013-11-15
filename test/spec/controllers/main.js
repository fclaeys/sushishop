'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('SushishopApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should add sushi into cart', function () {
      var sushi = {name:"Sushi thon", price: 5, img: "img_sushi_thon.png"};

      scope.addToCart(sushi);
      expect(scope.shoppingCart.sushies.length).toBe(1);
      expect(scope.shoppingCart.sushies[0].name).toBe(sushi.name);
  });

it('should remove sushi from cart',function(){
    var sushi = {name:"Sushi thon", price: 5, img: "img_sushi_thon.png"};
    scope.addToCart(sushi);

    scope.removeFromCart(sushi);
    expect(scope.shoppingCart.sushies.length).toBe(0);
  });

});
