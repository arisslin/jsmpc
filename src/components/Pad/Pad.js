import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Pad.propTypes = {
  padName: PropTypes.string.isRequired,
  onTouchStart: PropTypes.func.isRequired,
  onTouchEnd: PropTypes.func.isRequired,
  isTriggered: PropTypes.bool.isRequired,
}

export default function Pad({
  padName,
  onTouchStart,
  onTouchEnd,
  isTriggered,
}) {
  return (
    <PadStyled
      className={isTriggered ? 'triggered' : ''}
      onTouchStart={() => onTouchStart(padName)}
      onTouchEnd={event => onTouchEnd(event, padName)}
      onMouseDown={() => onTouchStart(padName)}
      onMouseUp={event => onTouchEnd(event, padName)}
      isTriggered={isTriggered}
    >
      <span>{padName}</span>
    </PadStyled>
  )
}

const PadStyled = styled.div`
  position: relative;
  border: 2px solid;
  border-color: var(--color-dark);
  border-radius: 3px;
  background-color: var(--color-pad);
  box-shadow: var(--element-box-shadow);
  cursor: pointer;
  user-select: none;

  &.triggered {
    background-color: var(--color-pad-triggered);
    border-color: var(--color-pad-border-triggered);
    box-shadow: var(--element-triggered-shadow);
  }

  span {
    position: absolute;
    top: -0.7rem;
    font-size: 0.5rem;
    color: #3d4448;
  }
`
