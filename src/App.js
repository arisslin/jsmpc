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
  padding: 10px;
  height: 100vh;
`

export default App
