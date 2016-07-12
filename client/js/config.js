
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
	.when("/account", {
		templateUrl: "static/partials/account.html",
		controller: "userController"
	})
	.when("/newAlgorithm",{
		templateUrl:"static/partials/newAlgorithm.html",
		controller: "algorithmController"
	})
	.otherwise({
		redirectTo: "/"
	})
})