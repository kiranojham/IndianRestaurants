angular.module('meanrestaurant').factory('restaurantDataFactory', restaurantDataFactory);

function restaurantDataFactory($http){
	return {
		restaurantList : restaurantList,
		restaurantDisplay : restaurantDisplay,
		postReview : postReview
	};

	function restaurantList(){
		return $http.get('/api/restaurants').then(complete).catch(failed);
	}

	function restaurantDisplay(id){
		return $http.get('/api/restaurants/'+ id).then(complete).catch(failed);
	}

	function postReview(id, review){
		return $http.post('/api/restaurants/' + id +'/reviews', review).then(complete).catch(failed);
	}

	function complete(reponse){
		return reponse;
	}

	function failed(error){
		console.log(error.statusText);
	}
}