import { Players } from 'tone'

import { createKeyFromString } from './utils'

export default class SamplePlayer {
  constructor(padsData) {
    this.pads = this._createPads(padsData)
    this.samplePlayers = new Players(
      this._createSoundUrls(this.pads)
    ).toMaster()
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
      isTriggerd: false,
    }
  }

  _createSoundUrls(padsData) {
    let urls = padsData.reduce((allUrls, pad) => {
      allUrls[pad.name] = pad.soundUrl
      return allUrls
    }, {})
    return urls
  }
}
