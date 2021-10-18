export function getElement(dataJs, target = document) {
  return target.querySelector('[data-js=' + dataJs + ']')
}

export function getAllElements(dataJs, target = document) {
  return target.querySelectorAll('[data-js=' + dataJs + ']')
}
