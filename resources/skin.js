/**
 * Forest Skin JavaScript
 * Provides interactive enhancements for the Forest MediaWiki skin
 */

( function () {
	'use strict';

	// Smooth scroll for anchor links
	function initSmoothScroll() {
		var links = document.querySelectorAll( 'a[href^="#"]' );

		links.forEach( function ( link ) {
			link.addEventListener( 'click', function ( e ) {
				var targetId = this.getAttribute( 'href' ).substring( 1 );

				if ( !targetId ) {
					return;
				}

				var targetElement = document.getElementById( targetId );

				if ( targetElement ) {
					e.preventDefault();
					targetElement.scrollIntoView( {
						behavior: 'smooth',
						block: 'start'
					} );
				}
			} );
		} );
	}

	// Initialize when DOM is ready
	if ( document.readyState === 'loading' ) {
		document.addEventListener( 'DOMContentLoaded', function () {
			initSmoothScroll();
		} );
	} else {
		initSmoothScroll();
	}

}() );
