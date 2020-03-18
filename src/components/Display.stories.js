import React from 'react'
import Display from './Display'
import { BrowserRouter as Router } from 'react-router-dom'
import GlobalStyles from '../common/GlobalStyles'

export default {
  title: 'Display',
  component: Display,
}

export const DefaultDisplay = () => {
  return (
    <Router>
      <GlobalStyles />
      <div
        style={{
          display: 'grid',
          width: 400,
          height: 400,
          padding: 10,
        }}
      >
        <Display />
      </div>
    </Router>
  )
}
