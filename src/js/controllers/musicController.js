beatMakerModule.controller('musicController',['$scope',function ($scope) {
	
	$scope.playTracks = function(){
	var startTime = context.currentTime + 0.100;
	var tempo = 80; // BPM (beats per minute)
	var eighthNoteTime = (60 / tempo) / 2;

	}
}]);