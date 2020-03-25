import React from 'react'
import DisplayPageTitle from './DisplayPageTitle'
import styled from 'styled-components/macro'
import Slider from '../../components/Slider'

export default function DisplayPageMain({ masterVolume, onChangeInputVolume }) {
  return (
    <DisplayPageMainStyled>
      <DisplayPageTitle title="Main" />
      <Slider
        masterVolume={masterVolume}
        onChangeInputVolume={onChangeInputVolume}
      />
    </DisplayPageMainStyled>
  )
}

const DisplayPageMainStyled = styled.article`
  display: flex;
  flex-direction: column;
`
