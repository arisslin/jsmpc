import React, { useState, useRef } from 'react'
import styled from 'styled-components/macro'
import { padsData } from './common/padsData'
import SamplePlayer from './common/SamplePlayer'
import {
  stopPinchZooming,
  toLowerNoWhiteSpace,
  updateInArray,
  focusElementAfterLoad,
} from './common/utils'
import PadSection from './components/Pad/PadSection'
import Display from './components/Display'
import Controls from './components/Controls'

const samplePlayer = new SamplePlayer(padsData)

export default function App() {
  const [pads, setPads] = useState(padsData)
  const appElement = useRef(null)
  focusElementAfterLoad(appElement)

  return (
    <AppStyled
      ref={appElement}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      onContextMenu={event => {
        event.preventDefault()
      }}
      tabIndex="0"
    >
      <Display />
      <Controls />
      <PadSection
        pads={pads}
        handlePadTouchStart={handlePadTouchStart}
        handlePadTouchEnd={handlePadTouchEnd}
      />
    </AppStyled>
  )

  function onKeyDown(event) {
    if (event.repeat) {
      return
    }

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
  display: grid;
  grid-gap: 10px;
  height: 100vh;
  padding: var(--pad-section-padding);
  background: var(--color-mpc-chassis);
  justify-content: center;

  @media (orientation: landscape) {
    grid-template-columns: 1fr calc(100vmin - var(--pad-section-padding) * 2);
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      'display pad-section'
      'controls pad-section';
  }

  @media (orientation: portrait) {
  }
`
