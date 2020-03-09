import React from 'react'
import styled from 'styled-components/macro'
import { padsData } from './common/padsData'
import { samplePlayer, triggerPadByKey } from './common/samplePlayer'
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
  const key = event.key
  padsData.forEach(padData => {
    const padKey = padData.key
    console.log(padKey)

    if (padKey === key) {
      const padName = createKeyFromString(padData.name)
      triggerPadByKey(padName)
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
