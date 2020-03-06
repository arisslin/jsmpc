import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Pad from './Pad'

PadSection.propTypes = {
  pads: PropTypes.array.isRequired,
}

export default function PadSection({ pads }) {
  return <PadSectionStyled>{addPads()}</PadSectionStyled>

  function addPads() {
    return pads.map(pad => (
      <Pad key={pad.name} name={pad.name} soundUrl={pad.url} />
    ))
  }
}

const PadSectionStyled = styled.section`
  grid-area: pad-section;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-gap: 12px;
  padding: 12px;
  border: 2px solid var(--blue-grey-medium);
  border-radius: 3px;
  background-color: var(--blue-grey-light);
`
