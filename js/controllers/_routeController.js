app.config(function($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		templateUrl : '../templates/default.html',
        controller: 'homeController'
	}).when('/detail/:id/:title', {
		templateUrl : '../templates/detail.html',
        controller: ''
	}).otherwise({
		redirectTo : '/'
	});
    
    $locationProvider.html5Mode(true); 
});
