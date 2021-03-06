import React from 'react'
import { BrowserRouter as Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import DisplayPageInfo from './DisplayPages/DisplayPageInfo'
import DisplayPageMain from './DisplayPages/DisplayPageMain'
import DisplayPagePad from './DisplayPages/DisplayPagePad'

import PropTypes from 'prop-types'

Display.propTypes = {
  selectedPad: PropTypes.string,
  masterVolume: PropTypes.number.isRequired,
  adjustMasterVolume: PropTypes.func.isRequired,
}

export default function Display({
  selectedPad,
  masterVolume,
  adjustMasterVolume,
}) {
  return (
    <DisplayStyled>
      <Switch>
        <Route exact path="/">
          <DisplayPageMain
            masterVolume={masterVolume}
            onChangeInputVolume={adjustMasterVolume}
          />
        </Route>

        <Route path="/pad">
          <DisplayPagePad selectedPad={selectedPad} />
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
  font-size: 0.8rem;
  padding: 10px;
  color: var(--color-display-font);
  letter-spacing: -1px;
  overflow-y: scroll;
`
