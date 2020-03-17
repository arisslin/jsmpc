import React from 'react'
import GlobalStyles from '../../common/GlobalStyles'
import Button from './Button'

export default {
  title: 'Button',
  component: Button,
}

export const ButtonDefault = () => {
  return (
    <>
      <GlobalStyles />
      <Button text="?" />
    </>
  )
}
