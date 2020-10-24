console.log('Welcome to my portfolio site')
/* eslint-disable */
function menuToggle () {
  /* eslint-enable */
  var x = document.getElementById('myNavtoggle')
  if (x.className === 'navtoggle') {
    x.className += ' responsive'
  } else {
    x.className = 'navtoggle'
  }
}
