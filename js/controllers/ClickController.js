var ClickerApp = angular.module('ClickerApp');
ClickerApp.controller("ClickController", function ($scope, $http, $routeParams) {
	
	console.log($routeParams);

	
	$http({method:'GET', url:'http://api.clicker/click'}).
		success(function(data) {
			console.log(data);
			$scope.test_query = data;
		})
})

