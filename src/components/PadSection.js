import React from 'react'
import styled from 'styled-components/macro'

export default function PadSection(props) {
  return <PadSectionStyled>Pad Section</PadSectionStyled>
}

const PadSectionStyled = styled.section`
  grid-area: pad-section;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  padding: 10px;
  border: 2px solid var(--blue-grey-medium);
  border-radius: 3px;
  background-color: var(--blue-grey-light);
`
