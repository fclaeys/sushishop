'use strict';

angular.module('sushishopApp')
  .controller('MainCtrl', function ($scope) {
    $scope.catalogue = [{ name: "Sushi thon", price: 5},
        {name:"Sushi plethore", price: 7},
        {name:"Sushi saumon", price:6},
        {name:"Sushi thon rouge", price:6}];

    $scope.shoppingCart = [];

    $scope.addToCart = function(sushi){
        $scope.shoppingCart.push(sushi);
    }

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
