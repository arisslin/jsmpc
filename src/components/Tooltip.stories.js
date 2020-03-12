import React from 'react'
import { action } from '@storybook/addon-actions'
import Tooltip from './Tooltip'
import GlobalStyles from '../common/GlobalStyles'

export default {
  title: 'Tooltip',
  component: Tooltip,
}

export const TooltipDefault = () => {
  return (
    <>
      <GlobalStyles />
      <Tooltip
        buttonActive={action('buttonActive')}
        onClick={action('onClick')}
      />
    </>
  )
}
