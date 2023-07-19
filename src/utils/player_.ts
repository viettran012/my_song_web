import store from "../app/store"
import { setStatus } from "../features/player/playerSlice"

export const player_ = {
  play: function () {
    store?.dispatch(setStatus({ isPlaying: true }))
  },
  pause: function () {
    store?.dispatch(setStatus({ isPlaying: false }))
  },
}
