import store from "../app/store"
import { togglePlayer, togglePlayerInfo } from "../features/player/playerSlice"
import { setLoginModalShow, setPlaylistSelect } from "../features/ui/uiSlice"

export const showPlayer = (value: boolean) => {
  store.dispatch(togglePlayer(value))
}

export const showPlayerInfo = (value: boolean) => {
  document.body.style.overflowY = value ? "hidden" : "scroll"

  store.dispatch(togglePlayerInfo(value))
}

interface IShowPlaylistSelect {
  callback?: (id: string) => void
  title?: string
}

export const ui = {
  showLoginModal: function () {
    store?.dispatch(setLoginModalShow(true))
  },
  hiddenLoginModal: function () {
    store?.dispatch(setLoginModalShow(false))
  },
  showPlaylistSelect: function ({ callback, title }: IShowPlaylistSelect) {
    store?.dispatch(
      setPlaylistSelect({
        isShow: true,
        callback: callback,
        title: title || "Chọn danh sách phát",
      }),
    )
  },
  hiddenPlaylistSelect: function () {
    store?.dispatch(
      setPlaylistSelect({
        isShow: false,
        callback: (id) => {},
        title: "",
      }),
    )
  },
}

export const loginCallback = (callback: () => void | Promise<void>) => {
  const isLogin = store?.getState()?.user?.isLogin
  isLogin ? callback() : ui.showLoginModal()
}
