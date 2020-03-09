import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { padsData } from './common/padsData'
import { handlePadTrigger, playPadByKey, padPlayer } from './common/padPlayer'
import { getPadIndexByKey, replaceDataArrayCopy } from './common/utils'
import PadSection from './components/Pad/PadSection'

export default function App() {
  const [padsAttributes, setPadAttributes] = useState(padsData)

  return (
    <AppStyled onKeyDown={onKeyDown} tabIndex="0">
      <PadSection
        pads={padsAttributes}
        handlePadTrigger={handlePadTrigger}
        padPlayer={padPlayer}
      />
    </AppStyled>
  )

  function onKeyDown(event) {
    const key = event.key
    playPadByKey(key, padsAttributes)
    changePadBorderColor(key, padsAttributes)
  }

  function changePadBorderColor(key, padsAttributes) {
    const index = getPadIndexByKey(key, padsAttributes)
    if (index > -1) {
      const pad = { ...padsAttributes[index] }
      pad.isTriggered = !pad.isTriggered
      const newPadsAttributes = replaceDataArrayCopy(padsAttributes, pad, index)
      setPadAttributes(newPadsAttributes)
    }
  }
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
