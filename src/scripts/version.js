
// Get Version
// ––––––––––––––––––––––––––––––––––––––––––––––––––

;(() => {

	'use strict';

	var version,
		$description 		= document.querySelector('.description'),
		$download 		= document.querySelector('.download'),
		request 			= new XMLHttpRequest();

	if (!$description || !$download) return;

	request.open('GET', '//raw.githubusercontent.com/milligram/milligram/master/package.json', true);
	request.onload = onload;
	request.send();

	function onload() {
		if (this.status < 200 && this.status >= 400) console.log('There was a connection error of some sort');
		version = JSON.parse( this.response ).version;
		if ($description) $description.innerHTML = `${$description.innerHTML} <br><i><small>Currently v${version}</small></i>`;
		$download.setAttribute('href', `https://github.com/milligram/milligram/archive/v${version}.zip`);
	};

})();
