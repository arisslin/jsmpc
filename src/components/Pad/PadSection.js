import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Pad from './Pad'
import { toLowerNoWhiteSpace } from '../../common/utils'

PadSection.propTypes = {
  pads: PropTypes.array.isRequired,
  handlePadTouchStart: PropTypes.func.isRequired,
  handlePadTouchEnd: PropTypes.func.isRequired,
}

export default function PadSection({
  pads,
  handlePadTouchStart,
  handlePadTouchEnd,
}) {
  return <PadSectionStyled>{addPads()}</PadSectionStyled>

  function addPads() {
    return pads.map(pad => {
      const key = toLowerNoWhiteSpace(pad.name)

      return (
        <Pad
          key={key}
          name={pad.name}
          onTouchStart={handlePadTouchStart}
          onTouchEnd={handlePadTouchEnd}
          isTriggered={pad.isTriggered}
        />
      )
    })
  }
}

const PadSectionStyled = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-gap: 12px;
  padding: 12px;
  border: 2px solid var(--blue-grey-medium);
  border-radius: 3px;
  background-color: var(--blue-grey-light);

  grid-area: pad-section;
`
