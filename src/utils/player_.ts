import store from "../app/store"
import {
  resetAudio,
  rewindSong,
  setStatus,
} from "../features/player/playerSlice"
import { setSong } from "./playSong"

export const player_ = {
  play: function () {
    store?.dispatch(setStatus({ isPlaying: true }))
  },
  pause: function () {
    store?.dispatch(setStatus({ isPlaying: false }))
  },
  rewind: function (props: { to?: number; isScroll?: boolean }) {
    store?.dispatch(rewindSong(props))
  },
  reset: function () {
    store?.dispatch(resetAudio())
  },
  next: function () {
    const playerState = store?.getState()?.player
    const currSong = playerState?.songId
    const playlist = playerState?.playList || []
    const nextSong = playlist?.find(
      (_, index) => playlist[index - 1]?.encodeId == currSong,
    )

    setSong({ id: nextSong?.encodeId || playlist[0]?.encodeId })
  },
  pre: function () {
    const playerState = store?.getState()?.player
    const currSong = playerState?.songId
    const playlist = playerState?.playList || []
    const nextSong = playlist?.find(
      (_, index) => playlist[index + 1]?.encodeId == currSong,
    )

    setSong({
      id: nextSong?.encodeId || playlist[playlist?.length - 1]?.encodeId,
    })
  },
  ready: function () {
    store?.dispatch(setStatus({ isLoading: false }))
  },
}
