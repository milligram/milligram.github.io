(() => {
	'use strict'

	const $description = document.querySelector('.description')
	const $download = document.querySelector('.download')
	const request = new window.XMLHttpRequest()

	function onload () {
		if (this.status < 200 && this.status >= 400) {
			console.error('[error] There was a connection error of some sort')
			return
		}

		const version = JSON.parse(this.response).version || ''
		if ($description) $description.innerHTML = `${$description.innerHTML} <br><i><small>${$description.getAttribute('data-version')} v${version}</small></i>`
		if ($download) $download.setAttribute('href', `https://github.com/milligram/milligram/archive/v${version}.zip`)
	}

	if (!$description || !$download) return

	request.open('GET', `//raw.githubusercontent.com/milligram/milligram/master/package.json`, true)
	request.onload = onload
	request.send()
})()
