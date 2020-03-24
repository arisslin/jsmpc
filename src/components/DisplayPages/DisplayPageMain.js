import React from 'react'
import DisplayPageTitle from './DisplayPageTitle'
import styled from 'styled-components/macro'

export default function DisplayPageMain({ masterVolume }) {
  console.log(masterVolume)

  return (
    <DisplayPageMainStyled>
      <DisplayPageTitle title="Main" />
      <p>
        Master Volume:{' '}
        <input
          name="master-volume"
          type="number"
          min="-100"
          max="6"
          defaultValue={masterVolume}
        />
        dB
      </p>
    </DisplayPageMainStyled>
  )
}

const DisplayPageMainStyled = styled.article`
  display: flex;
  flex-direction: column;
`
