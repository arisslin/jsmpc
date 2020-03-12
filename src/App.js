import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { padPlayer, playPadByTouch } from './common/padPlayer'
import { padsData } from './common/padsData'
import {
  getPadIndexByKey,
  updateInArray,
  createKeyFromString,
} from './common/utils'
import InfoButton from './components/Buttons/InfoButton'
import PadSection from './components/Pad/PadSection'
import SamplePlayer from './common/SamplePlayer'

const samplePlayer = new SamplePlayer(padsData)

export default function App() {
  const [pads, setPads] = useState(padsData)

  return (
    <AppStyled onKeyDown={onKeyDown} onKeyUp={onKeyUp} tabIndex="0">
      <PadSection
        pads={pads}
        handlePadTouchStart={handlePadTouchStart}
        handlePadTouchEnd={handlePadTouchEnd}
        padPlayer={padPlayer}
      />
      <InfoButton />
    </AppStyled>
  )

  function onKeyDown(event) {
    const key = event.key
    samplePlayer.playSampleByKey(key)
    const index = getPadIndexByKey(key, pads)
    togglePadTriggerStatus(index, pads)
  }

  function onKeyUp(event) {
    const key = event.key
    const index = getPadIndexByKey(key, pads)
    togglePadTriggerStatus(index, pads)
  }

  function handlePadTouchStart(event) {
    const target = event.target
    const name = createKeyFromString(target.attributes.name.value)
    samplePlayer.playSampleByName(name)

    //togglePadTriggerStatus(index, pads)
    // playPadByTouch(player)
  }

  function handlePadTouchEnd(index, event) {
    stopPinchZooming(event)
    //togglePadTriggerStatus(index, pads)
  }

  function togglePadTriggerStatus(index, pads) {
    if (index > -1) {
      const pad = { ...pads[index] }
      pad.isTriggered = !pad.isTriggered
      const newPads = updateInArray(pads, pad, index)
      setPads(newPads)
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
