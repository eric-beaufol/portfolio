var Cube = ( function() {
	
	var pInit = function( currentPage, nextPage, dir ) {
		
		$.subscribe( 'cube/moveTo', moveTo );
	}
	
	var moveTo = function( dir, currentPage, nextPage ) {
		
		switch( dir
		
	}
	
	return {
		init : function( currentPage, nextPage, dir ) {
			pInit( currentPage, nextPage, dir );
		},
		refresh : refresh
	}
	
})();
