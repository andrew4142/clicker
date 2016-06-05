var ClickerApp = angular.module('ClickerApp');

ClickerApp.controller("SuccessController", function ($scope, $http, $routeParams) {
	
	$http({method:'GET', url:'http://clicker.dev/api/clickByid?id=' + $routeParams.id}).
		success(function(data) {
			$scope.clickInfo = data;
		})
});
