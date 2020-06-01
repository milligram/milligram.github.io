;(() => {
  'use strict'

  if (window.environment === 'development') return

  const url = 'https://milligram.io'
  const $anchors = document.querySelectorAll('.navigation .popover-link')

  for (let index = 0; index < $anchors.length; index++) {
    if ($anchors[index].href.match(/#/g))
      $anchors[index].href = `${url}/#${$anchors[index].href.split('#')[1]}`
  }
})()
