import React from 'react'
import styled from 'styled-components/macro'

export default function VolumeSlider({
  label,
  masterVolume,
  onChangeInputVolume,
}) {
  return (
    <VolumeSliderStyled htmlFor="volume-slider">
      {label}: <span>{masterVolume}dB</span>
      <input
        name="volume-slider"
        type="range"
        min="-80"
        max="6"
        defaultValue={masterVolume}
        onChange={onChangeInputVolume}
      />
    </VolumeSliderStyled>
  )
}

const VolumeSliderStyled = styled.label`
  display: block;

  span {
    display: inline-block;
    width: 58px;
    text-align: right;
  }

  input[type='range'] {
    display: block;
    -webkit-appearance: none;
    width: 100%;
    margin: 16px 0;
    background: transparent;
  }
  input[type='range']:focus {
    outline: none;
  }

  /* for -webkit */

  input[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    background: var(--color-display-font-trans-light);
  }

  input[type='range']::-webkit-slider-thumb {
    height: 20px;
    width: 16px;
    border-radius: 3px;
    background: var(--color-display-font);
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -6px;
  }

  input[type='range']:focus::-webkit-slider-runnable-track {
    background: var(--color-display-font-trans-light);
  }

  /* for -moz */

  input[type='range']::-moz-range-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    background: var(--color-display-font-trans-light);
  }

  input[type='range']::-moz-range-thumb {
    height: 20px;
    width: 16px;
    border-radius: 3px;
    border: none;
    background: var(--color-display-font);
    cursor: pointer;
  }

  /* for -ms */

  input[type='range']::-ms-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  input[type='range']::-ms-fill-lower {
    background: var(--color-display-font-trans-light);
    border: none;
    border-radius: 0px;
  }

  input[type='range']::-ms-fill-upper {
    background: var(--color-display-font-trans-light);
    border: none;
    border-radius: 0px;
  }

  input[type='range']::-ms-thumb {
    border: none;
    height: 20px;
    width: 16px;
    border-radius: 3px;
    background: var(--color-display-font);
    cursor: pointer;
    height: 8px;
  }

  input[type='range']:focus::-ms-fill-lower {
    background: var(--color-display-font-trans-light);
  }

  input[type='range']:focus::-ms-fill-upper {
    background: var(--color-display-font-trans-light);
  }
`
