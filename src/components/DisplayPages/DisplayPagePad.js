import React from 'react'
import DisplayPageTitle from './DisplayPageTitle'
import styled from 'styled-components/macro'

export default function DisplayPagePad() {
  return (
    <DisplayPagePadStyled>
      <DisplayPageTitle title="Pad settings" />
    </DisplayPagePadStyled>
  )
}

const DisplayPagePadStyled = styled.article`
  display: flex;
  flex-direction: column;
`
