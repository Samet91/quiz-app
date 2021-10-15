/*one bookmark of home-page*/
const cards = getAllElements('card') /*function >> Transfer value*/

cards.forEach(card => {
  /*toggle bookmark*/
  const bookmark = getElement('bookmark', card)
  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('bookmark--active')
  })

  /*show button*/
  const showButton = getElement('card__button', card)
  const answer = getElement('card__text--answer', card)
  const textShow = getElement('show', card)
  const textHide = getElement('hide', card)

  showButton.addEventListener('click', () => {
    answer.classList.toggle('hidden')
    textShow.classList.toggle('hidden')
    textHide.classList.toggle('hidden')
  })
})

/*navigation*/
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
    pageHome.classList.remove('hidden')
    pageBookmark.classList.add('hidden')
    pageCreate.classList.add('hidden')
    pageProfile.classList.add('hidden')

    buttonHome.classList.add('bookmark--active')
    buttonBookmark.classList.remove('bookmark--active')
    buttonCreate.classList.remove('bookmark--active')
    buttonProfile.classList.remove('bookmark--active')
  })

  buttonBookmark.addEventListener('click', () => {
    pageHome.classList.add('hidden')
    pageBookmark.classList.remove('hidden')
    pageCreate.classList.add('hidden')
    pageProfile.classList.add('hidden')

    buttonHome.classList.remove('bookmark--active')
    buttonBookmark.classList.add('bookmark--active')
    buttonCreate.classList.remove('bookmark--active')
    buttonProfile.classList.remove('bookmark--active')
  })

  buttonCreate.addEventListener('click', () => {
    pageHome.classList.add('hidden')
    pageBookmark.classList.add('hidden')
    pageCreate.classList.remove('hidden')
    pageProfile.classList.add('hidden')

    buttonHome.classList.remove('bookmark--active')
    buttonBookmark.classList.remove('bookmark--active')
    buttonCreate.classList.add('bookmark--active')
    buttonProfile.classList.remove('bookmark--active')
  })

  buttonProfile.addEventListener('click', () => {
    pageHome.classList.add('hidden')
    pageBookmark.classList.add('hidden')
    pageCreate.classList.add('hidden')
    pageProfile.classList.remove('hidden')

    buttonHome.classList.remove('bookmark--active')
    buttonBookmark.classList.remove('bookmark--active')
    buttonCreate.classList.remove('bookmark--active')
    buttonProfile.classList.add('bookmark--active')
  })
})

function getAllElements(dataJs, target = document) {
  return target.querySelectorAll('[data-js=' + dataJs + ']')
}

function getElement(dataJs, target = document) {
  return target.querySelector('[data-js=' + dataJs + ']')
}
