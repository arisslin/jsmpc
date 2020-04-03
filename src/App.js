import React, { useRef, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components/macro'
import { padsData } from './common/padsData'
import SamplePlayer from './common/SamplePlayer'
import {
  getKeyByName,
  getPadNameByKey,
  focusElementAfterLoad,
  stopPinchZooming,
  toLowerNoWhiteSpace,
  updateInArray,
} from './common/utils'
import Display from './components/Display'
import DisplayNav from './components/DisplayNav'
import PadSection from './components/Pad/PadSection'

const samplePlayer = new SamplePlayer(padsData)

export default function App() {
  const [masterVolume, setMasterVolume] = useState(
    samplePlayer.getMasterVolume()
  )
  const [pads, setPads] = useState(padsData)
  const [selectedPad, setSelectedPad] = useState(null)
  const appElement = useRef(null)
  focusElementAfterLoad(appElement)

  return (
    <Router>
      <AppStyled
        ref={appElement}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onContextMenu={event => {
          event.preventDefault()
        }}
        tabIndex="0"
      >
        <Display
          selectedPad={selectedPad}
          masterVolume={masterVolume}
          adjustMasterVolume={adjustMasterVolume}
        />
        <Title>
          jsMPC 2000 <span>Music Production Center</span>
        </Title>
        <DisplayNav />
        <PadSection
          pads={pads}
          handlePadTouchStart={handlePadTouchStart}
          handlePadTouchEnd={handlePadTouchEnd}
        />
      </AppStyled>
    </Router>
  )

  function adjustMasterVolume(event) {
    const targetValue = Number(event.target.value)
    const volumeInDB = targetValue > 6 ? 6 : targetValue
    setMasterVolume(volumeInDB)
    samplePlayer.setMasterVolume(volumeInDB)
  }

  function onKeyDown(event) {
    if (event.repeat) {
      return
    }
    const key = event.key
    samplePlayer.playSample(key)
    setPadIsTriggered(key, true)
    const padName = getPadNameByKey(pads, key)
    setSelectedPad(padName)
  }

  function onKeyUp(event) {
    const key = event.key
    setPadIsTriggered(key, false)
  }

  function handlePadTouchStart(padName) {
    const name = toLowerNoWhiteSpace(padName)
    const key = getKeyByName(pads, name)
    samplePlayer.playSample(key)
    setPadIsTriggered(key, true)
    setSelectedPad(padName)
  }

  function handlePadTouchEnd(event, padName) {
    stopPinchZooming(event)
    const name = toLowerNoWhiteSpace(padName)
    const key = getKeyByName(pads, name)
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
