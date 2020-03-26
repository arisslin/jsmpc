import React from 'react'
import DisplayPageTitle from './DisplayPageTitle'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

DisplayPagePad.propTypes = {
  selectedPad: PropTypes.string,
}

export default function DisplayPagePad({ selectedPad }) {
  return (
    <DisplayPagePadStyled>
      <DisplayPageTitle title="Pad settings" />
      <p>{selectedPad || 'Pad 1'}</p>
    </DisplayPagePadStyled>
  )
}

const DisplayPagePadStyled = styled.article`
  display: flex;
  flex-direction: column;
`
