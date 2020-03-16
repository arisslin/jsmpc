import React from 'react'
import styled from 'styled-components/macro'

export default function Display() {
  return <DisplayStyled>Test</DisplayStyled>
}

const DisplayStyled = styled.section`
  grid-area: display;
  border: 2px solid var(--color-display-border);
  border-radius: 3px;
  background-color: var(--color-display);
  font-family: 'Press Start 2P', Arial;
  padding: 6px;
  color: var(--color-display-font);
  letter-spacing: -1px;
`
