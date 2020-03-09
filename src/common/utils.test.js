import { createKeyFromString } from './utils'

describe('createKeyFromString', () => {
  it('returns string in lowercase', () => {
    expect(createKeyFromString('Pad')).toBe('pad')
  })

  it('returns string in without whitespace', () => {
    expect(createKeyFromString('Pad 11')).toBe('pad11')
  })

  it('should not return a string with whitespace', () => {
    expect(createKeyFromString('Pad 11')).not.toBe('pad 11')
    expect(createKeyFromString('Pad 11')).not.toBe('Pad11')
  })

  it('should not return a string with uppercase letters', () => {
    expect(createKeyFromString('Pad 11')).not.toBe('Pad11')
  })

  it('should convert a number to string', () => {
    expect(createKeyFromString(1)).toBe('1')
  })
})
