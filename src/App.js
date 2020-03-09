import React from 'react'
import styled from 'styled-components/macro'
import { padsData } from './common/padsData'
import { samplePlayer } from './common/samplePlayer'
import PadSection from './components/Pad/PadSection'
import { createKeyFromString } from './common/utils'

export default function App() {
  return (
    <AppStyled>
      <PadSection pads={padsData} samplePlayer={samplePlayer} />
    </AppStyled>
  )
}

window.addEventListener('keydown', event => {
  padsData.forEach(padData => {
    if (padData.key === event.key) {
      const pad = createKeyFromString(padData.name)
      const player = samplePlayer.get(pad)
      player.start()
    }
  })
})

const AppStyled = styled.div`
  display: flex;
  height: 100vh;
  padding: var(--pad-section-padding);
  background: var(--color-mpc-chassis);
  justify-content: center;

  @media (orientation: landscape) {
    flex-direction: row;
  }

  @media (orientation: portrait) {
    flex-direction: column;
  }
`
