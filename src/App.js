import React from 'react'
import styled from 'styled-components/macro'
import { padsData } from './common/padsData'
import PadSection from './components/PadSection'

export default function App() {
  return (
    <AppStyled>
      <PadSection pads={padsData} />
    </AppStyled>
  )
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
