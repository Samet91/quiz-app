import { getElement } from './utility.js'

export function setupCharacterCount() {
  const questionElement = getElement('question')
  const smallText = getElement('smalltext')
  const amountLeft = getElement('amountLeft')
  const maxLength = questionElement.getAttribute('maxlength')

  updateAmountLeft(maxLength)
  smallText.classList.remove('hidden')

  questionElement.addEventListener('input', () => {
    updateAmountLeft(maxLength - questionElement.value.length)
  })

  /*Add answer */
  const answerElement = getElement('answer')
  const smallText2 = getElement('smalltext2')
  const amountLeft2 = getElement('amountLeft2')
  const maxLength2 = answerElement.getAttribute('maxlength')

  updateAmountLeft2(maxLength2)
  smallText2.classList.remove('hidden')

  answerElement.addEventListener('input', () => {
    updateAmountLeft2(maxLength2 - answerElement.value.length)
  })

  function updateAmountLeft(value) {
    amountLeft.innerText = value
  }
  function updateAmountLeft2(value) {
    amountLeft2.innerText = value
  }
}
