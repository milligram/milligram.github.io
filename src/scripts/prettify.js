(() => {
	'use strict'

	const $codeSnippets = document.querySelectorAll('.code-content')
	const entityMapObject = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '/': '&#x2F;' }
	let i

	for (i = 0; i < $codeSnippets.length; i++) $codeSnippets[i].innerHTML = escapeHtml($codeSnippets[i].innerHTML)

	function escapeHtml (string) {
		return String(string).replace(/[&<>"']/g, (index) => {
			return entityMapObject[index]
		})
	}

	((l, o, a, d, e, r) => {
		e = o.createElement(a)
		e.async = 1
		e.src = d
		r = o.getElementsByTagName(a)[document.querySelectorAll(a).length - 1]
		r.parentNode.insertBefore(e, r)
	})(window, document, 'script', '//cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js')
})()
