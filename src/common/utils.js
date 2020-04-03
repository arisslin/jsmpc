export const focusElementAfterLoad = element => {
  window.addEventListener('load', () => {
    element.current.focus()
  })
}

export function getKeyByName(pads, name) {
  return pads.reduce(
    (acc, cur) =>
      name === toLowerNoWhiteSpace(cur.name) ? acc + cur.key : acc,
    ''
  )
}

export function getPadNameByKey(pads, key) {
  return pads.reduce(
    (acc, curr) => (key === curr.key ? acc + curr.name : acc),
    ''
  )
}

export function stopPinchZooming(event) {
  // Stops the browser zooming when double tab on mobile devices
  event.preventDefault()
}

export function toLowerNoWhiteSpace(string) {
  string = String(string)
  return string.toLowerCase().replace(' ', '')
}

export const updateInArray = (array, data, index) => {
  return [...array.slice(0, index), data, ...array.slice(index + 1)]
}
