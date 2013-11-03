var Portfolio = ( function() {
	// Variables privées
	var elm, currentPage, nextPage, 
    currentSection, nextSection, 
    isPlaying = false;
	
	// Méthodes privées
	var pInit = function( pElm ) {
		// On remplit 'pageList' avec toutes les pages du site
		UI.init();
		
		elm = pElm;
		currentPage = $( elm.find( 'li:first' ) ).addClass( 'front' );
		
		$.subscribe( 'UI/moveTo', moveTo );
	};
	
	var moveTo = function( e, dir ) {
    
        if( !isPlaying ) {
            switch( dir ) {
                
                case 'left' :
                nextPage = currentPage.prev( 'li' );
                if( nextPage.length ) {
                    nextPage.addClass( 'left' );
                    elm.removeClass().addClass( 'left' );
                }
                break;
                
                case 'right' :
                nextPage = currentPage.next( 'li' );
                if( nextPage.length ) {
                    nextPage.removeClass().addClass( 'right' );
                    elm.addClass( 'right' );
                }
                break;
                
                case 'top' :
                nextPage = currentPage.parent( 'ul' ).prev( 'ul' ).children( 'li:nth-child(1)' );
                if( nextPage.length ) {
                    nextPage.addClass( 'topToFront' );
                }
                break;
                
                case 'bottom' :
                nextPage = currentPage.parent( 'ul' ).next( 'ul' ).children( 'li:nth-child(1)' );
                if( nextPage.length ) {
                    nextPage.addClass( 'bottomToFront' );
                }
                break;
            }
            
            if( nextPage.length ) {
                isPlaying = true;
                setTimeout( function() {
                    elm.removeClass().addClass( 'front' );
                    nextPage.removeClass().addClass( 'front' );
                    currentPage.removeClass();
                    currentPage = nextPage;
                    isPlaying = false;
                }, 1000 );
            }
        }
        
        console.log( currentPage.text() );
	}
	
	return {
		// Variables publiques
		
		// Méthodes publiques
		init : function( elm ) {
			pInit( elm );
		}
	}
})();
