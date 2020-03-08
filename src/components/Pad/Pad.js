import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Pad.propTypes = {
  name: PropTypes.string.isRequired,
  player: PropTypes.object,
}

export default function Pad({ name, player }) {
  return (
    <PadStyled
      onTouchStart={() => {
        player.start()
      }}
      onTouchEnd={stopPinchZooming}
      onMouseDown={() => {
        player.start()
      }}
    >
      <span>{name}</span>
    </PadStyled>
  )
}

function stopPinchZooming(event) {
  // Stops the browser zooming when double tab on mobile devices
  event.preventDefault()
}

const PadStyled = styled.div`
  position: relative;
  border: 2px solid var(--color-dark);
  border-radius: 3px;
  background-color: var(--color-pad-grey);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  user-select: none;

  span {
    position: absolute;
    top: -0.7rem;
    font-size: 0.5rem;
    color: #3d4448;
  }
`
