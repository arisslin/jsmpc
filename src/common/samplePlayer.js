import { Players } from 'tone'
import { padsData } from './padsData'

console.log(padsData)

export const samplePlayer = new Players({
  pad13: padsData[0].url,
}).toMaster()
