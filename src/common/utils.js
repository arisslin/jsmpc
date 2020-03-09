export const getPadIndexByKey = (key, padsAttributes) =>
  padsAttributes.findIndex(pad => pad.key === key)

export function createKeyFromString(string) {
  string = String(string)
  return string.toLowerCase().replace(' ', '')
}
