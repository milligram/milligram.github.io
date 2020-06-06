;(() => {
  'use strict'

  const $codeSnippets = document.querySelectorAll('.code-content')
  const entityMapObject = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
  }

  for (let index = 0; index < $codeSnippets.length; index++) {
    $codeSnippets[index].innerHTML = escapeHtml($codeSnippets[index].innerHTML)
  }

  function escapeHtml (string) {
    return String(string).replace(/[&<>"']/g, index => {
      return entityMapObject[index]
    })
  }
})()
