beatMakerModule.controller('dataController',['$scope','loadInstruments',function ($scope,loadInstruments) {
	//Instrument Controller
	$scope.instruments = loadInstruments;
	$scope.source = null;
	$scope.progressSection = {"display":"none"};
	$scope.progressBarStyle = {"width":"0%"};
	$scope.errorMessage = {"display":"none"}
	$scope.uploadError = "File too large (files must be less than 1MB)";

	//Track Controller
	$scope.tracks = [];
	$scope.editingTrack = false;
	$scope.number = 49;

	sounds = new WebAudiox.GameSounds();
    // load the sounds
    for(var i = 0; i < $scope.instruments.length;i++){
    	sounds.createClip().register($scope.instruments[i].name).load($scope.instruments[i].src, function(soundClip){
		});
    }

}]);