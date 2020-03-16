import React from 'react'
import styled from 'styled-components/macro'
import Button from './Buttons/Button'

export default function Controls() {
  return (
    <ControlsStyled>
      <Button />
    </ControlsStyled>
  )
}

const ControlsStyled = styled.section`
  grid-area: controls;
`
