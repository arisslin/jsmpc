export const replaceDataArrayCopy = (array, data, index) => [
  ...array.slice(0, index),
  data,
  ...array.slice(index + 1),
]

export const getPadIndexByKey = (key, padsAttributes) =>
  padsAttributes.findIndex(pad => pad.key === key)

export function createKeyFromString(string) {
  string = String(string)
  return string.toLowerCase().replace(' ', '')
}
