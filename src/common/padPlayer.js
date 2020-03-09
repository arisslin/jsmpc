import { Players } from 'tone'
import { padsData } from './padsData'
import { createKeyFromString } from './utils'

const padsUrl = createPadsUrlObject(padsData)

export const padPlayer = new Players(padsUrl).toMaster()

export function playPadByKey(key, padsAttributes) {
  padsAttributes.forEach(padAttributes => {
    if (padAttributes.key === key) {
      const padName = createKeyFromString(padAttributes.name)
      const player = padPlayer.get(padName)
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
