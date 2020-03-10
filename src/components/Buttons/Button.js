import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

export function InfoButton() {
  return <InfoButtonStyled>?</InfoButtonStyled>
}

const InfoButtonStyled = styled.button`
  display: none;
  position: absolute;
  right: 0;
  margin-right: 10px;
  border: 2px solid;
  border-color: var(--color-button-border);
  border-radius: 3px;
  height: 40px;
  width: 80px;
  background-color: var(--color-button-light);
  /* background-color: #888888; */
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  color: var(--color-button-border);
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 0;

  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);
  /* text-shadow: 0 -1px 1px #8f8f8f7a, 0 1px 1px rgba(255, 255, 255, 0.4); */

  @media (min-width: 1200px) {
    display: inline-block;
  }
`
