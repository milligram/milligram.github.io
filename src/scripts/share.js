
// Share Dialog
// ––––––––––––––––––––––––––––––––––––––––––––––––––

;(() => {

	'use strict';

	var i,
		$shareButtons = document.querySelectorAll('.share-dialog');

	if (!$shareButtons && window.innerWidth < 1200) return;

	for (i = 0; i < $shareButtons.length; i++) {
		$shareButtons[i].addEventListener('click', function(event) {
			event.preventDefault();
			window.open(this.href, 'Share Dialog', `menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=650,height=450,top=${screen.height/2-450/2},left=${screen.width/2-650/2}`);
		});
	}

})();
