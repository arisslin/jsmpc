import React from 'react'
import styled from 'styled-components/macro'

export default function DisplayPageMain() {
  return (
    <DisplayPageMainStyled>
      <h2>Main</h2>
    </DisplayPageMainStyled>
  )
}

const DisplayPageMainStyled = styled.article`
  display: flex;
`
