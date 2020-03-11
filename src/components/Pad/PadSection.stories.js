import React from 'react'
import PadSection from './PadSection'
import GlobalStyles from '../../common/GlobalStyles'
import { padsData } from '../../common/padsData'
import { padPlayer } from '../../common/padPlayer'

export default {
  title: 'Pads',
  component: PadSection,
}

export const DefaultPadSection = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      padding: 10,
      height: '375px',
      width: '375px',
    }}
  >
    <GlobalStyles />
    <PadSection pads={padsData} padPlayer={padPlayer} />
  </div>
)
