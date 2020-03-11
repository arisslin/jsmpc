import { Players } from 'tone'
import { padsData } from './padsData'
import { createKeyFromString } from './utils'

const padUrls = createSoundUrls(padsData)

export const padPlayer = new Players(padUrls).toMaster()

export function playPadByKey(key, padsAttributes) {
  padsAttributes.forEach(padAttributes => {
    if (padAttributes.key === key) {
      const padName = createKeyFromString(padAttributes.name)
      const player = padPlayer.get(padName)
      player.start()
    }
  })
}

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
