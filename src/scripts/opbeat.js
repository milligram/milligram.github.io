
// Opbeat
// ––––––––––––––––––––––––––––––––––––––––––––––––––

(() => {

	'use strict';

	if (window.location.port === '3000') return;

	const appId = '39e235ed58';
	const orgId = 'bfc2d2b1867d4ade86c9030c6985cfa2';

	((i, s, o, g, r, a, m, n) => {
		n = s.createElement(o);
		n.async = 1;
		n.src = g;
		n.setAttribute('data-org-id', r);
		n.setAttribute('data-app-id', a);
		m = s.getElementsByTagName(o)[document.querySelectorAll(o).length - 1];
		m.parentNode.insertBefore(n, m);
	})(window, document, 'script', 'bower_components/opbeat-js/opbeat.min.js', orgId, appId);

})();
