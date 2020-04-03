export function toLowerNoWhiteSpace(string) {
  string = String(string)
  return string.toLowerCase().replace(' ', '')
}

export const updateInArray = (array, data, index) => {
  return [...array.slice(0, index), data, ...array.slice(index + 1)]
}

export const focusElementAfterLoad = element => {
  window.addEventListener('load', () => {
    element.current.focus()
  })
}

export function stopPinchZooming(event) {
  // Stops the browser zooming when double tab on mobile devices
  event.preventDefault()
}

export function getPadNameByKey(pads, key) {
  return pads.reduce((acc, curr) => {
    if (key === curr.key) {
      acc = acc + curr.name
    }
    return acc
  }, '')
}

export function getKeyByName(pads, name) {
  return pads.reduce((acc, cur) => {
    if (name === toLowerNoWhiteSpace(cur.name)) {
      acc = acc + cur.key
    }
    return acc
  }, '')
}
