import store from "../app/store"
import {
  resetAudio,
  rewindSong,
  setStatus,
} from "../features/player/playerSlice"

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

  ready: function () {
    store?.dispatch(setStatus({ isLoading: false }))
  },
}
