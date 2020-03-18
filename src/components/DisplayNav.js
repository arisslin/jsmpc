import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function DisplayNav() {
  return (
    <DisplayNavStyled>
      <LinkStyled exact to="/">
        Main
      </LinkStyled>
      <LinkStyled to="/pad">Pad</LinkStyled>
      <LinkStyled to="/info">?</LinkStyled>
    </DisplayNavStyled>
  )
}

const DisplayNavStyled = styled.nav`
  grid-area: controls;
  display: flex;
  justify-content: center;
  @media (orientation: landscape) {
    padding-bottom: 14px;
  }
`
const LinkStyled = styled(NavLink)`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;

  margin-left: 8px;
  border: 2px solid;
  border-color: var(--color-border);
  border-radius: 3px;
  padding: 8px;
  width: 70px;

  background-color: var(--color-button-light);
  box-shadow: var(--element-box-shadow);
  color: var(--color-border);
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
  text-shadow: var(--element-inside-text-shadow);
  user-select: none;

  :first-child {
    margin-left: 0;
  }

  &.active {
    background: var(--blue-grey-light);
    box-shadow: none;
    color: var(--color-pad-border-triggered);
  }
`
