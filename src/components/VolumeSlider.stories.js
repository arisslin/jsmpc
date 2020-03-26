import React, { useState } from 'react'
import GlobalStyles from '../common/GlobalStyles'
import VolumeSlider from './VolumeSlider'

export default {
  title: 'Slider',
  component: VolumeSlider,
}

export const VolumeSliderDefault = () => {
  const [masterVolume, setMasterVolume] = useState(0)

  return (
    <div
      style={{
        display: 'block',
        width: 200,
        height: 60,
        padding: 10,
        fontFamily: "'Press Start 2P', Arial",
        fontSize: '0.8rem',
        color: 'var(--color-display-font)',
        letterSpacing: -1,
      }}
    >
      <GlobalStyles />
      <VolumeSlider
        label="Master Volume"
        masterVolume={masterVolume}
        onChangeInputVolume={adjustMasterVolume}
      />
    </div>
  )

  function adjustMasterVolume(event) {
    const volumeInDB = event.target.value > 6 ? 6 : event.target.value
    setMasterVolume(volumeInDB)
  }
}
