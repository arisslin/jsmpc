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
      <Title>
        jsMPC 2000 <span>Music Production Center</span>
      </Title>
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
    if (event.target.attributes.name) {
      return event.target.attributes.name.value
    }
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
  grid-gap: 16px;
  height: 100vh;
  padding: var(--pad-section-padding);
  background: var(--color-mpc-chassis);
  justify-content: center;

  @media (orientation: landscape) {
    grid-template-columns: 1fr calc(100vmin - var(--pad-section-padding) * 2);
    grid-template-rows: 1fr auto auto;
    grid-template-areas:
      'display pad-section'
      'title pad-section'
      'controls pad-section';
  }

  @media (orientation: portrait) {
    grid-template-columns: 100%;
    grid-template-rows: 1fr auto auto calc(
        100vmin - var(--pad-section-padding) * 2
      );
    grid-template-areas:
      'display'
      'controls'
      'title'
      'pad-section';
  }
`

const Title = styled.h1`
  grid-area: title;
  margin: 0;
  padding: 4px;
  color: var(--color-border);
  letter-spacing: 2px;
  font-size: 16px;
  font-style: italic;
  font-weight: 200;
  text-align: center;
  text-shadow: var(--element-inside-text-shadow);
  user-select: none;

  span {
    font-size: 14px;
    font-variant: small-caps;
    font-style: normal;
  }
`
