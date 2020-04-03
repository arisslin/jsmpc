import React, { useRef, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components/macro'
import { padsData } from './common/padsData'
import SamplePlayer from './common/SamplePlayer'
import { focusElementAfterLoad } from './common/utils'
import Display from './components/Display'
import DisplayNav from './components/DisplayNav'
import PadSection from './components/Pad/PadSection'
import usePads from './hooks/usePads'

const samplePlayer = new SamplePlayer(padsData)

export default function App() {
  const [masterVolume, setMasterVolume] = useState(
    samplePlayer.getMasterVolume()
  )
  const {
    pads,
    selectedPad,
    handleKeyDown,
    handleKeyUp,
    handlePadTouchStart,
    handlePadTouchEnd,
  } = usePads(samplePlayer)
  const appElement = useRef(null)
  focusElementAfterLoad(appElement)

  return (
    <Router>
      <AppStyled
        ref={appElement}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
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
