
var callback_app = angular.module("myApp", ["ngRoute", 'ngStorage', 'ui.bootstrap']);
callback_app.constant("moment", moment);

callback_app.config( function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl: "static/partials/main.html",
		controller: "mainController"
	})
	.otherwise({
		redirectTo: "/"
	})
})