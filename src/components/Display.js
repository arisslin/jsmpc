import React from 'react'
import styled from 'styled-components/macro'

export default function Display() {
  return <DisplayStyled />
}

const DisplayStyled = styled.section`
  grid-area: display;
  border: 2px solid var(--color-display-border);
  border-radius: 3px;
  background-color: var(--color-display);
`
