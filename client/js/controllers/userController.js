callback_app.controller("userController",function($scope, $location, $routeParams, moment, $window, logRegFactory) {


	$scope.user = logRegFactory.getUser();


})