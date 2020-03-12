import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Pad from './Pad'
import { createKeyFromString } from '../../common/utils'

PadSection.propTypes = {
  pads: PropTypes.array.isRequired,
  handlePadTouchStart: PropTypes.func.isRequired,
  handlePadTouchEnd: PropTypes.func.isRequired,
  padPlayer: PropTypes.object.isRequired,
}

export default function PadSection({
  pads,
  handlePadTouchStart,
  handlePadTouchEnd,
  padPlayer,
}) {
  return <PadSectionStyled>{addPads()}</PadSectionStyled>

  function addPads() {
    return pads.map((pad, index) => {
      const key = createKeyFromString(pad.name)
      const player = padPlayer.get(key)

      return (
        <Pad
          key={key}
          index={index}
          name={pad.name}
          onTouchStart={handlePadTouchStart}
          onTouchEnd={handlePadTouchEnd}
          player={player}
          isTriggered={pad.isTriggered}
        />
      )
    })
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

  @media (orientation: landscape) {
    height: 100%;
    width: calc(100vmin - var(--pad-section-padding) * 2);
  }

  @media (orientation: portrait) {
    width: 100%;
    height: calc(100vmin - var(--pad-section-padding) * 2);
  }
`
