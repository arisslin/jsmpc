import React from 'react'
import DisplayPageTitle from './DisplayPageTitle'
import styled from 'styled-components/macro'

export default function DisplayPageMain({ masterVolume, onChangeInputVolume }) {
  return (
    <DisplayPageMainStyled>
      <DisplayPageTitle title="Main" />
      <label htmlFor="master-volume">
        Master Volume: <span>{masterVolume}dB</span>
        <input
          name="master-volume"
          type="range"
          min="-80"
          max="6"
          defaultValue={masterVolume}
          onChange={onChangeInputVolume}
        />
      </label>
    </DisplayPageMainStyled>
  )
}

const DisplayPageMainStyled = styled.article`
  display: flex;
  flex-direction: column;

  label[for='master-volume'] {
    span {
      display: inline-block;
      width: 58px;
      text-align: right;
    }
  }
`
const RailStyled = styled.div`
  position: absolute;
  width: 100%;
  height: 10px;
  margin-top: 14px;
  border-radius: 3px;
  background-color: var(--color-display-font-trans-strong);
`
