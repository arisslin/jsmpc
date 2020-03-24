import React from 'react'
import DisplayPageTitle from './DisplayPageTitle'
import styled from 'styled-components/macro'

export default function DisplayPageMain({ masterVolume, onChangeInputVolume }) {
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
          onInput={onChangeInputVolume}
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
