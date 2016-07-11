callback_app.factory("logRegFactory", function($http, $location, $sessionStorage){
	var factory = {}
	// factory.user = {}
	$sessionStorage.currUser;

	factory.login = function(user, callback){
		$http.post("/login", user).success(function(output){
			console.log("loggin in success", output[0])
			$sessionStorage.currUser = output[0]
			callback(output[0])
		})
	}

	

	// factory.register = function(user, callback){
	// 	$http.post("/register", user).success(function(output){
	// 		console.log("LOING FAGSFSDF", output)
	// 		$sessionStorage.currUser = output
	// 		callback(output)
	// 	})
	// }

	factory.register = function(user, callback){
		console.log("IN FACTORY",user)
		$http.post("/register", user).success(function(user_info){
			$sessionStorage.currUser = user_info
			console.log("AFTER REGISTERING SUCCESS", user_info)
			callback(user_info)
		})
	}

	factory.getUser = function(){
		return $sessionStorage.currUser;
	}
	factory.logout = function(){
		$sessionStorage.currUser = null;
		// $location.url("/")

	}


	return factory
})