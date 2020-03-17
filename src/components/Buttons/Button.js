import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function Button({ text }) {
  const [active, setActive] = useState(false)
  const onClick = () => setActive(!active)

  return (
    <ButtonStyled active={active} onClick={onClick}>
      {text}
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
  flex-wrap: wrap;
  margin-left: 8px;
  border: 2px solid;
  border-color: var(--color-border);
  border-radius: 3px;
  padding: 8px;
  width: 70px;
  background-color: ${props =>
    props.active ? 'var(--blue-grey-light)' : 'var(--color-button-light)'};
  box-shadow: ${props => (props.active ? 'none' : 'var(--element-box-shadow)')};
  color: ${props =>
    props.active ? 'var(--color-pad-triggered)' : 'var(--color-border)'};
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 600;
  text-shadow: var(--element-inside-text-shadow);
  user-select: none;

  :first-child {
    margin-left: 0;
  }
`
