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
    <Pad name="Pad 1" player={{ start: action('player.start()') }} />
  </div>
)
