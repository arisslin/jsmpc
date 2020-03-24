import React from 'react'

export default function Handle({
  handle: { id, value, percent },
  getHandleProps,
}) {
  return (
    <div
      style={{
        left: `${percent}%`,
        position: 'absolute',
        marginLeft: -15,
        marginTop: 4,
        zIndex: 2,
        width: 30,
        height: 30,
        border: 0,
        textAlign: 'center',
        cursor: 'pointer',
        borderRadius: '3px',
        backgroundColor: 'var(--color-display-font)',
        color: '#333',
      }}
      {...getHandleProps(id)}
    >
      <div style={{ fontFamily: 'Roboto', fontSize: 11, marginTop: -15 }}>
        {value}
      </div>
    </div>
  )
}
