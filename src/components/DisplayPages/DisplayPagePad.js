import React from 'react'
import DisplayPageTitle from './DisplayPageTitle'
import styled from 'styled-components/macro'

export default function DisplayPagePad({ selectedPad }) {
  return (
    <DisplayPagePadStyled>
      <DisplayPageTitle title="Pad settings" />
      <p>{selectedPad}</p>
      <p>Volume: </p>
    </DisplayPagePadStyled>
  )
}

const DisplayPagePadStyled = styled.article`
  display: flex;
  flex-direction: column;
`
