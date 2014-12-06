beatMakerModule.controller('trackController',['$scope',function ($scope) {
	$scope.tracks = [];
	$scope.editingTrack = false;
	$scope.number = 50;
	$scope.getNumber = function(num) {
	    return new Array(num);   
	}
	$scope.getMeasureClass = function(i){
		if(i%2!=0)
			return "measure_alternate";
		else
			return "measure";
	}

	$scope.addTrack = function(){
		$scope.tracks[$scope.tracks.length] = {
			'id': $scope.tracks.length,
			'name': "track" + ($scope.tracks.length),
			'editing': false
		}
	}

	$scope.editTrackName = function(track,event){
		$scope.tracks[track.id].editing = true;
		event.preventDefault();
	}

	$scope.finishEdit = function(){
		for(var i = 0; i < $scope.tracks.length; i++){
			$scope.tracks[i].editing = false;
		}
	}

	$scope.onDragOver = function(event){
		var offsetx = event.offsetx;
		var offsety = event.offsety;

	}
}]);
