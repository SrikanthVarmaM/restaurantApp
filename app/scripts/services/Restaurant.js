'use strict';

foodMeApp.factory('Restaurant', function($resource) {
  //return $resource('/asds/data-folder/Restaurants.data.json', {id: 1});
  return $resource('data-folder/Restaurants.data.json', {}, {
		query: { method: 'GET', params: {}, isArray:true }
	});
  /*var _restaurants = [];
 
    var _getRestaurants = function(){
 
        $http.get("/asds/data-folder/Restaurants.data.json")
            .then(function(results){
                //Success
                angular.copy(results.data, _restaurants); //this is the preferred; instead of $scope.movies = result.data
            }, function(results){
                //Error
            })
    }
 
    return{
        restaurants: _restaurants,
        getRestaurants: _getRestaurants
    };*/
});
