var Portfolio = ( function() {
	// Variables privées
	elm, currentPage, nextPage, currentSection, nextSection;
	
	// Méthodes privées
	var pInit = function( pElm ) {
		// On remplit 'pageList' avec toutes les pages du site
		UI.init();
		Cube.init();
		
		elm = pElm;
		currentPage = $( elm.children( 'ul li' )[ 0 ] );
		
		$.subscribe( 'UI/moveTo', moveTo );
	};
	
	var moveTo = function( e, dir ) {
		switch( dir ) {
			
			case 'left' :
			nextPage = currentPage.prev( 'li' );
			if( nextPage != 'undefined' ) {
				
				currentPage.addClass( 'frontToRight' );
				nextPage.addClass( 'leftToFront' );
				
				currentPage = nextPage;
			}
			break;
			
			case 'right' :
			nextPage = currentPage.next( 'li' );
			if( nextPage != 'undefined' ) {
				
				currentPage.addClass( 'frontToRight' );
				nextPage.addClass( 'rightToFront' );
				
				currentPage = nextPage;
			}
			break;
			
			case 'top' :
			nextPage = currentPage.parent( 'ul' ).prev( 'ul' ).children( 'li:nth-child(1)' );
			if( nextPage != 'undefined' ) {
				
				currentPage.addClass( 'frontToBottom' );
				nextPage.addClass( 'topToFront' );
				
				currentPage = nextPage;
			}
			break;
			
			case 'bottom' :
			nextPage = currentPage.parent( 'ul' ).next( 'ul' ).children( 'li:nth-child(1)' );
			if( nextPage != 'undefined' ) {
				
				currentPage.addClass( 'frontToTop' );
				nextPage.addClass( 'bottomToFront' );
				
				currentPage = nextPage;
			}
			break;
		}
	}
	
	return {
		// Variables publiques
		
		// Méthodes publiques
		init : function( elm ) {
			pInit( elm );
		}
	}
})();
