import { Players } from 'tone'
import { padsData } from './padsData'
import { toLowerNoWhiteSpace } from './utils'

const padUrls = createSoundUrls(padsData)

export const padPlayer = new Players(padUrls).toMaster()

export function playPadByTouch(player) {
  player.start()
}

function createSoundUrls(padsData) {
  let output = padsData.reduce((allUrls, pad) => {
    allUrls[toLowerNoWhiteSpace(pad.name)] = pad.url
    return allUrls
  }, {})
  return output
}
