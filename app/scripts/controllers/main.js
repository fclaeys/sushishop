'use strict';

angular.module('SushishopApp')
  .controller('MainCtrl', function ($scope, Catalogservice, Cartservice) {
    $scope.catalogue = Catalogservice.getSushies();

    $scope.shoppingCart = Cartservice.getCart();

    $scope.addToCart = function(sushi){
        Cartservice.add(sushi);
    }

    $scope.removeFromCart= function(sushi, quantity){
      Cartservice.remove(sushi, quantity);
    }

  });
