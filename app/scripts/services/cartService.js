'use strict';

angular.module('SushishopApp')
  .service('Cartservice', function Cartservice() {
    // AngularJS will instantiate a singleton by calling "new" on this function

        var cart = {
            sushies : []
        };

        return {
            getCart: function(){
                return cart;
            },
            add: function(sushi){
                var inShoppingCart = cart.sushies.filter(function(elt){
                    return elt.name == sushi.name;
                });

                if(inShoppingCart.length == 0){
                    var itemToAdd= angular.copy(sushi);
                    cart.sushies.push(sushi);
                }
            },
            remove: function(sushi){
               var index = cart.sushies.indexOf(sushi);
                if(index > -1){
                    cart.sushies.splice(index,1);
                }

            }
        }
  });
