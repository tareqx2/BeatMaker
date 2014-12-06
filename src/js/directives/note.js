beatMakerModule.directive('note',function(){
	return {
		restrict: 'AE',
		template: '<div class="note fourth">[4'+
					'<div class="note eigth">8'+
						'<div class="note sixteenth">16</div>'+
					'8</div>'+
				  '4]</div>'

	};
});
