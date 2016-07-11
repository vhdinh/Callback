
var callback_app = angular.module("myApp", ["ngRoute", 'ngStorage', 'ui.bootstrap']);
callback_app.constant("moment", moment);

callback_app.config( function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl: "static/partials/main.html",
		controller: "mainController"
	})
	.when("/register", {
		templateUrl: "static/partials/register.html",
		controller: "logRegController"
	})
	.when("/login", {
		templateUrl: "static/partials/login.html",
		controller: "logRegController"
	})
	.otherwise({
		redirectTo: "/"
	})
})