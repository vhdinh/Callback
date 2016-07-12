callback_app.factory("algorithmFactory", function($http, $location, $sessionStorage){
	var factory = {}
	factory.addAlgorithm = function(algorithm){
		$http.post('/addAlgorithm', algorithm).success(function(data){
			
		})
	}

	return factory
})