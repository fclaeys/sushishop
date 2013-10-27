'use strict';

angular.module('sushishopApp')
  .controller('MainCtrl', function ($scope) {
    $scope.catalogue = [
        {name:"Sushi thon", price: 5, img: "img_sushi_thon.png"},
        {name:"Sushi plethore", price: 7, img: "img_sushi_plethore.png"},
        {name:"Sushi saumon", price:6, img: "img_sushi_saumon.png"},
        {name:"Sushi thon rouge", price:6, img: "img_sushi_thon_rouge.png"},
        {name:"Sushi quirielle", price:16, img: "img_sushi_quirielle.png"}];

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
        $scope.total += sushi.price;
    }

    $scope.removeFromCart= function(sushi){
      sushi.quantity--;
      if (sushi.quantity==0) {

      }
    };
    $scope.total = 0;


  });
