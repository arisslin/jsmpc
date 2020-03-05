import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { Player } from 'tone'

Pad.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default function Pad({ name, url }) {
  const player = new Player(url).toMaster()

  return (
    <PadStyled
      onClick={event => {
        player.start()
      }}
    >
      <span>{name}</span>
    </PadStyled>
  )
}

const PadStyled = styled.div`
  position: relative;
  border: 2px solid var(--color-dark);
  border-radius: 3px;
  background-color: var(--color-pad-grey);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);

  span {
    position: absolute;
    top: -0.7rem;
    font-size: 0.5rem;
    color: #3d4448;
  }
`
