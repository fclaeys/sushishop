'use strict';

angular.module('SushishopApp')
  .service('Catalogservice', function Catalogservice() {
    var sushies = [
            {name:"Sushi thon", price: 5, img: "img_sushi_thon.png"},
            {name:"Sushi plethore", price: 7, img: "img_sushi_plethore.png"},
            {name:"Sushi saumon", price:6, img: "img_sushi_saumon.png"},
            {name:"Sushi thon rouge", price:6, img: "img_sushi_thon_rouge.png"},
            {name:"Sushi quirielle", price:16, img: "img_sushi_quirielle.png"}];

    return {
        getSushies: function(){
            return sushies;
        }
    }
  });
