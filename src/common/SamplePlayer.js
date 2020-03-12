import { Players } from 'tone'

import { createKeyFromString } from './utils'

export default class SamplePlayer {
  constructor(padsData) {
    this._pads = this._createPads(padsData)
    this.samplePlayers = new Players(
      this._createSoundUrlsObject(this.pads)
    ).toMaster()
  }

  // *** getter ***

  getPads() {
    return this._pads
  }

  // *** setter ***

  setPads(pads) {
    this._pads = pads
  }

  // *** Public Methods ***

  playSample(key) {
    console.log('Play Sample')

    this._pads.forEach(pad => {
      if (pad.key === key) {
        const player = this.samplePlayers.get(pad.name)
        player.start()
      }
    })
  }

  // *** Private methods ***

  _createPads(padsData) {
    const pads = padsData.map(pad => {
      return this._createPad(pad)
    })
    return pads
  }

  _createPad(pad) {
    return {
      name: createKeyFromString(pad.name),
      soundUrl: pad.url,
      key: pad.key,
    }
  }

  _createSoundUrlsObject() {
    try {
      let urls = this._pads.reduce((allUrls, pad) => {
        allUrls[pad.name] = pad.soundUrl
        return allUrls
      }, {})
      return urls
    } catch (error) {
      console.log(error)
    }
  }
}
