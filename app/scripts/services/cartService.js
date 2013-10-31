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
                cart.sushies.push(sushi);
            }
        }
  });
