import React from 'react'
import styled from 'styled-components/macro'
import PadSection from './components/PadSection'

export default function App() {
  const pads = [
    // Ordered like the pads in real mpc 2000 xl
    { name: 'Pad 13' },
    { name: 'Pad 14' },
    { name: 'Pad 15' },
    { name: 'Pad 16' },
    { name: 'Pad 9' },
    { name: 'Pad 10' },
    { name: 'Pad 11' },
    { name: 'Pad 12' },
    { name: 'Pad 5' },
    { name: 'Pad 6' },
    { name: 'Pad 7' },
    { name: 'Pad 8' },
    { name: 'Pad 1' },
    { name: 'Pad 2' },
    { name: 'Pad 3' },
    { name: 'Pad 4' },
  ]

  return (
    <AppStyled className="App">
      <PadSection pads={pads} />
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
