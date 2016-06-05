var ClickerApp = angular.module('ClickerApp');

ClickerApp.controller("IndexController", function ($scope, $http) {
	
	$scope.test = {text:'test string'};
	$http({method:'GET', url:'http://clicker.dev/api/allClicks'}).
		success(function(data) {
			$scope.clicks = data;
			$scope.sortType     = 'id'; // значение сортировки по умолчанию
			$scope.sortReverse  = false;  // обратная сортировка
			$scope.searchFish   = '';
		})
})


