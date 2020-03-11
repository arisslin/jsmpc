import React from 'react'
import { action } from '@storybook/addon-actions'
import GlobalStyles from '../../common/GlobalStyles'
import InfoButton from './InfoButton'

export default {
  title: 'Buttons/InfoButton',
  component: InfoButton,
}

export const InfoButtonDefault = () => {
  return (
    <>
      <GlobalStyles />
      <InfoButton />
    </>
  )
}
