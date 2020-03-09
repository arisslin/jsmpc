import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Pad.propTypes = {
  name: PropTypes.string.isRequired,
  onTouchStart: PropTypes.func.isRequired,
  player: PropTypes.object,
  isTriggered: PropTypes.bool.isRequired,
}

export default function Pad({ name, onTouchStart, player, isTriggered }) {
  return (
    <PadStyled
      onTouchStart={() => {
        onTouchStart(player)
      }}
      onTouchEnd={stopPinchZooming}
      onMouseDown={() => {
        onTouchStart(player)
      }}
      isTriggered={isTriggered}
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
  border: 2px solid;
  border-color: ${props =>
    props.isTriggered ? 'var(--color-pad-triggered)' : 'var(--color-dark)'};
  border-radius: 3px;
  background-color: var(--color-pad-grey);
  box-shadow: ${props =>
    props.isTriggered
      ? '0 1px 4px 0 rgba(199, 36, 0, 0.2)'
      : '0 1px 3px 0 rgba(0, 0, 0, 0.2)'};
  cursor: pointer;
  user-select: none;

  span {
    position: absolute;
    top: -0.7rem;
    font-size: 0.5rem;
    color: #3d4448;
  }
`
