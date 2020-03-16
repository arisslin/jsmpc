import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { toLowerNoWhiteSpace } from '../../common/utils'

Pad.propTypes = {
  name: PropTypes.string.isRequired,
  onTouchStart: PropTypes.func.isRequired,
  onTouchEnd: PropTypes.func.isRequired,
  isTriggered: PropTypes.bool.isRequired,
}

export default function Pad({ name, onTouchStart, onTouchEnd, isTriggered }) {
  return (
    <PadStyled
      name={toLowerNoWhiteSpace(name)}
      onTouchStart={event => onTouchStart(event)}
      onTouchEnd={event => onTouchEnd(event)}
      onMouseDown={event => onTouchStart(event)}
      onMouseUp={event => onTouchEnd(event)}
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
