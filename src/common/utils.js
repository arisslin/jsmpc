import { object } from 'prop-types'

export function createKeyFromString(string) {
  if (typeof string !== 'string') {
    throw new Error('param is', typeof string)
  }

  string = String(string)
  return string.toLowerCase().replace(' ', '')
}

export const getPadIndexByKey = (key, padsAttributes) => {
  if (!Array.isArray(padsAttributes)) {
    throw new Error('padAttributes is no array')
  }
  if (padsAttributes.length !== 16) {
    throw new Error('padAttributes length is !== 16')
  }
  return padsAttributes.findIndex(pad => pad.key === key)
}

export const replaceDataArrayCopy = (array, data, index) => [
  ...array.slice(0, index),
  data,
  ...array.slice(index + 1),
]
