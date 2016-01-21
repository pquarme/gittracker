app.config(function($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		templateUrl : '../templates/default.html',
        controller: 'homeController',
        reloadOnSearch: false
	}).when('/detail/:id/:title', {
		templateUrl : '../templates/detail.html',
        controller: 'detailController'
	}).otherwise({
		redirectTo : '/'
	});
    
    $locationProvider.html5Mode(true); 
});
