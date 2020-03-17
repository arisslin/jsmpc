import React from 'react'
import styled from 'styled-components/macro'

export default function DisplayPageInfo() {
  return (
    <DisplayPageInfoStyled>
      <h2>Info Page</h2>
    </DisplayPageInfoStyled>
  )
}

const DisplayPageInfoStyled = styled.article`
  display: none;
`
