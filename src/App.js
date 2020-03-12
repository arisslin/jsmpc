import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import { padPlayer, playPadByKey, playPadByTouch } from './common/padPlayer'
import { padsData } from './common/padsData'
import { getPadIndexByKey, updateInArray } from './common/utils'
import InfoButton from './components/Buttons/InfoButton'
import PadSection from './components/Pad/PadSection'
import SamplePlayer from './common/SamplePlayer'

export default function App() {
  const [padsAttributes, setPadsAttributes] = useState(padsData)
  let sampleplayer = null
  useEffect(() => {
    sampleplayer = new SamplePlayer()
  }, [])

  return (
    <AppStyled onKeyDown={onKeyDown} onKeyUp={onKeyUp} tabIndex="0">
      <PadSection
        pads={padsAttributes}
        handlePadTouchStart={handlePadTouchStart}
        handlePadTouchEnd={handlePadTouchEnd}
        padPlayer={padPlayer}
      />
      <InfoButton />
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
      const newPadsAttributes = updateInArray(padsAttributes, pad, index)
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
