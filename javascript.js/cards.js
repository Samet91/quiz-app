const cards = getAllElements('card') /*function >> Transfer value*/

cards.forEach(card => {
  /*toggle bookmark*/
  const bookmark = getElement('bookmark', card)
  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('bookmark--active')
  })

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

export function getAllElements(dataJs, target = document) {
  return target.querySelectorAll('[data-js=' + dataJs + ']')
}

export function getElement(dataJs, target = document) {
  return target.querySelector('[data-js=' + dataJs + ']')
}
