import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function Button() {
  const [active, setActive] = useState(false)
  const onClick = () => setActive(!active)

  return (
    <ButtonStyled active={active} onClick={onClick}>
      ?
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
  border: 2px solid;
  border-color: var(--color-border);
  border-radius: 3px;
  height: 40px;
  width: 80px;
  background-color: ${props =>
    props.active ? 'var(--blue-grey-light)' : 'var(--color-button-light)'};
  box-shadow: ${props => (props.active ? 'none' : 'var(--element-box-shadow)')};
  color: ${props =>
    props.active ? 'var(--color-pad-triggered)' : 'var(--color-border)'};
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 600;
  text-shadow: var(--element-inside-text-shadow);
  user-select: none;
`
