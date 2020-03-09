import React from 'react'
import PadSection from './PadSection'
import Pad from './Pad'
import GlobalStyles from '../../common/GlobalStyles'
import { padsData } from '../../common/padsData'
import { samplePlayer } from '../../common/samplePlayer'

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
    <PadSection pads={padsData} samplePlayer={samplePlayer} />
  </div>
)
