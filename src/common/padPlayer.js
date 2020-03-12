import { Players } from 'tone'
import { padsData } from './padsData'
import { createKeyFromString } from './utils'

const padUrls = createSoundUrls(padsData)

export const padPlayer = new Players(padUrls).toMaster()

export function playPadByTouch(player) {
  player.start()
}

function createSoundUrls(padsData) {
  let output = padsData.reduce((allUrls, pad) => {
    allUrls[createKeyFromString(pad.name)] = pad.url
    return allUrls
  }, {})
  return output
}
