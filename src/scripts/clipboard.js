(() => {
	'use strict'

	if (!ClipboardJS) return

	const $snippets = document.querySelectorAll('.code:not(.lang-md) .code-content')

	for (let index = 0; index < $snippets.length; index++) {
		$snippets[index].insertAdjacentHTML('afterend', `<button class="button--clipboard" data-clipboard-action="copy" title="Copy"><img src="https://clipboardjs.com/assets/images/clippy.svg" alt="Copy"></button>`)
		$snippets[index].nextElementSibling.setAttribute('data-clipboard-text', parserContent($snippets[index].innerHTML))
	}

	const clipboards = new ClipboardJS('.button--clipboard')
	clipboards.on('success', event => {
		event.clearSelection()
		event.trigger.classList.add('tooptip--clipboard')
		setTimeout(() => {
			event.trigger.classList.remove('tooptip--clipboard')
		}, 500)
	})
	clipboards.on('error', event => {
		console.error('[clipboard]', event.trigger)
	})

	function parserContent (content) {
		return content
			.replace(/\$ /g, '')
			.replace(/<!--(.*?)-->/g, '')
			.replace(/\/\* (.*?)\/\ */g, '')
			.replace(/\n\s*\n/g, '\n')
			.trim()
	}
})()
