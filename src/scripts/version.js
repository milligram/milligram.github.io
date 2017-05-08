(() => {
	'use strict'

	const $description = document.querySelector('.description')
	const $download = document.querySelector('.download')
	const request = new window.XMLHttpRequest()
	const repository = 'milligram/milligram'
	let version

	function onload () {
		if (this.status < 200 && this.status >= 400) console.error('[error] There was a connection error of some sort')
		version = JSON.parse(this.response).version
		if ($description) $description.innerHTML = `${$description.innerHTML} <br><i><small>Currently v${version}</small></i>`
		$download.setAttribute('href', `https://github.com/${repository}/archive/v${version}.zip`)
	}

	if (!$description || !$download) return

	request.open('GET', `//cdn.rawgit.com/${repository}/master/package.json`, true)
	request.onload = onload
	request.send()
})()
