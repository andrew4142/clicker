var ClickerApp = angular.module('ClickerApp');

ClickerApp.controller("ErrorController", function ($http, $routeParams, $location) {
	
	$http({method:'GET', url:'http://clicker.dev/api/clickByid?id=' + $routeParams.id}).
		success(function(data) {
			if(data.bad_domain){
				window.setTimeout(function(){window.location = "http://google.com"},5000);
			}
		})
});

