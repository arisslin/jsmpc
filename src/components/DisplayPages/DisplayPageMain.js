import React from 'react'
import DisplayPageTitle from './DisplayPageTitle'
import styled from 'styled-components/macro'

export default function DisplayPageMain({ masterVolume }) {
  return (
    <DisplayPageMainStyled>
      <DisplayPageTitle title="Main" />
      <p>
        Master Volume: <input type="number" /> dB
      </p>
    </DisplayPageMainStyled>
  )
}

const DisplayPageMainStyled = styled.article`
  display: flex;
  flex-direction: column;
`
