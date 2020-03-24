import React from 'react'

export default function Tick({ tick, count }) {
  return (
    <div>
      <div
        style={{
          position: 'absolute',
          marginTop: 26,
          marginLeft: -0.5,
          width: 2,
          height: 12,
          backgroundColor: 'var(--color-display-font-trans-light)',
          left: `${tick.percent}%`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          marginTop: 40,
          fontSize: 10,
          textAlign: 'center',
          marginLeft: `${-(100 / count) / 2}%`,
          width: `${100 / count}%`,
          left: `${tick.percent}%`,
        }}
      >
        {tick.value}
      </div>
    </div>
  )
}
