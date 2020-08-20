;(() => {
  'use strict'

  if (!window.ClipboardJS) return

  const $snippets = document.querySelectorAll('.code:not(.lang-md)')

  for (let index = 0; index < $snippets.length; index++) {
    $snippets[index].insertAdjacentElement(
      'beforebegin',
      createElementFromString(
        '<button class="button--clipboard" data-clipboard-action="copy" title="Copy"><img src="https://clipboardjs.com/assets/images/clippy.svg" alt="Copy"></button>',
      ),
    )
    $snippets[index].previousElementSibling.setAttribute(
      'data-clipboard-text',
      parserContent($snippets[index].firstChild.innerHTML),
    )
  }

  const clipboards = new window.ClipboardJS('.button--clipboard')
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

  function createElementFromString (htmlString) {
    var div = document.createElement('div')
    div.innerHTML = htmlString.trim()
    return div.firstChild
  }
})()
