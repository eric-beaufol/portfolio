var Portfolio = ( function() {
	
	// Variables privées
	var pageList = [],
	root = $( '.wrapper' ),
	node = 'ul',
	secondaryNode = 'li',
	path = [ 0 ];
	
	// Méthodes privées
	var pInit = function() {
		// On remplit 'pageList' avec toutes les pages du site
		iterativePager( root, pageList );
		console.log( pageList );
		UI.init();
		Cube.init();
		$.subscribe( 'UI/moveTo', moveTo );
	};
	
	var iterativePager = function( root, array ) {
		var list = root.children( node ).children( secondaryNode );
		
		for( var i = 0; i < list.length; i++ ) {
			var currentNode = $( list[ i ] );
			
			if( currentNode.children( node ).length > 0 ) {
				array[ i ] = [];
				iterativePager( currentNode, array[ i ] );
			} else {
				array[ i ] = currentNode;
			}
		}
	};
	
	var moveTo = function( e, dir ) {
		var currentPage, nextPage = pageList.slice( 0 ), nextPath = path.slice( 0 );
		
		currentPage = pageList[ path ];
		if( dir == 'left' ) nextPath.length > 1 ? nextPath.pop() : nextPath;
		if( dir == 'right' ) nextPath.push( 0 );
		if( dir == 'bottom' ) nextPath[ nextPath.length - 1 ]++;
		if( dir == 'top' ) nextPath[ nextPath.length - 1 ] > 0 ? nextPath[ nextPath.length - 1 ]-- : nextPath;
		
		var l = path.length > nextPath.length ? path.length : nextPath.length;		
		for( var i = 0; i < l; i++ ) {
			if( i < path.length ) currentPage = pageList[ path[ i ] ];
			if( i < nextPath.length ) nextPage = nextPage[ nextPath[ i ] ];
		}
		
		if( typeof nextPage !== 'undefined' ) {
			path = nextPath;
			
			if( Array.isArray( nextPage ) ) nextPage = nextPage[ 0 ];
			
			Cube.refresh( currentPage, nextPage, dir );
			currentPage = nextPage;
			console.log( $( currentPage ).children( 'h2' ).text() );
		}
	}
	
	return {
		// Variables publiques
		
		// Méthodes publiques
		init : function() {
			pInit();
		}
	}
})();
