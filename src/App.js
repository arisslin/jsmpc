import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { padsData } from './common/padsData'
import {
  samplePlayer,
  playPadByKey,
  handlePadTrigger,
} from './common/samplePlayer'
import PadSection from './components/Pad/PadSection'
import { getPadIndexByKey } from './common/utils'

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
      const newArray = [
        ...padsAttributes.slice(0, index),
        copy,
        ...padsAttributes.slice(index + 1),
      ]

      setPadAttributes(newArray)
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
