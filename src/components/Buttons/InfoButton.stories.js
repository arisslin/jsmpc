import React from 'react'
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
