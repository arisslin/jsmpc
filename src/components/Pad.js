import React from 'react'
import styled from 'styled-components/macro'

export default function Pad({ name }) {
  return <PadStyled>{name}</PadStyled>
}

const PadStyled = styled.div`
  border: 2px solid var(--color-dark);
  border-radius: 3px;
  background-color: var(--color-pad-grey);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
`
