/*angular.module('meanrestaurant').directive('restaurantRating', restaurantRating);

function restaurantRating(){
	return{
		restrict: 'E',
		template: '<span ng-repeat="star in vm.stars track by $index" class="glyphicon glyphicon-star">{{ star }}</span>',
		bindToController: true,
		controller: 'RestaurantController',
		controllerAs: 'vm',
		scope: {
			stars: '@'
		}
	}
}*/

angular.module('meanrestaurant').component('restaurantRating', {
	bindings: {
		stars: '='
	},
	template: '<span ng-repeat="star in vm.stars track by $index" class="glyphicon glyphicon-star">{{ star }}</span>',
	controller: 'RestaurantController',
	controllerAs: 'vm'	
});