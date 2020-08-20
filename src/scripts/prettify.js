;(() => {
  'use strict'

  const entityMapObject = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
  }

  const $codeSnippets = document.querySelectorAll('.code-content')

  for (let index = 0; index < $codeSnippets.length; index++) {
    if ($codeSnippets[index].parentNode.classList.contains('lang-html'))
      $codeSnippets[index].innerHTML = changeCommet(
        $codeSnippets[index].innerHTML,
      )
    $codeSnippets[index].innerHTML = escapeHTML($codeSnippets[index].innerHTML)
  }

  function escapeHTML (string) {
    return String(string).replace(
      /[&<>"']/g,
      caracter => entityMapObject[caracter],
    )
  }

  function changeCommet (string) {
    return String(string)
      .replace(/\/\*/g, '<!--')
      .replace(/\*\//g, '-->')
  }
})()
