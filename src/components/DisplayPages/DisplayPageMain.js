import React from 'react'
import DisplayPageTitle from './DisplayPageTitle'
import styled from 'styled-components/macro'
import VolumeSlider from '../../components/VolumeSlider'
import PropTypes from 'prop-types'

DisplayPageMain.propTypes = {
  masterVolume: PropTypes.number.isRequired,
  onChangeInputVolume: PropTypes.func.isRequired,
}

export default function DisplayPageMain({ masterVolume, onChangeInputVolume }) {
  return (
    <DisplayPageMainStyled>
      <DisplayPageTitle title="Main" />
      <VolumeSlider
        label="Master Volume"
        masterVolume={masterVolume}
        onChangeInputVolume={handleVolumeChange}
      />
    </DisplayPageMainStyled>
  )

  function handleVolumeChange(event) {
    const targetValue = Number(event.target.value)
    onChangeInputVolume(targetValue)
  }
}

const DisplayPageMainStyled = styled.article`
  display: flex;
  flex-direction: column;
`
