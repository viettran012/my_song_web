import { useAppDispatch } from "../../../app/hooks"
import { togglePlayer } from "../../../features/player/playerSlice"
import { ISong } from "../../../types/item"
import { playSong, setSong } from "../../../utils/playSong"
import { player_ } from "../../../utils/player_"
import { showPlayer } from "../../../utils/ui"
import SongItem from "./SongItem"

interface SongListProps {
  list: ISong[]
}

const SongList: React.FC<SongListProps> = ({ list }) => {
  const handlePlaySong = (song: ISong) => {
    showPlayer(true)
    setSong({ id: song.encodeId })
    player_.play()
  }

  return (
    <div className="mt-14">
      {list.map((song, index) => (
        <SongItem handlePlaySong={handlePlaySong} key={index} song={song} />
      ))}
    </div>
  )
}

export { SongList }
