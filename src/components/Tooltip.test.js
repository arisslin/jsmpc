import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import { TableRow } from './Tooltip'

describe('<TableRow />', () => {
  let container = null
  beforeEach(() => {
    container = document.createElement('tbody')
    document.body.appendChild(container)
  })

  afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null
  })

  it('renders with text', () => {
    act(() => {
      render(<TableRow shortcut="a" action="b" />, container)
    })
    expect(container.innerHTML).toBe('<tr><td>a</td><td>b</td></tr>')
  })
})
