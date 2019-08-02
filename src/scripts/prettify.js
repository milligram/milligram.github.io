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
})()
