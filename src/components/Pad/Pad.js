import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { toLowerNoWhiteSpace } from '../../common/utils'

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
      name={toLowerNoWhiteSpace(padName)}
      onTouchStart={() => onTouchStart(padName)}
      onTouchEnd={event => onTouchEnd(event)}
      onMouseDown={() => onTouchStart(padName)}
      onMouseUp={event => onTouchEnd(event)}
      isTriggered={isTriggered}
    >
      <span>{padName}</span>
    </PadStyled>
  )
}

const PadStyled = styled.div`
  position: relative;
  border: 2px solid;
  border-color: ${props =>
    props.isTriggered
      ? 'var(--color-pad-border-triggered)'
      : 'var(--color-dark)'};
  border-radius: 3px;
  background-color: ${props =>
    props.isTriggered ? 'var(--color-pad-triggered)' : 'var(--color-pad)'};
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
