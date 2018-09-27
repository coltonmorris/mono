import * as data from './StreamingHistory.json'
import * as d3 from 'd3'

type tSong = {
  endTime: string,
  artistName: string,
  trackName: string
}

var t1: Map<string, number> = new Map<string, number>()


const songs: tSong[] = (<any>data)

songs.forEach((song) => {
  if (!t1.has(song.trackName)) {
    t1.set(song.trackName, 0)
  }
  t1.set(song.trackName, (t1.get(song.trackName))! + 1)
})

console.log(t1.get('Xanarchy'))
