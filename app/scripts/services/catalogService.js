'use strict';

angular.module('SushishopApp')
  .service('Catalogservice', function Catalogservice() {
    var sushies = [
            {id: 1, name:"Sushi thon", price: 5, img: "img_sushi_thon.png"},
            {id: 2, name:"Sushi plethore", price: 7, img: "img_sushi_plethore.png"},
            {id: 3, name:"Sushi saumon", price:6, img: "img_sushi_saumon.png"},
            {id: 4, name:"Sushi thon rouge", price:6, img: "img_sushi_thon_rouge.png"},
            {id: 5, name:"Sushi quirielle", price:16, img: "img_sushi_quirielle.png"}];

    return {
        getSushies: function(){
            return sushies;
        }
    }
  });
