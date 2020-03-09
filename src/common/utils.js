export const replaceDataArrayCopy = (array, data, index) => [
  ...array.slice(0, index),
  data,
  ...array.slice(index + 1),
]

export const getPadIndexByKey = (key, padsAttributes) => {
  if (!Array.isArray(padsAttributes)) {
    throw new Error('padAttributes is no array')
  }
  if (padsAttributes.length !== 16) {
    throw new Error('padAttributes length is !== 16')
  }
  return padsAttributes.findIndex(pad => pad.key === key)
}

export function createKeyFromString(string) {
  string = String(string)
  return string.toLowerCase().replace(' ', '')
}
