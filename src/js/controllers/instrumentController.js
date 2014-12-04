beatMakerModule.controller('instrumentController',['$scope','$upload','loadInstruments',function ($scope ,$upload, loadInstruments) {
	$scope.instruments = loadInstruments;
	$scope.source = null;
	$scope.progressSection = {"display":"none"};
	$scope.progressBarStyle = {"width":"0%"};
	$scope.errorMessage = {"display":"none"}
	$scope.uploadError = "File too large (files must be less than 1MB)";

	sounds = new WebAudiox.GameSounds();
    // load the sounds
    for(var i = 0; i < $scope.instruments.length;i++){
    	sounds.createClip().register($scope.instruments[i].name).load($scope.instruments[i].src, function(soundClip){
		});
    }

	$scope.playSound = function(instrument)
	{
		sounds.clips[instrument.name].play();
	}

    $scope.upload = function($files) {
    	console.log($scope.files);
	    for (var i = 0; i < $scope.files.length; i++) {
	      var file = $scope.files[i];
	      $scope.upload = $upload.upload({
	        url: '/api/test/upload',
	        method: 'POST',
	        data: {myObj: $scope.files[i]},
	        file: file,

	      }).progress(function(evt) {
	        $scope.progressBarStyle = {"width":parseInt(100.0 * evt.loaded / evt.total)};
	        $scope.progressSection = {"display":"block"};
	      }).success(function(data, status, headers, config) {
	        $scope.progressBarStyle = {"width":"100%"};
	        $scope.instruments[$scope.instruments.length] = {
	        	name: config.file.name,
	        	src: "/sounds/"+config.file.name
	        };
	        sounds.createClip().register($scope.instruments[$scope.instruments.length-1].name).load($scope.instruments[$scope.instruments.length-1].src, function(soundClip){
			});

	      }).error(function(data, status, headers, config){
	      		$scope.errorMessage = {"display":"block"};
	      		$scope.progressBarStyle = {"width":"0%"};
	      });
	  	}
  	};

}]);