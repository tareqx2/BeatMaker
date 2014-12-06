beatMakerModule.factory('loadInstruments', function() {

 	var instruments = [];
    
    instruments[0] = {
        'id': 0,
    	'name': "snare",
    	'src': "/sounds/snare.wav",
        'audioSource': {}
    }

    instruments[1] = {
        'id': 1,
    	'name': "Hi-hat",
   		'src': "/sounds/hihat.wav",
        'audioSource': {}
   	}
    
    instruments[2] = {
        'id': 2,
    	'name': "Bass",
    	'src': "/sounds/kick.wav",
        'audioSource': {}
    }
     
    return instruments;
});