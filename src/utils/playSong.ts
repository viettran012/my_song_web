import store from "../app/store"
import { setSongId } from "../features/player/playerSlice"
import { player_ } from "./player_"
import { showPlayer, showPlayerInfo } from "./ui"

interface IPlaySongProps {
  id: string
}

export const playSong = ({ id = "" }: IPlaySongProps) => {
  showPlayer(true)
  showPlayerInfo(true)
  setSong({ id })
}

export const setSong = ({ id = "" }: IPlaySongProps) => {
  store.dispatch(setSongId(id))
}
