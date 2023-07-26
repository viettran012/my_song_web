import store from "../app/store"
import { togglePlayer, togglePlayerInfo } from "../features/player/playerSlice"
import { setLoginModalShow } from "../features/ui/uiSlice"

export const showPlayer = (value: boolean) => {
  store.dispatch(togglePlayer(value))
}

export const showPlayerInfo = (value: boolean) => {
  document.body.style.overflowY = value ? "hidden" : "scroll"

  store.dispatch(togglePlayerInfo(value))
}

export const ui = {
  showLoginModal: function () {
    store?.dispatch(setLoginModalShow(true))
  },
  hiddenLoginModal: function () {
    store?.dispatch(setLoginModalShow(false))
  },
}

export const loginCallback = (callback: () => void | Promise<void>) => {
  const isLogin = store?.getState()?.user?.isLogin
  isLogin ? callback() : ui.showLoginModal()
}
