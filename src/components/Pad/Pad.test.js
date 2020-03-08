import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import Pad from './Pad'

let container = null
beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

describe('<Pad />', () => {
  it('renders with name', () => {
    act(() => {
      render(<Pad name="Pad 1" />, container)
    })
    expect(container.textContent).toBe('Pad 1')
  })
})
