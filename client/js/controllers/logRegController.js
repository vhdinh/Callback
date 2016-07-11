callback_app.controller("logRegController",function($scope, $location, $routeParams, moment, $window, logRegFactory) {

	$scope.login = function(user){
		$scope.alerts = [];
		if(!user){
			$scope.alerts.push("Please fill out both Username and Password")
		}
		else if(!user.username || !user.password){
			$scope.alerts.push("Please fill out both Username and Password")
		}
		else{
			logRegFactory.login(user, function(data){
					if(data){
					$window.location.reload();
						$location.url("/")

					}
					else{
						$scope.alerts.push("Invalid login")
					}
				})	
		}
	}


	$scope.register = function(user){
		$scope.alerts = [];
		if(!user){
			$scope.alerts.push("Form is empty")
		}
		else if(!user.first_name || !user.last_name || !user.username || !user.email || !user.password || !user.password2){
			$scope.alerts.push("Please fill out all fields in form")
		}
		else if(user.password != user.password2){
			$scope.alerts.push("Passwords are not matching")
		}
		else{
			logRegFactory.register(user, function(data){
				if("alert" in data){
					var name = "alert"
					$scope.alerts.push(data[name])
					$location.url("/register")

				}
				else{
					$window.location.reload();
					$location.url("/")
				}

			})
		}

	}



})