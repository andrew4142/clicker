var ClickerApp = angular.module('ClickerApp');
ClickerApp.controller("ClickController", function ($scope, $http, $routeParams, $location) {
	
	var post_params = {remote_ref:remote_ref,
				remote_ua:remote_ua,
				remote_ip:remote_ip,
				param1:$routeParams.param1,
				param2:$routeParams.param2,
			};
	
	$http({method:'POST', url:'api/click', data:post_params}).
		success(function(data) {
			if(data.success){
				$location.url("/success/" + data.id);
			}
			else{
				console.log(data);
				$location.url("/error/" + data.id);
			}
		})
})

