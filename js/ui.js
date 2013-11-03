var UI = (function() {
	
	// Variables privées
	var direction;	
	
	// Méthodes privées
	var pInit = function() {
		
		$( document ).on( 'keydown', function( e ) {
			e.preventDefault();
            
			switch( e.keyCode ) {
				case 38 :
				direction = 'top';
				break;
				
				case 40 :
				direction = 'bottom';
				break;
				
				case 37 :
				direction = 'left';
				break;
				
				case 39 :
				direction = 'right';
				break;
			}
			$.publish( 'UI/moveTo', [ direction ] );
		});
	}
	
	return {
		
		// Variables publiques
		
		
		// Méthodes publiques
		init : pInit
	}
})();
