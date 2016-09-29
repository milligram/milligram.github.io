
// Popover
// ––––––––––––––––––––––––––––––––––––––––––––––––––

;(() => {

	'use strict';

	var i,
		href,
		$popoverLinks = document.querySelectorAll('[data-popover]'),
		$popovers	= document.querySelectorAll('.popover'),
		$anchors = document.querySelectorAll('.navigation a');

	for (i = 0; i < $popoverLinks.length; i++) $popoverLinks[i].addEventListener('click', openPopover);

	document.addEventListener('click', closePopover);

	// Close Popover
	function closePopover(event) {
		for (i = 0; i < $popovers.length; i++) $popovers[i].classList.remove('popover-open');
	}

	// Open Popover
	function openPopover(event) {
		event.preventDefault();
		if (document.querySelector(this.getAttribute('href')).classList.contains('popover-open')) {
			document.querySelector(this.getAttribute('href')).classList.remove('popover-open');
		}
		else {
			closePopover();
			document.querySelector(this.getAttribute('href')).classList.add('popover-open');
		}
		event.stopImmediatePropagation();
	}

	// Change url in `localhost`
	if (window.location.hostname !== 'localhost') return;
	for (i = 0; i < $anchors.length; i++) {
		if ( $anchors[i].href.match(/milligram.github.io/g) ) $anchors[i].href = $anchors[i].href.replace('https://milligram.github.io/', '');
	}

})();
