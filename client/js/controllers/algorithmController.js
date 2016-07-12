callback_app.controller("algorithmController",function($scope, $location, $routeParams, moment, $window, algorithmFactory, logRegFactory) {

	$scope.addAlgorithm = function(algorithm){
		algorithm._user = logRegFactory.getUser();
		console.log(algorithm);
		algorithmFactory.addAlgorithm(algorithm);
	}

})