var ClickerApp = angular.module('ClickerApp', ["ngRoute"])
    .config(function($routeProvider, $locationProvider){
        $routeProvider
		.when('/click',
        {
            templateUrl:'views/click.html',
            controller:'ClickController'
        });
//        $routeProvider.when('/answer',
//        {
//            templateUrl:'views/answer.html',
//            controller:'AnswerController'
//        });
		$locationProvider.html5Mode(true);
});

