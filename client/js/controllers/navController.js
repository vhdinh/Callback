callback_app.controller("navController",function($scope, $location, $routeParams, moment, $window, logRegFactory) {

		$scope.user = logRegFactory.getUser();

		$scope.logout = function(){
			logRegFactory.logout();
			$window.location.reload();
			$location.url("/")
		}

})