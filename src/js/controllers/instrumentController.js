beatMakerModule.controller('instrumentController',['$scope','$upload','loadInstruments',function ($scope ,$upload, loadInstruments) {

	$scope.playSound = function(instrument)
	{
		sounds.clips[instrument.name].play();
	}
	$scope.removeSound = function(instrument)
	{
		sounds.clips[instrument.name].unregister();
		var index = $scope.instruments.map(function(e) { return e.id; }).indexOf(instrument.id);
		$scope.$parent.instruments.splice(index,1);
	}

    $scope.upload = function($files) {
    	console.log($scope.files);
	    for (var i = 0; i < $scope.files.length; i++) {
	      var file = $scope.files[i];
	        $scope.$parent.upload = $upload.upload({
	        url: '/api/test/upload',
	        method: 'POST',
	        data: {myObj: $scope.files[i]},
	        file: file,

	      }).progress(function(evt) {
	        $scope.$parent.progressBarStyle = {"width":parseInt(100.0 * evt.loaded / evt.total)};
	        $scope.$parent.progressSection = {"display":"block"};
	      }).success(function(data, status, headers, config) {
	        $scope.$parent.progressBarStyle = {"width":"100%"};
	        $scope.$parent.instruments[$scope.instruments.length] = {
	        	id: $scope.instruments.length,
	        	name: config.file.name,
	        	src: "/sounds/"+config.file.name
	        };
	        sounds.createClip().register($scope.instruments[$scope.instruments.length-1].id).load($scope.instruments[$scope.instruments.length-1].src, function(soundClip){
			});

	      }).error(function(data, status, headers, config){
	      		$scope.$parent.errorMessage = {"display":"block"};
	      		$scope.$parent.progressBarStyle = {"width":"0%"};
	      });
	  	}
  	};

}]);