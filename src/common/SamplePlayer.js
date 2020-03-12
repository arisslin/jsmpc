import { Players } from 'tone'

import { createKeyFromString } from './utils'

export default class SamplePlayer {
  constructor(padsData) {
    const padUrls = this._createSoundUrls(padsData)
    this.samplePlayers = new Players(padUrls).toMaster()
  }

  // *** Private methods ***

  _createSoundUrls(padsData) {
    let urls = padsData.reduce((allUrls, pad) => {
      allUrls[createKeyFromString(pad.name)] = pad.url
      return allUrls
    }, {})
    return urls
  }
}
