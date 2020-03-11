export function createKeyFromString(string) {
  string = String(string)
  return string.toLowerCase().replace(' ', '')
}

export const getPadIndexByKey = (key, padsAttributes) => {
  return padsAttributes.findIndex(pad => pad.key === key)
}

export const updateInArray = (array, data, index) => {
  return [...array.slice(0, index), data, ...array.slice(index + 1)]
}
