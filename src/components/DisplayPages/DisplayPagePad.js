import React from 'react'
import styled from 'styled-components/macro'

export default function DisplayPagePad() {
  return (
    <DisplayPagePadStyled>
      <h2>Pad Settings</h2>
    </DisplayPagePadStyled>
  )
}

const DisplayPagePadStyled = styled.article`
  display: flex;
`