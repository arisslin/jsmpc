import React from 'react'
import styled from 'styled-components/macro'

export default function PadSection(props) {
  return <PadSectionStyled>Pad Section</PadSectionStyled>
}

const PadSectionStyled = styled.section`
  grid-area: pad-section;
  display: block;
  border: 2px solid var(--blue-grey-medium);
  border-radius: 3px;
  background-color: var(--blue-grey-light);
`
