angular.module('meanrestaurant', ['ngRoute', 'angular-jwt']).config(config).run(run);

function config($httpProvider, $routeProvider) {
   $httpProvider.interceptors.push('AuthInterceptor');

  $routeProvider
    .when('/', {
      templateUrl: 'angular-app/main/main.html',
      access: {
        restricted: false
      }
    })
    .when('/restaurants', {
      templateUrl: 'angular-app/restaurant-list/restaurants.html',
      controller: RestaurantsController,
      controllerAs: 'vm',
      access: {
        restricted: false
      }
    })
    .when('/restaurant/:id', {
      templateUrl: 'angular-app/restaurant-display/restaurant.html',
      controller: RestaurantController,
      controllerAs: 'vm',
      access: {
        restricted: false
      }
    })
    .when('/register', {
      templateUrl: 'angular-app/register/register.html',
      controller: RegisterController,
      controllerAs: 'vm',
      access: {
        restricted: false
      }
    })
     .when('/profile', {
      templateUrl: 'angular-app/profile/profile.html',
      controllerAs: 'vm',
      access: {
        restricted: true
      }
    })
     .otherwise({
      redirectTo: '/'
    });
   
}

function run($rootScope, $location, $window, AuthFactory) {
  $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
    if (nextRoute.access !== undefined && nextRoute.access.restricted &&
      !$window.sessionStorage.token && !AuthFactory.isLoggedIn) {
      event.preventDefault();  // Prevent naviagation to restricted paths for logged out users
      $location.path('/');  // Redirect them to the homepage
    }
  });
}