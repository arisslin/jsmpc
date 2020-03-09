export function createKeyFromString(string) {
  string = String(string)
  return string.toLowerCase().replace(' ', '')
}
