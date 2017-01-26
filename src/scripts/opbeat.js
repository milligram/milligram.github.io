(() => {
	'use strict'

	if (window.location.hostname === 'localhost') return

	const appId = '39e235ed58'
	const orgId = 'bfc2d2b1867d4ade86c9030c6985cfa2'

	function opbeat (i, s, o, g, r, a, m, n) {
		n = s.createElement(o)
		n.async = 1
		n.src = g
		n.setAttribute('data-org-id', r)
		n.setAttribute('data-app-id', a)
		m = s.getElementsByTagName(o)[document.querySelectorAll(o).length - 1]
		m.parentNode.insertBefore(n, m)
	}

	opbeat(window, document, 'script', 'https://d3tvtfb6518e3e.cloudfront.net/3/opbeat.min.js', orgId, appId)
})()
