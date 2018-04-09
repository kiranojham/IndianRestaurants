angular.module('meanrestaurant').controller('RestaurantsController', RestaurantsController);

function RestaurantsController(restaurantDataFactory){
	var vm = this;
	vm.title = 'MEAN Restaurants';
	restaurantDataFactory.restaurantList().then(function(response){
		vm.restaurants = response.data;
	});
}