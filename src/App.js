import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { padsData } from './common/padsData'
import {
  samplePlayer,
  triggerPadByKey,
  handlePadTrigger,
} from './common/samplePlayer'
import PadSection from './components/Pad/PadSection'

export default function App() {
  const [padAttributes, setPadAttributes] = useState(padsData)

  window.addEventListener('keydown', event => {
    const key = event.key
    triggerPadByKey(key)
  })

  return (
    <AppStyled>
      <PadSection
        pads={padAttributes}
        handlePadTrigger={handlePadTrigger}
        samplePlayer={samplePlayer}
      />
    </AppStyled>
  )
}

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
