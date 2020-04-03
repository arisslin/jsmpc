import { useState } from 'react'

export default function useVolume(player) {
  const [volume, setVolume] = useState(player.getMasterVolume())

  function adjustVolume(event) {
    const targetValue = Number(event.target.value)
    const volumeInDB = targetValue > 6 ? 6 : targetValue
    setVolume(volumeInDB)
    player.setMasterVolume(volumeInDB)
  }

  return [volume, adjustVolume]
}
