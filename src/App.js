import React from 'react'
import styled from 'styled-components/macro'
import { pads } from './common/pads'
import PadSection from './components/PadSection'

export default function App() {
  return (
    <AppStyled>
      <PadSection pads={pads} />
    </AppStyled>
  )
}

const AppStyled = styled.div`
  display: grid;

  height: 100vh;
  padding: var(--pad-section-padding);
  background: var(--color-mpc-chassis);

  @media (orientation: landscape) {
    grid-template-columns: auto calc(100vmin - var(--pad-section-padding) * 2); /* component has square form */
    grid-template-areas: 'control-section pad-section';
  }

  @media (orientation: portrait) {
    grid-template-rows: auto calc(100vmin - var(--pad-section-padding) * 2); /* component has square form */
    grid-template-areas: 'control-section' 'pad-section';
  }
`
