import React from 'react'
import { BrowserRouter as Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import DisplayPageInfo from './DisplayPages/DisplayPageInfo'
import DisplayPageMain from './DisplayPages/DisplayPageMain'
import DisplayPagePad from './DisplayPages/DisplayPagePad'

export default function Display() {
  return (
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
  )
}

const DisplayStyled = styled.section`
  grid-area: display;
  border: 2px solid var(--color-display-border);
  border-radius: 3px;
  background-color: var(--color-display);
  font-family: 'Press Start 2P', Arial;
  padding: 10px;
  color: var(--color-display-font);
  letter-spacing: -1px;
  overflow-y: scroll;

  h2 {
    margin: 0;
    font-size: 1.2rem;
  }

  hr {
    width: 100%;
    border: none;
    background-color: var(--color-display-font);
    height: 2px;
    margin: 6px 0 16px 0;
  }
`
