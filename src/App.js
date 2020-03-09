import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { padsData } from './common/padsData'
import {
  handlePadTrigger,
  playPadByKey,
  samplePlayer,
} from './common/samplePlayer'
import { getPadIndexByKey, replaceDataArrayCopy } from './common/utils'
import PadSection from './components/Pad/PadSection'

export default function App() {
  const [padsAttributes, setPadAttributes] = useState(padsData)

  return (
    <AppStyled onKeyDown={onKeyDown} tabIndex="0">
      <PadSection
        pads={padsAttributes}
        handlePadTrigger={handlePadTrigger}
        samplePlayer={samplePlayer}
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
      const copy = { ...padsAttributes[index] }
      copy.isTriggered = !copy.isTriggered

      const newPadsAttributes = replaceDataArrayCopy(
        padsAttributes,
        copy,
        index
      )

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
