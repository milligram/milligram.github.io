;(() => {
  'use strict'

  if (
    'serviceWorker' in window.navigator &&
    window.location.protocol === 'https:'
  ) {
    window.navigator.serviceWorker.register('/service-worker.js')
  }
})()
