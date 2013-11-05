var UI = (function() {
	
	// Variables privées
		
	
	// Méthodes privées
	var pInit = function() {
		
		$( document ).on( 'keydown', function( e ) {
            
            var direction;
            
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
            if( typeof direction != 'undefined' ) {
                e.preventDefault();
                $.publish( 'UI/moveTo', [ direction ] );
            }
		});
	}
	
	return {
		
		// Variables publiques
		
		
		// Méthodes publiques
		init : pInit
	}
})();
