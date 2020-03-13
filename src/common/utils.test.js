import { toLowerNoWhiteSpace, updateInArray } from './utils'
import { padsData } from './padsData'

describe('toLowerNoWhiteSpace', () => {
  it('returns string in lowercase', () => {
    expect(toLowerNoWhiteSpace('Pad')).toBe('pad')
  })

  it('returns string in without whitespace', () => {
    expect(toLowerNoWhiteSpace('Pad 11')).toBe('pad11')
  })
})

describe('updateInArray', () => {
  const testData = {
    name: 'Pad 13',
    url: require('../media/sounds/808kit/OpenHH808.wav'),
    key: '1',
    isTriggered: true,
  }

  it('returns an array which contains the delivered data', () => {
    expect(updateInArray(padsData, testData, 0)).toContain(testData)
  })

  it('returns an array which length is equal to the delivered array', () => {
    const deliveredArrayLength = padsData.length
    const returnedArrayLength = updateInArray(padsData, testData, 0).length
    expect(deliveredArrayLength).toBe(returnedArrayLength)
  })
})
