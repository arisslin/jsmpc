import { createKeyFromString, getPadIndexByKey } from './utils'
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
    expect(createKeyFromString('Pad 11')).not.toBe('Pad11')
  })

  it('should convert a number to string', () => {
    expect(() => createKeyFromString(1)).toThrow()
  })

  it('throws if param is an array', () => {
    const testArray = [1, 2, 3, 4, 5]
    expect(() => createKeyFromString(testArray)).toThrow()
  })

  it('throws if param is an object', () => {
    const testObject = { key: 'test', data: 123 }
    expect(() => createKeyFromString(testObject)).toThrow()
  })
  it('throws if param is bool', () => {
    expect(() => createKeyFromString(true)).toThrow()
    expect(() => createKeyFromString(false)).toThrow()
  })

  it('throws if param is falsy', () => {
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

  it('throws when 2nd argument is no array', () => {
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

  it('throws when 2nd argument length is not strictly equal 16', () => {
    expect(() => {
      const testArray = [1, 2, 3, 4, 5]
      getPadIndexByKey('s', testArray)
    }).toThrow()
  })

  it('throws when 2nd argument contains not only objects', () => {
    expect(() => {
      const testArray = [1, 2, 3, 4, 5]
      getPadIndexByKey('s', testArray)
    }).toThrow()
  })
})
