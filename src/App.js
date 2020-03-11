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
        handlePadTouchStart={handlePadTouchStart}
        handlePadTouchEnd={handlePadTouchEnd}
        padPlayer={padPlayer}
      />
    </AppStyled>
  )

  function onKeyDown(event) {
    const key = event.key
    const index = getPadIndexByKey(key, padsAttributes)
    playPadByKey(key, padsAttributes)
    togglePadTriggerStatus(index, padsAttributes)
  }

  function onKeyUp(event) {
    const key = event.key
    const index = getPadIndexByKey(key, padsAttributes)
    togglePadTriggerStatus(index, padsAttributes)
  }

  function handlePadTouchStart(index, player) {
    togglePadTriggerStatus(index, padsAttributes)
    playPadByTouch(player)
  }

  function handlePadTouchEnd(index, event) {
    stopPinchZooming(event)
    togglePadTriggerStatus(index, padsAttributes)
  }

  function togglePadTriggerStatus(index, padsAttributes) {
    if (index > -1) {
      const pad = { ...padsAttributes[index] }
      pad.isTriggered = !pad.isTriggered
      const newPadsAttributes = replaceDataArrayCopy(padsAttributes, pad, index)
      setPadsAttributes(newPadsAttributes)
    }
  }
}

function stopPinchZooming(event) {
  // Stops the browser zooming when double tab on mobile devices
  event.preventDefault()
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
