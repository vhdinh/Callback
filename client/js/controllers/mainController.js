callback_app.controller("mainController",function($scope, $location, $routeParams, moment, $window, logRegFactory) {

	$scope.user = logRegFactory.getUser();

	$scope.users = logRegFactory.getUsers(function(data){
		$scope.allUsers = data
	});


})