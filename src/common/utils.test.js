import { createKeyFromString, getPadIndexByKey, updateInArray } from './utils'
import { padsData } from './padsData'

describe('createKeyFromString', () => {
  it('returns string in lowercase', () => {
    expect(createKeyFromString('Pad')).toBe('pad')
  })

  it('returns string in without whitespace', () => {
    expect(createKeyFromString('Pad 11')).toBe('pad11')
  })
})

describe('getPadIndexByKey', () => {
  it('returns a number > -1 for a wright key', () => {
    expect(getPadIndexByKey('1', padsData)).toBe(0)
    expect(getPadIndexByKey('2', padsData)).toBe(1)
    expect(getPadIndexByKey('3', padsData)).toBe(2)
    expect(getPadIndexByKey('4', padsData)).toBe(3)
    expect(getPadIndexByKey('q', padsData)).toBe(4)
    expect(getPadIndexByKey('w', padsData)).toBe(5)
    expect(getPadIndexByKey('e', padsData)).toBe(6)
    expect(getPadIndexByKey('r', padsData)).toBe(7)
    expect(getPadIndexByKey('a', padsData)).toBe(8)
    expect(getPadIndexByKey('s', padsData)).toBe(9)
    expect(getPadIndexByKey('d', padsData)).toBe(10)
    expect(getPadIndexByKey('f', padsData)).toBe(11)
    expect(getPadIndexByKey('y', padsData)).toBe(12)
    expect(getPadIndexByKey('x', padsData)).toBe(13)
    expect(getPadIndexByKey('c', padsData)).toBe(14)
    expect(getPadIndexByKey('v', padsData)).toBe(15)
  })

  it('returns -1 for a wrong key', () => {
    expect(getPadIndexByKey('5', padsData)).toBe(-1)
    expect(getPadIndexByKey('b', padsData)).toBe(-1)
    expect(getPadIndexByKey('§', padsData)).toBe(-1)
    expect(getPadIndexByKey('D', padsData)).toBe(-1)
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
