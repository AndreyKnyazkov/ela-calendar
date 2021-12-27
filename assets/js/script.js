window.addEventListener('DOMContentLoaded', (e) => {



  function switcherAddRemoveActiveClass({
    theClass: theClass,
    activeClass: activeClass,
    index: index
  }) {
    document.querySelectorAll(`.${theClass}`).forEach(item => {
      item.classList.remove(`${activeClass}`)
    })
    document.querySelectorAll(`.${theClass}`)[index].classList.add(`${activeClass}`)
  }

  function switcher() {
    let currentEvent = 0;
    document.querySelectorAll('.all-event__switcher-item').forEach((item, index) => {
      item.addEventListener('click', e => {
        // exit if we clicked on something which exists now
        if (item.classList.contains('all-event__switcher-item_active')) return
        currentEvent = currentEvent === 0 ? 1 : 0
        
        switcherAddRemoveActiveClass({
          theClass: 'all-event__switcher-item',
          activeClass: 'all-event__switcher-item_active',
          index: index
        })

        switcherAddRemoveActiveClass({
          theClass: 'all-event-item-switcher-item',
          activeClass: 'all-event-item-switcher-item_active',
          index: index
        })

        switcherAddRemoveActiveClass({
          theClass: 'all-event__switcher-mobile-item',
          activeClass: 'all-event__switcher-mobile-item_active',
          index: index
        })

      })
    })
    document.querySelectorAll('.all-event__switcher-mobile-item').forEach((item, index) => {
      item.addEventListener('click', e => {
        currentEvent = currentEvent === 0 ? 1 : 0
        
        switcherAddRemoveActiveClass({
          theClass: 'all-event__switcher-mobile-item',
          activeClass: 'all-event__switcher-mobile-item_active',
          index: currentEvent
        })

        switcherAddRemoveActiveClass({
          theClass: 'all-event__switcher-item',
          activeClass: 'all-event__switcher-item_active',
          index: currentEvent
        })

        switcherAddRemoveActiveClass({
          theClass: 'all-event-item-switcher-item',
          activeClass: 'all-event-item-switcher-item_active',
          index: currentEvent
        })
      })
    })

  }

  switcher()
});