'use strict';

angular.module('SushishopApp')
  .controller('MainCtrl', function ($scope, Catalogservice, Cartservice) {
    $scope.catalogue = Catalogservice.getSushies();

    $scope.shoppingCart = [];

    $scope.addToCart = function(sushi){
        //Cartservice.add(sushi);
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
        $scope.total += sushi.price;
    }

    $scope.removeFromCart= function(sushi){
      sushi.quantity--;
      if (sushi.quantity==0) {

      }
    };
    $scope.total = 0;


  });
