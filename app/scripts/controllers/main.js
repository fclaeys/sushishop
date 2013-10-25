'use strict';

angular.module('sushishopApp')
  .controller('MainCtrl', function ($scope) {
    $scope.catalogue = [{ name: "Sushi thon", price: 5},
        {name:"Sushi plethore", price: 7},
        {name:"Sushi saumon", price:6},
        {name:"Sushi thon rouge", price:6}];

    $scope.shoppingCart = [];

    $scope.addToCart = function(sushi){
        var inShoppingCart = $scope.shoppingCart.filter(function(elt){
            return elt.name == sushi.name;
        });

        if(inShoppingCart.length == 0){
            var itemToAdd= angular.copy(sushi);
            angular.extend(itemToAdd, {quantity: 1});
            $scope.shoppingCart.push(itemToAdd);
        } else {
            inShoppingCart[0].price+=sushi.price;
            inShoppingCart[0].quantity+=1;
        }
    }

    $scope.removeFromCart= function(sushi){
      sushi.quantity--;
      if (sushi.quantity==0) {
1
      }
    };

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
