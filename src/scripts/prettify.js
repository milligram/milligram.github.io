
// Prettify
// ––––––––––––––––––––––––––––––––––––––––––––––––––

;(() => {

	'use strict';

	var i,
		$codeSnippets = document.querySelectorAll('.code-content'),
		entityMapObject = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '/': '&#x2F;' };

	for (i = 0; i < $codeSnippets.length; i++) $codeSnippets[i].innerHTML = escapeHtml($codeSnippets[i].innerHTML);

	function escapeHtml(string) {
		return String(string).replace(/[&<>"'\/]/g, (index) => {
			return entityMapObject[index];
		});
	}

})();
