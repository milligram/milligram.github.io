
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

	((l, o, a, d, e, r) => {
		e = o.createElement(a);
		e.async = 1;
		e.src = d;
		r = o.getElementsByTagName(a)[document.querySelectorAll(a).length - 1];
		r.parentNode.insertBefore(e, r);
	})(window, document, 'script', 'bower_components/code-prettify/src/run_prettify.js');

})();
