import { Players } from 'tone'
import { createKeyFromString } from './utils'
import { padsData } from './padsData'

const padsUrl = createPadsUrlObject(padsData)

export const samplePlayer = new Players(padsUrl).toMaster()

export function triggerPadByKey(padName) {
  const player = samplePlayer.get(padName)
  player.start()
}

function createPadsUrlObject(padsData) {
  const output = {}
  padsData.forEach(pad => {
    const key = createKeyFromString(pad.name)
    output[key] = pad.url
  })
  return output
}
