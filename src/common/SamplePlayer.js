import { Players } from 'tone'

export default class SamplePlayer {
  constructor(padsData) {
    this._pads = this._createPads(padsData)
    this.samplePlayers = new Players(
      this._createSoundUrlsObject(this._pads)
    ).toMaster()
  }

  // *** getter ***

  getPads() {
    return this._pads
  }

  // *** Public Methods ***

  playSample(key) {
    this._pads.forEach(pad => {
      if (pad.key === key) {
        const player = this.samplePlayers.get(pad.key)
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
      soundUrl: pad.url,
      key: pad.key,
    }
  }

  _createSoundUrlsObject() {
    try {
      let urls = this._pads.reduce((allUrls, pad) => {
        allUrls[pad.key] = pad.soundUrl
        return allUrls
      }, {})
      return urls
    } catch (error) {
      console.log(error)
    }
  }
}
