import React from 'react'
import styled from 'styled-components/macro'
import InfoButton from './Buttons/InfoButton'

export default function Controls() {
  return (
    <ControlsStyled>
      <InfoButton />
    </ControlsStyled>
  )
}

const ControlsStyled = styled.section`
  grid-area: controls;
`
