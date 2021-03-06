import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

DisplayPageTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default function DisplayPageTitle({ title }) {
  return (
    <TitleStyled>
      <h2>{title}</h2>
      <hr />
    </TitleStyled>
  )
}

const TitleStyled = styled.div`
  h2 {
    margin: 0;
    font-size: 1rem;
  }

  hr {
    width: 100%;
    border: none;
    background-color: var(--color-display-font);
    height: 2px;
    margin: 6px 0 16px 0;
  }
`
