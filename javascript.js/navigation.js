import { getElement } from './cards.js'
import { getAllElements } from './cards.js'

const all = getAllElements('body')

all.forEach(body => {
  const pageHome = getElement('home-home', body)
  const pageBookmark = getElement('bookmark-home', body)
  const pageCreate = getElement('create-home', body)
  const pageProfile = getElement('profile-home', body)

  const buttonHome = getElement('home-button', body)
  const buttonBookmark = getElement('bookmark-button', body)
  const buttonCreate = getElement('create-button', body)
  const buttonProfile = getElement('profile-button', body)

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
})

export function pageRemove(page) {
  page.classList.remove('hidden')
}

export function pageAdd(page) {
  page.classList.add('hidden')
}

export function addActive(icon) {
  icon.classList.add('bookmark--active')
}

export function removeActive(icon) {
  icon.classList.remove('bookmark--active')
}
