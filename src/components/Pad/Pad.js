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
      name={name}
      onTouchStart={event => onTouchStart(event)}
      onTouchEnd={event => onTouchEnd(index, event)}
      onMouseDown={event => onTouchStart(event)}
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
      ? 'var(--element-triggered-shadow)'
      : 'var(--element-box-shadow)'};
  cursor: pointer;
  user-select: none;

  span {
    position: absolute;
    top: -0.7rem;
    font-size: 0.5rem;
    color: #3d4448;
  }
`
