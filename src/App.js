import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { padPlayer, playPadByKey, playPadByTouch } from './common/padPlayer'
import { padsData } from './common/padsData'
import { getPadIndexByKey, replaceDataArrayCopy } from './common/utils'
import PadSection from './components/Pad/PadSection'

export default function App() {
  const [padsAttributes, setPadsAttributes] = useState(padsData)

  return (
    <AppStyled onKeyDown={onKeyDown} onKeyUp={onKeyUp} tabIndex="0">
      <PadSection
        pads={padsAttributes}
        handlePadTouchStart={playPadByTouch}
        handlePadTouchEnd={handlePadTouchEnd}
        padPlayer={padPlayer}
      />
    </AppStyled>
  )

  function onKeyDown(event) {
    const key = event.key
    playPadByKey(key, padsAttributes)
    setPadTriggerStatus(key, padsAttributes, true)
  }

  function onKeyUp(event) {
    const key = event.key
    setPadTriggerStatus(key, padsAttributes, false)
  }

  function handlePadTouchEnd() {
    //...hier weiter machen
  }

  function setPadTriggerStatus(key, padsAttributes, isTriggered) {
    const index = getPadIndexByKey(key, padsAttributes)
    if (index > -1) {
      const pad = { ...padsAttributes[index] }
      pad.isTriggered = isTriggered
      const newPadsAttributes = replaceDataArrayCopy(padsAttributes, pad, index)
      setPadsAttributes(newPadsAttributes)
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
