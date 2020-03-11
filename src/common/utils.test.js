import {
  createKeyFromString,
  getPadIndexByKey,
  replaceDataArrayCopy,
} from './utils'
import { padsData } from './padsData'

describe('createKeyFromString', () => {
  it('returns string in lowercase', () => {
    expect(createKeyFromString('Pad')).toBe('pad')
  })

  it('should not return a string with uppercase letters', () => {
    expect(createKeyFromString('Pad 11')).not.toBe('Pad11')
  })

  it('returns string in without whitespace', () => {
    expect(createKeyFromString('Pad 11')).toBe('pad11')
  })

  it('should not return a string with whitespace', () => {
    expect(createKeyFromString('Pad 11')).not.toBe('pad 11')
    expect(createKeyFromString('Pad 11')).not.toBe('Pad 11')
  })

  it('throws when param is no string', () => {
    const testArray = [1, 2, 3, 4, 5]
    const testObject = { key: 'test', data: 123 }

    expect(() => createKeyFromString(1)).toThrow()
    expect(() => createKeyFromString(testArray)).toThrow()
    expect(() => createKeyFromString(testObject)).toThrow()
    expect(() => createKeyFromString(true)).toThrow()
    expect(() => createKeyFromString(false)).toThrow()
    expect(() => createKeyFromString(undefined)).toThrow()
    expect(() => createKeyFromString(null)).toThrow()
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

  it('throws when 2nd param is no array', () => {
    expect(() => {
      getPadIndexByKey('1', undefined)
    }).toThrow()

    expect(() => {
      getPadIndexByKey('y', 'Test')
    }).toThrow()

    expect(() => {
      getPadIndexByKey('3', null)
    }).toThrow()

    expect(() => {
      getPadIndexByKey('w', false)
    }).toThrow()

    expect(() => {
      getPadIndexByKey('s', { key: 'a', value: 'Test' })
    }).toThrow()
  })

  it('throws when 2nd param contains not only objects', () => {
    expect(() => {
      const testArray = [1, 2, 3, 4, 5]
      getPadIndexByKey('s', testArray)
    }).toThrow()
  })
})

describe('replaceDataArrayCopy', () => {
  const testData = {
    name: 'Pad 13',
    url: require('../media/sounds/808kit/OpenHH808.wav'),
    key: '1',
    isTriggered: true,
  }

  it('returns an array which contains the delivered data', () => {
    expect(replaceDataArrayCopy(padsData, testData, 0)).toContain(testData)
  })

  it('returns an array which length is equal to the delivered array', () => {
    const deliveredArrayLength = padsData.length
    const returnedArrayLength = replaceDataArrayCopy(padsData, testData, 0)
      .length
    expect(deliveredArrayLength).toBe(returnedArrayLength)
  })

  it('throws when 3rd param is no number', () => {
    expect(() => replaceDataArrayCopy(padsData, testData, 'a')).toThrow()
    expect(() => replaceDataArrayCopy(padsData, testData, true)).toThrow()
    expect(() => replaceDataArrayCopy(padsData, testData, null)).toThrow()
    expect(() => replaceDataArrayCopy(padsData, testData, undefined)).toThrow()
  })

  it('throws when 1st param is no array', () => {
    expect(() => replaceDataArrayCopy(1, testData, 0)).toThrow()
    expect(() => replaceDataArrayCopy('test', testData, 0)).toThrow()
    expect(() => replaceDataArrayCopy(undefined, testData, 0)).toThrow()
    expect(() => replaceDataArrayCopy(false, testData, 0)).toThrow()
  })
})
