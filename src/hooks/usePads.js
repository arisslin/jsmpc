import { useState } from 'react'
import { padsData } from '../common/padsData'
import {
  getPadNameByKey,
  getKeyByName,
  updateInArray,
  toLowerNoWhiteSpace,
  stopPinchZooming,
} from '../common/utils'

export default function usePad(samplePlayer) {
  const [pads, setPads] = useState(padsData)
  const [selectedPad, setSelectedPad] = useState(null)

  function handleKeyDown(event) {
    if (event.repeat) {
      return
    }
    const key = event.key
    samplePlayer.playSample(key)
    setPadIsTriggered(key, true)
    const padName = getPadNameByKey(pads, key)
    setSelectedPad(padName)
  }

  function handleKeyUp(event) {
    const key = event.key
    setPadIsTriggered(key, false)
  }

  function setPadIsTriggered(key, triggerd) {
    const index = pads.findIndex(pad => pad.key === key)
    if (index > -1) {
      const pad = { ...pads[index] }
      pad.isTriggered = triggerd
      const newPads = updateInArray(pads, pad, index)
      setPads(newPads)
    }
  }

  function handlePadTouchStart(padName) {
    const name = toLowerNoWhiteSpace(padName)
    const key = getKeyByName(pads, name)
    samplePlayer.playSample(key)
    setPadIsTriggered(key, true)
    setSelectedPad(padName)
  }

  function handlePadTouchEnd(event, padName) {
    stopPinchZooming(event)
    const name = toLowerNoWhiteSpace(padName)
    const key = getKeyByName(pads, name)
    setPadIsTriggered(key, false)
  }

  return {
    pads,
    selectedPad,
    handleKeyDown,
    handleKeyUp,
    handlePadTouchStart,
    handlePadTouchEnd,
  }
}
