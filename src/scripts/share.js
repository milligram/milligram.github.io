
// Share Dialog
// ––––––––––––––––––––––––––––––––––––––––––––––––––

(() => {

	'use strict';

	const $shareButtons = document.querySelectorAll('.share-dialog');
	let i;

	if (!$shareButtons && window.innerWidth < 1200) return;

	for (i = 0; i < $shareButtons.length; i++) {
		$shareButtons[i].addEventListener('click', click);
	}

	function click(event) {
		event.preventDefault();
		window.open(this.href, 'Share Dialog', `menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=650,height=450,top=${screen.height/2-450/2},left=${screen.width/2-650/2}`);
	};

})();
