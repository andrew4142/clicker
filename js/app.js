var ClickerApp = angular.module('ClickerApp', ["ngRoute"])
	.config(function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/click?pararm1&pararm2',
			{
				templateUrl: 'views/click.html',
				controller: 'ClickController'
			});
		$routeProvider
			.when('/click',
			{
				templateUrl: 'views/click.html',
				controller: 'ClickController'
			});
		$routeProvider
			.when('/success/:id',
			{
				templateUrl: 'views/success.html',
				controller: 'SuccessController'
			});
		$routeProvider
			.when('/error/:id',
			{
				templateUrl: 'views/error.html',
				controller: 'ErrorController'
			});
		$routeProvider
			.when('/index',
			{
				templateUrl: 'views/index.html',
				controller: 'IndexController'
			});
		$routeProvider.otherwise({redirectTo: '/index'});
		$locationProvider.html5Mode(true);
});

