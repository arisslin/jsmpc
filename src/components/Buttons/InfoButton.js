import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function InfoButton() {
  const [buttonActive, setButtonActive] = useState(false)
  const onClick = () => setButtonActive(!buttonActive)

  return (
    <>
      <ButtonStyled buttonActive={buttonActive} onClick={onClick}>
        ?
      </ButtonStyled>

      <Tooltip buttonActive={buttonActive} onClick={onClick}>
        <h3>Keyboard shortcuts</h3>
        <table>
          <thead>
            <tr>
              <th className="pr-1">key</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            <TableRow shortcut="y" action="play Pad 1" />
            <TableRow shortcut="x" action="play Pad 2" />
            <TableRow shortcut="c" action="play Pad 3" />
            <TableRow shortcut="v" action="play Pad 4" />
            <TableRow shortcut="a" action="play Pad 5" />
            <TableRow shortcut="s" action="play Pad 6" />
            <TableRow shortcut="d" action="play Pad 7" />
            <TableRow shortcut="f" action="play Pad 8" />
          </tbody>
        </table>

        <table>
          <thead>
            <tr>
              <th className="pr-1">key</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            <TableRow shortcut="y" action="play Pad 1" />
            <TableRow shortcut="x" action="play Pad 2" />
            <TableRow shortcut="c" action="play Pad 3" />
            <TableRow shortcut="v" action="play Pad 4" />
            <TableRow shortcut="a" action="play Pad 5" />
            <TableRow shortcut="s" action="play Pad 6" />
            <TableRow shortcut="d" action="play Pad 7" />
            <TableRow shortcut="f" action="play Pad 8" />
          </tbody>
        </table>
      </Tooltip>
    </>
  )
}

function TableRow({ shortcut, action }) {
  return (
    <tr>
      <td>{shortcut}</td>
      <td>{action}</td>
    </tr>
  )
}

const ButtonStyled = styled.button`
  display: none;
  position: absolute;
  right: 0;
  margin-right: 10px;
  border: 2px solid;
  border-color: var(--color-border);
  border-radius: 3px;
  height: 40px;
  width: 80px;
  background-color: ${props =>
    props.buttonActive
      ? 'var(--blue-grey-light)'
      : 'var(--color-button-light)'};
  box-shadow: ${props =>
    props.buttonActive ? 'none' : 'var(--element-box-shadow)'};
  color: ${props =>
    props.buttonActive ? 'var(--color-pad-triggered)' : 'var(--color-border)'};
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 600;
  text-shadow: var(--element-inside-text-shadow);
  user-select: none;

  @media (orientation: landscape) and (min-width: 1200px) {
    display: inline-block;
  }
`

const Tooltip = styled.div`
  display: none;
  position: absolute;
  top: 60px;
  right: 10px;
  border: 1px solid;
  border-color: var(--color-border);
  border-radius: 3px;
  padding: 14px;
  padding-bottom: 8px;
  background-color: var(--color-button-light);
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.5);
  color: var(--color-border);
  text-shadow: var(--element-inside-text-shadow);
  user-select: none;

  @media (orientation: landscape) and (min-width: 1200px) {
    display: ${props => (props.buttonActive ? 'inline-block' : 'none')};
  }

  h3 {
    margin-top: 4px;
    text-align: center;
  }

  table {
    display: inline-block;
    text-align: left;

    :first-of-type {
      margin-right: 40px;
    }
  }
`
