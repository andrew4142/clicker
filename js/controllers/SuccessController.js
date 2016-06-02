var ClickerApp = angular.module('ClickerApp');

ClickerApp.controller("SuccessController", function ($scope, $http) {
	
	$scope.test = {text:'test string'};
	$http({method:'GET', url:'http://api.clicker/hello'}).
		success(function(data) {
			$scope.test_query = data;
		})
})
