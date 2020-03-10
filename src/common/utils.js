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
  // if (padsAttributes.length !== 16) {
  //   throw new Error('padAttributes length is !== 16')
  // }
  padsAttributes.forEach(entry => {
    if (typeof entry !== 'object') {
      throw new Error('2nd param is', typeof entry)
    }
  })
  return padsAttributes.findIndex(pad => pad.key === key)
}

export const replaceDataArrayCopy = (array, data, index) => {
  if (typeof index !== 'number') {
    throw new Error('3rd param is no number')
  }
  if (!Array.isArray(array)) {
    throw new Error('1st param is no array')
  }
  return [...array.slice(0, index), data, ...array.slice(index + 1)]
}
