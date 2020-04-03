import { useState } from 'react'
const MAX_VOLUME = 6

export default function useVolume(player) {
  const [volume, setVolume] = useState(player.getMasterVolume())

  function adjustVolume(newValue) {
    const volumeInDB = newValue > MAX_VOLUME ? MAX_VOLUME : newValue
    setVolume(volumeInDB)
    player.setMasterVolume(volumeInDB)
  }

  return [volume, adjustVolume]
}
