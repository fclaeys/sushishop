'use strict';

angular.module('SushishopApp')
  .service('Cartservice', function Cartservice() {
    // AngularJS will instantiate a singleton by calling "new" on this function

        var cart = {
            sushies : [],
            total : 0
        };

        var filterSushiByName = function(sushi){
            return function(elt){
                return elt.name == sushi.name;
            };
        };

        return {
            getCart: function(){
                return cart;
            },
            add: function(sushi){
                var inShoppingCart = cart.sushies.filter(filterSushiByName(sushi));

                if(inShoppingCart.length == 0){
                    var itemToAdd= angular.copy(sushi);
                    angular.extend(itemToAdd, {quantity: 1});
                    cart.sushies.push(itemToAdd);
                }else{
                    inShoppingCart[0].quantity += 1;
                }

                cart.total += sushi.price;
            },
            remove: function(sushi, quantity){
                var inShoppingCart = cart.sushies.filter(filterSushiByName(sushi));
                var index = cart.sushies.indexOf(inShoppingCart[0]);
                var priceToDecrease = sushi.price;

                if (!angular.isUndefined(quantity)) {
                    inShoppingCart[0].quantity -= quantity;
                    priceToDecrease *= quantity;
                } else {
                    priceToDecrease *= inShoppingCart[0].quantity;
                    inShoppingCart[0].quantity -= inShoppingCart[0].quantity;
                    
                }

                if (inShoppingCart[0].quantity <= 0) {
                    if(index > -1){
                        cart.sushies.splice(index,1);
                    }
                }

                cart.total -= priceToDecrease;
            }
        }
  });
