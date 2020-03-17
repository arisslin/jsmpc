import React from 'react'
import PadSection from './PadSection'
import GlobalStyles from '../../common/GlobalStyles'
import { padsData } from '../../common/padsData'

export default {
  title: 'Pads',
  component: PadSection,
}

export const DefaultPadSection = () => (
  <div
    style={{
      display: 'grid',
      width: 400,
      height: 400,
      padding: 10,
    }}
  >
    <GlobalStyles />
    <PadSection pads={padsData} />
  </div>
)
