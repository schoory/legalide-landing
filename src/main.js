import './assets/styles/global.sass';

// Scroll handler for navbar
const handleDocumentScroll = (event) => {
  const navbar = document.querySelector('.nav')
  if (document.body.scrollTop > 25) {
    navbar.classList.add('nav_scrolled')
  } else {
    navbar.classList.remove('nav_scrolled')
  }
}
document.body.addEventListener('scroll', handleDocumentScroll)

const navBurger = document.querySelector('.nav__burger')
if (!!navBurger) {
  navBurger.addEventListener('click', () => {
    if (window.innerWidth <= 800) {
      const navbar = document.querySelector('.nav')
      if (navbar.classList.contains('nav_active')) {
        navbar.classList.remove('nav_active')
      } else {
        navbar.classList.add('nav_active')
      }
    }
  })
}