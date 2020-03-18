import React from 'react'
import DisplayNav from './DisplayNav'
import { BrowserRouter as Router } from 'react-router-dom'
import GlobalStyles from '../common/GlobalStyles'

export default {
  title: 'DisplayNav',
  component: DisplayNav,
}

export const DefaultDisplayNav = () => {
  return (
    <Router>
      <GlobalStyles />
      <div
        style={{
          display: 'grid',
          gridTemplateAreas: "'controls'",
          gridTemplateRows: 'auto',
          width: 400,
          padding: 10,
          backgroundColor: '#E8E8E8',
        }}
      >
        <DisplayNav />
      </div>
    </Router>
  )
}
