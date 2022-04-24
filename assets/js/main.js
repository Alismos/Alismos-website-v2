/* Menu show and Hidden */
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

/* Menu show */

// Validate if constant exists
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

/* Menu Hidden */

// Validate if constant exists
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/* ==================== REMOVE MENU MOBILE ==================== */
const navLink = document.querySelectorAll('.nav__link')

function linkAction () {
  console.log('in')
  const navMenu = document.getElementById('nav-menu')
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* ==================== ACCORDION SKILLS ==================== */
const skillsContent = document.getElementsByClassName('skills__content')
const skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills () {
  const itemClass = this.parentNode.className

  for (let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skills__content skills__close'
  }

  if (itemClass === 'skills__content skills__close') {
    this.parentNode.className = 'skills__content skills__open'
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener('click', toggleSkills)
})

/* ==================== QUALIFICATION TABS ==================== */
const tabs = document.querySelectorAll('[data-target]')
const tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach(tabContent => {
      tabContent.classList.remove('qualification__active')
    })
    target.classList.add('qualification__active')

    tabs.forEach(tab => {
      tab.classList.remove('qualification__active')
    })
    tab.classList.add('qualification__active')
  })
})
