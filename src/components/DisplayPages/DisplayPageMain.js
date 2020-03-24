import React from 'react'
import DisplayPageTitle from './DisplayPageTitle'
import styled from 'styled-components/macro'

export default function DisplayPageMain({ masterVolume, onChangeInputVolume }) {
  return (
    <DisplayPageMainStyled>
      <DisplayPageTitle title="Main" />
      <p>
        Master Volume: {masterVolume}dB
        <input
          name="master-volume"
          type="range"
          min="-100"
          max="6"
          defaultValue={masterVolume}
          onChange={onChangeInputVolume}
        />
      </p>
    </DisplayPageMainStyled>
  )
}

const DisplayPageMainStyled = styled.article`
  display: flex;
  flex-direction: column;
`
