import { Players } from 'tone'
import { padsData } from './padsData'

const padsUrl = createPadsUrlObject(padsData)

export const samplePlayer = new Players(padsUrl).toMaster()

function createPadsUrlObject(padsData) {
  const output = {}
  padsData.forEach(pad => {
    const key = pad.name.toLowerCase().replace(' ', '')
    output[key] = pad.url
  })
  return output
}
