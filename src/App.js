import React from 'react'
import styled from 'styled-components/macro'
import PadSection from './components/PadSection'

function App() {
  return (
    <AppStyled className="App">
      <PadSection />
    </AppStyled>
  )
}

const AppStyled = styled.div`
  display: grid;
  grid-template-columns: auto 100vmin;
  grid-template-areas: 'control-section pad-section';
  height: 100vh;
  padding: 10px;
  background: var(--color-mpc-chassis);
`

export default App
