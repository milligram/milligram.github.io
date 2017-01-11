(() => {

	'use strict';

	if (window.location.port === '3000') return;

	const url = 'https://milligram.github.io';
	const $anchors = document.querySelectorAll('.navigation .popover-link');
	let i;

	for (i = 0; i < $anchors.length; i++) {
		if ( $anchors[i].href.match(/#/g) ) $anchors[i].href = `${url}/#${$anchors[i].href.split('#')[1]}`;
	}

})();
