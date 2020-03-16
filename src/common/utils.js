export const BREAKPOINT_S = '576px'
export const BREAKPOINT_M = '768px'
export const BREAKPOINT_L = '992px'
export const BREAKPOINT_XL = '1200px'

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
