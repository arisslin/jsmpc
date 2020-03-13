import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { padsData } from './common/padsData'
import SamplePlayer from './common/SamplePlayer'
import {
  stopPinchZooming,
  toLowerNoWhiteSpace,
  updateInArray,
} from './common/utils'
import InfoButton from './components/Buttons/InfoButton'
import PadSection from './components/Pad/PadSection'

const samplePlayer = new SamplePlayer(padsData)

export default function App() {
  const [pads, setPads] = useState(padsData)

  return (
    <AppStyled onKeyDown={onKeyDown} onKeyUp={onKeyUp} tabIndex="0">
      <PadSection
        pads={pads}
        handlePadTouchStart={handlePadTouchStart}
        handlePadTouchEnd={handlePadTouchEnd}
      />
      <InfoButton />
    </AppStyled>
  )

  function onKeyDown(event) {
    const key = event.key
    samplePlayer.playSample(key)
    setPadIsTriggered(key, true)
  }

  function onKeyUp(event) {
    const key = event.key
    setPadIsTriggered(key, false)
  }

  function handlePadTouchStart(event) {
    const name = getElementNameByEvent(event)
    const key = getKeyByName(name)
    samplePlayer.playSample(key)
    setPadIsTriggered(key, true)
  }

  function handlePadTouchEnd(event) {
    stopPinchZooming(event)
    const name = getElementNameByEvent(event)
    const key = getKeyByName(name)
    setPadIsTriggered(key, false)
  }

  function setPadIsTriggered(key, triggerd) {
    const index = pads.findIndex(pad => pad.key === key)
    if (index > -1) {
      const pad = { ...pads[index] }
      pad.isTriggered = triggerd
      const newPads = updateInArray(pads, pad, index)
      setPads(newPads)
    }
  }

  function getElementNameByEvent(event) {
    return event.target.attributes.name.value
  }

  function getKeyByName(name) {
    const key = pads.reduce((acc, cur) => {
      if (name === toLowerNoWhiteSpace(cur.name)) {
        acc = acc + cur.key
      }
      return acc
    }, '')
    return key
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
