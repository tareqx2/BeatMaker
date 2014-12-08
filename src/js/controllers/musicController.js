beatMakerModule.controller('musicController',['$scope',function ($scope) {

	$scope.playTracks = function(){
		var startTime =  sounds.context.currentTime;
		var tempo = 120; // BPM (beats per minute)
		var eighthNoteTime = (60 / tempo) / 2;

		for(var note = 1;note < $scope.number;note++){
			for(var track = 0; track < $scope.tracks.length;track++){
				var id = $scope.tracks[track].notes[note];
				if(id>=0)
				{
					var soundName = ($.grep($scope.instruments, function(e){ return e.id == id; }))[0].name;
					var buffer = sounds.clips[soundName].buffer;
					var time = startTime +(note/8) * 8 * eighthNoteTime;
					playSound(buffer,time);
				}
			}
		}
	}

	function playSound(buffer, time) {
	    var source = sounds.context.createBufferSource();
	    source.buffer = buffer;
	    source.connect(sounds.context.destination);
	    if (!source.start)
	      source.start = source.noteOn;

	    source.start(time);

  	}
}]);