import React from 'react'
import styled from 'styled-components/macro'

export default function DisplayPageInfo() {
  return (
    <DisplayPageInfoStyled>
      <h2>Keyboad shortcuts</h2>
      <hr />
      <section className="keyboard">
        <Key char="1" />
        <Key char="2" />
        <Key char="3" />
        <Key char="4" />

        <Key char="q" />
        <Key char="w" />
        <Key char="e" />
        <Key char="r" />

        <Key char="a" />
        <Key char="s" />
        <Key char="d" />
        <Key char="f" />

        <Key char="y" />
        <Key char="x" />
        <Key char="c" />
        <Key char="v" />
      </section>
    </DisplayPageInfoStyled>
  )
}

function Key({ char }) {
  return <KeyStyled>{char}</KeyStyled>
}

const DisplayPageInfoStyled = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;

  .keyboard {
    align-self: center;
    display: grid;
    height: 160px;
    width: 160px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 4px;
  }
`

const KeyStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  background-color: var(--color-display-font);
  color: var(--color-display);
  padding: 10px;
`
