import { Players } from 'tone'
import { createKeyFromString } from './utils'
import { padsData } from './padsData'

const padsUrl = createPadsUrlObject(padsData)

export const samplePlayer = new Players(padsUrl).toMaster()

export function playPadByKey(key, padsAttributes) {
  padsAttributes.forEach(padAttributes => {
    if (padAttributes.key === key) {
      const padName = createKeyFromString(padAttributes.name)
      const player = samplePlayer.get(padName)
      handlePadTrigger(player)
    }
  })
}

export function handlePadTrigger(player) {
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
