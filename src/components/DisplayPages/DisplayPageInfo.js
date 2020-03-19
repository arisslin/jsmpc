import React from 'react'
import DisplayPageTitle from './DisplayPageTitle'
import { padsData } from '../../common/padsData'
import styled from 'styled-components/macro'

export default function DisplayPageInfo() {
  return (
    <PageStyled>
      <DisplayPageTitle title="Keyboard shortcuts" />
      <Keyboard>
        {padsData.map(pad => (
          <Key key={pad.key}>{pad.key}</Key>
        ))}
      </Keyboard>
    </PageStyled>
  )
}

const PageStyled = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Keyboard = styled.section`
  align-self: center;
  display: grid;
  height: 160px;
  width: 160px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 4px;
`

const Key = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  background-color: var(--color-display-font);
  color: var(--color-display);
  padding: 10px;
`
