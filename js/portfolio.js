var Portfolio = ( function() {
	// Variables privées
	var elm, currentPage, 
    currentSection, nextSection, 
    isPlaying = false;
	
	// Méthodes privées
	var pInit = function( pElm ) {
		// On remplit 'pageList' avec toutes les pages du site
		UI.init();
		
		elm = pElm;
		currentPage = $( elm.find( 'li:first' ) ).addClass( 'front' );
		//$( '.container' ).css({ 'width' : document.width, 'height' : document.height });
        
		$.subscribe( 'UI/moveTo', moveTo );
        $( 'body' ).on( 'click', function() {
            elm.removeClass();
        });
        /*
        var styleSheetList = document.styleSheets;
        for( var i = 0; i < styleSheetList[ 0 ].cssRules.length; i++ ) {
            var CSSRule = styleSheetList[ 0 ].cssRules[ i ];
            console.log( CSSRule.selectorText );
            
            if( CSSRule.selectorText == 'li.front' ) {
                CSSRule.style.webkitTransform = 'rotateY(0deg) translateZ(' + document.width / 2 + 'px)';
            } else if( CSSRule.selectorText == 'li.back' ) {
                CSSRule.style.webkitTransform = 'rotateY(180deg) translateZ(' + document.width / 2 + 'px)';
            } else if( CSSRule.selectorText == 'li.top' ) {
                CSSRule.style.webkitTransform = 'rotateX(90deg) translateZ(' + document.height / 2 + 'px)';
                console.log( CSSRule.style.webkitTransform );
            } else if( CSSRule.selectorText == 'li.bottom' ) {
                CSSRule.style.webkitTransform = 'rotateX(-90deg) translateZ(' + document.height / 2 + 'px)';
            } else if( CSSRule.selectorText == 'li.left' ) {
                CSSRule.style.webkitTransform = 'rotateY(-90deg) translateZ(' + document.width / 2 + 'px)';
            } else if( CSSRule.selectorText == 'li.right' ) {
                CSSRule.style.webkitTransform = 'rotateY(90deg) translateZ(' + document.width / 2 + 'px)';
            } else if( CSSRule.selectorText == 'li.vertical-flip' ) {
                CSSRule.style.webkitTransform = 'rotateY(0deg) translateZ(' + document.height / 2 + 'px)';
            }
        }
        */
	};
	
	var moveTo = function( e, dir ) {
        
        if( !isPlaying ) {
            
            var nextPage;
            
            switch( dir ) {
                
                case 'left' :
                nextPage = currentPage.prev( 'li' );
                break;
                
                case 'right' :
                nextPage = currentPage.next( 'li' );
                break;
                
                case 'top' :
                nextPage = currentPage.parent( 'ul' ).prev( 'ul' ).children( 'li:nth-child(1)' );
                break;
                
                case 'bottom' :
                nextPage = currentPage.parent( 'ul' ).next( 'ul' ).children( 'li:nth-child(1)' );
                break;
            }
            
            if( nextPage.length ) {
                isPlaying = true;
                
                if( dir == 'top' || dir == 'bottom' ) {
                    console.log( currentPage.css( '-webkit-transform' ) );
                    currentPage.removeClass().addClass( 'vertical-flip' );                    
                }
                elm.removeClass().addClass( dir );
                nextPage.removeClass().addClass( dir );
                
                setTimeout( function() {
                    elm.removeClass();
                    nextPage.removeClass().addClass( 'front' );
                    currentPage.removeClass();
                    currentPage = nextPage;
                    isPlaying = false;
                }, 500 );
            }
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
