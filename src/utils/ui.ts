import store from "../app/store"
import { togglePlayer, togglePlayerInfo } from "../features/player/playerSlice"

export const showPlayer = (value: boolean) => {
  store.dispatch(togglePlayer(value))
}

export const showPlayerInfo = (value: boolean) => {
  document.body.style.overflowY = value ? "hidden" : "scroll"

  store.dispatch(togglePlayerInfo(value))
}
