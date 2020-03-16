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
  align-self: center;
  grid-area: pad-section;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-gap: 12px;
  padding: 12px;
  border: 2px solid var(--blue-grey-medium);
  border-radius: 3px;
  background-color: var(--blue-grey-light);
  grid-area: middle;

  @media (orientation: landscape) {
    height: 100%;
  }

  @media (orientation: landscape) and (min-height: 532px) {
    height: 512px;
    width: 512px;
    justify-self: center;
  }

  @media (orientation: landscape) and (min-height: 900px) {
    height: 600px;
    width: 600px;
    justify-self: center;
  }

  @media (orientation: portrait) {
    height: 100%;
  }

  @media (orientation: portrait) and (min-width: 532px) {
    height: 512px;
    width: 512px;
    justify-self: center;
  }

  @media (orientation: portrait) and (min-width: 900px) {
    height: 600px;
    width: 600px;
    justify-self: center;
  }
`
