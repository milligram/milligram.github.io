;(() => {
  'use strict'

  const $popoverLinks = document.querySelectorAll('[data-popover]')
  const $popovers = document.querySelectorAll('.popover')

  for (let index = 0; index < $popoverLinks.length; index++) {
    $popoverLinks[index].addEventListener('click', openPopover)
  }

  document.addEventListener('click', closePopover)

  function closePopover (event) {
    for (let index = 0; index < $popovers.length; index++) {
      $popovers[index].classList.remove('popover-open')
    }
  }

  function openPopover (event) {
    event.preventDefault()
    if (
      document
        .querySelector(this.getAttribute('href'))
        .classList.contains('popover-open')
    ) {
      document
        .querySelector(this.getAttribute('href'))
        .classList.remove('popover-open')
    } else {
      closePopover()
      document
        .querySelector(this.getAttribute('href'))
        .classList.add('popover-open')
    }
    event.stopImmediatePropagation()
  }
})()
