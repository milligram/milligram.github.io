;(() => {
  'use strict'

  const $description = document.querySelector('.description')
  const $download = document.querySelector('.download')
  if (!$description || !$download) return

  const request = new window.XMLHttpRequest()

  request.open(
    'GET',
    `//raw.githubusercontent.com/milligram/milligram/master/package.json`,
    true,
  )
  request.onload = onload
  request.send()

  function onload () {
    if (this.status < 200 && this.status >= 400) {
      console.error('[error] There was a connection error of some sort')
      return
    }

    const version = JSON.parse(this.response).version || ''
    $description.innerHTML = `${
      $description.innerHTML
    } <br><i><small>${$description.getAttribute(
      'data-version',
    )} v${version}</small></i>`
    $download.setAttribute(
      'href',
      `https://github.com/milligram/milligram/archive/v${version}.zip`,
    )
  }
})()
