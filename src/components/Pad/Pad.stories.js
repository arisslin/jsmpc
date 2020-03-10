import React from 'react'
import { action } from '@storybook/addon-actions'
import Pad from './Pad'
import GlobalStyles from '../../common/GlobalStyles'

export default {
  title: 'Pads',
  component: Pad,
}

export const DefaultPad = () => (
  <div
    style={{
      margin: 20,
      height: '100px',
      width: '100px',
      display: 'grid',
    }}
  >
    <GlobalStyles />
    <Pad
      name="Pad 1"
      isTriggered={false}
      player={{ start: action('player.start()') }}
      onTouchStart={action('onTouchStart')}
      onTouchEnd={action('onTouchEnd')}
    />
  </div>
)

export const DefaultPadTriggered = () => (
  <div
    style={{
      margin: 20,
      height: '100px',
      width: '100px',
      display: 'grid',
    }}
  >
    <GlobalStyles />
    <Pad
      name="Pad 1"
      isTriggered={true}
      player={{ start: action('player.start()') }}
      onTouchStart={action('onTouchStart')}
      onTouchEnd={action('onTouchEnd')}
    />
  </div>
)
