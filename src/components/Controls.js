import React from 'react'
import styled from 'styled-components/macro'
import Button from './Buttons/Button'

export default function Controls() {
  return (
    <ControlsStyled>
      <Button text="Main" />
      <Button text="Pads" />
      <Button text="?" />
    </ControlsStyled>
  )
}

const ControlsStyled = styled.section`
  grid-area: controls;
  display: flex;
  justify-content: center;
  @media (orientation: landscape) {
    padding-bottom: 14px;
  }
`
