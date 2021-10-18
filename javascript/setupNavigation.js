import { getElement } from './utility.js'

export function setupNavigation() {
  const pageHome = getElement('home-home')
  const pageBookmark = getElement('bookmark-home')
  const pageCreate = getElement('create-home')
  const pageProfile = getElement('profile-home')

  const buttonHome = getElement('home-button')
  const buttonBookmark = getElement('bookmark-button')
  const buttonCreate = getElement('create-button')
  const buttonProfile = getElement('profile-button')

  buttonHome.addEventListener('click', () => {
    pageRemove(pageHome)
    pageAdd(pageBookmark)
    pageAdd(pageCreate)
    pageAdd(pageProfile)

    addActive(buttonHome)
    removeActive(buttonBookmark)
    removeActive(buttonCreate)
    removeActive(buttonProfile)
  })

  buttonBookmark.addEventListener('click', () => {
    pageAdd(pageHome)
    pageRemove(pageBookmark)
    pageAdd(pageCreate)
    pageAdd(pageProfile)

    removeActive(buttonHome)
    addActive(buttonBookmark)
    removeActive(buttonCreate)
    removeActive(buttonProfile)
  })

  buttonCreate.addEventListener('click', () => {
    pageAdd(pageHome)
    pageAdd(pageBookmark)
    pageRemove(pageCreate)
    pageAdd(pageProfile)

    removeActive(buttonHome)
    removeActive(buttonBookmark)
    addActive(buttonCreate)
    removeActive(buttonProfile)
  })

  buttonProfile.addEventListener('click', () => {
    pageAdd(pageHome)
    pageAdd(pageBookmark)
    pageAdd(pageCreate)
    pageRemove(pageProfile)

    removeActive(buttonHome)
    removeActive(buttonBookmark)
    removeActive(buttonCreate)
    addActive(buttonProfile)
  })
}

function pageRemove(page) {
  page.classList.remove('hidden')
}

function pageAdd(page) {
  page.classList.add('hidden')
}

function addActive(icon) {
  icon.classList.add('bookmark--active')
}

function removeActive(icon) {
  icon.classList.remove('bookmark--active')
}
