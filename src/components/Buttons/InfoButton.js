import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Tooltip from '../Tooltip'

export default function InfoButton() {
  const [buttonActive, setButtonActive] = useState(false)
  const onClick = () => setButtonActive(!buttonActive)

  return (
    <>
      <ButtonStyled buttonActive={buttonActive} onClick={onClick}>
        ?
      </ButtonStyled>
      <Tooltip buttonActive={buttonActive} onClick={onClick} />
    </>
  )
}

const ButtonStyled = styled.button`
  display: none;
  position: absolute;
  right: 0;
  margin-right: 10px;
  border: 2px solid;
  border-color: var(--color-border);
  border-radius: 3px;
  height: 40px;
  width: 80px;
  background-color: ${props =>
    props.buttonActive
      ? 'var(--blue-grey-light)'
      : 'var(--color-button-light)'};
  box-shadow: ${props =>
    props.buttonActive ? 'none' : 'var(--element-box-shadow)'};
  color: ${props =>
    props.buttonActive ? 'var(--color-pad-triggered)' : 'var(--color-border)'};
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 600;
  text-shadow: var(--element-inside-text-shadow);
  user-select: none;

  @media (orientation: landscape) and (min-width: 1200px) {
    display: inline-block;
  }
`
