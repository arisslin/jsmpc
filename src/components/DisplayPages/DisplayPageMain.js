import React from 'react'
import DisplayPageTitle from './DisplayPageTitle'
import styled from 'styled-components/macro'
import { Slider, Handles, Rail, Tracks, Ticks } from 'react-compound-slider'
import Handle from '../Slider/Handle'
import Track from '../Slider/Track'
import Tick from '../Slider/Tick'

export default function DisplayPageMain({ masterVolume, onChangeInputVolume }) {
  return (
    <DisplayPageMainStyled>
      <DisplayPageTitle title="Main" />
      {/* <label htmlFor="master-volume">
        Master Volume: <span>{masterVolume}dB</span>
        <input
          name="master-volume"
          type="range"
          min="-80"
          max="6"
          defaultValue={masterVolume}
          onChange={onChangeInputVolume}
        />
      </label> */}
      <SliderStyled domain={[-80, 6]} step={0.5} mode={2} values={[0]}>
        <Rail>{({ getRailProps }) => <RailStyled {...getRailProps()} />}</Rail>
        <Handles>
          {({ handles, getHandleProps }) => (
            <div className="slider-handles">
              {handles.map(handle => (
                <Handle
                  key={handle.id}
                  handle={handle}
                  getHandleProps={getHandleProps}
                />
              ))}
            </div>
          )}
        </Handles>
        <Tracks right={false}>
          {({ tracks, getTrackProps }) => (
            <div className="slider-tracks">
              {tracks.map(({ id, source, target }) => (
                <Track
                  key={id}
                  source={source}
                  target={target}
                  getTrackProps={getTrackProps}
                />
              ))}
            </div>
          )}
        </Tracks>
        <Ticks count={5}>
          {({ ticks }) => (
            <div className="slider-ticks">
              {ticks.map(tick => (
                <Tick key={tick.id} tick={tick} count={ticks.length} />
              ))}
            </div>
          )}
        </Ticks>
      </SliderStyled>
    </DisplayPageMainStyled>
  )
}

const DisplayPageMainStyled = styled.article`
  display: flex;
  flex-direction: column;

  /* label[for='master-volume'] {
    span {
      display: inline-block;
      width: 58px;
      text-align: right;
    }
  } */
`

const SliderStyled = styled(Slider)`
  position: relative;
  width: 100%;
  height: 40px;
`

const RailStyled = styled.div`
  position: absolute;
  width: 100%;
  height: 10px;
  margin-top: 14px;
  border-radius: 3px;
  background-color: var(--color-display-font-trans-strong);
`
