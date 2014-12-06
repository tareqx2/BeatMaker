beatMakerModule.controller('trackController',['$scope',function ($scope) {
	$scope.tracks = [];
	$scope.editingTrack = false;
	$scope.number = 49;
	$scope.getNumber = function(num) {
	    return new Array(num);   
	}
	$scope.getMeasureClass = function(i){
		if(i==0)
			return "measure hidden";
		if(i%8==0)
			return "measure end";
		if(i%2!=0)
			return "measure_alternate";
		else
			return "measure";
	}

	$scope.onDrop = function(data,event){
		var trackNumber = $(event.currentTarget.parentElement.parentElement).data('id');
		var noteNumber = $(event.currentTarget).data('id');
		$scope.tracks[trackNumber].notes[noteNumber] = data['json/instrument'].id; 
		$(event.currentTarget.children[0]).css("background-color",'red');
	}

	$scope.addTrack = function(){
		$scope.tracks[$scope.tracks.length] = {
			'id': $scope.tracks.length,
			'name': "track" + ($scope.tracks.length),
			'editing': false,
			'notes': []
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
}]);
