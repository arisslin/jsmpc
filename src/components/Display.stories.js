import React from 'react'
import Display from './Display'
import { BrowserRouter as Router } from 'react-router-dom'
import GlobalStyles from '../common/GlobalStyles'

export default {
  title: 'Display',
  component: Display,
}

export const EmptyDisplay = () => {
  return (
    <Router>
      <GlobalStyles />
      <div
        style={{
          display: 'grid',
          gridTemplateAreas: "'display'",
          width: 400,
          height: 250,
          padding: 10,
        }}
      >
        <Display />
      </div>
    </Router>
  )
}
