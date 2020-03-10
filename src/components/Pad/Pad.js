import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Pad.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onTouchStart: PropTypes.func.isRequired,
  onTouchEnd: PropTypes.func.isRequired,
  player: PropTypes.object,
  isTriggered: PropTypes.bool.isRequired,
}

export default function Pad({
  name,
  index,
  onTouchStart,
  onTouchEnd,
  player,
  isTriggered,
}) {
  return (
    <PadStyled
      onTouchStart={() => onTouchStart(index, player)}
      onTouchEnd={event => onTouchEnd(index, event)}
      onMouseDown={() => onTouchStart(index, player)}
      onMouseUp={event => onTouchEnd(index, event)}
      isTriggered={isTriggered}
    >
      <span>{name}</span>
    </PadStyled>
  )
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
