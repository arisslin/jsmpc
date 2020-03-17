import React from 'react'
import styled from 'styled-components/macro'
import DisplayPageMain from './DisplayPages/DisplayPageMain'
import DisplayPagePad from './DisplayPages/DisplayPagePad'
import DisplayPageInfo from './DisplayPages/DisplayPageInfo'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default function Display() {
  return (
    <Router>
      <DisplayStyled>
        <Switch>
          <Route exact path="/">
            <DisplayPageMain />
          </Route>

          <Route path="/pad">
            <DisplayPagePad />
          </Route>

          <Route path="/info">
            <DisplayPageInfo />
          </Route>
        </Switch>
      </DisplayStyled>
    </Router>
  )
}

const DisplayStyled = styled.section`
  grid-area: display;
  border: 2px solid var(--color-display-border);
  border-radius: 3px;
  background-color: var(--color-display);
  font-family: 'Press Start 2P', Arial;
  padding: 6px;
  color: var(--color-display-font);
  letter-spacing: -1px;

  .display-invert {
    color: var(--color-display);
    background-color: var(--color-display-font);
  }
`
