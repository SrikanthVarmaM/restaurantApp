'use strict';

foodMeApp.controller('MenuController',
    function MenuController($scope, $routeParams, Restaurant, cart) {

  $scope.restaurant = {
      "id"    : "angular",
      "description" : "Angular Restaurant",
	  "name" : "Restaurant 1",
	  "price" : 5,
	  "rating" : 2,
	  menuItems: [{
		name: 'Item A',
		price: '250'
	  }, {
		name: 'Item B',
		price: '350'
	  }]
    };
  $scope.cart = cart;

});
