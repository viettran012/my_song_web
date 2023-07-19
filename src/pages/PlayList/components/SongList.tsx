import { useAppDispatch } from "../../../app/hooks"
import { togglePlayer } from "../../../features/player/playerSlice"
import { ISong } from "../../../types/item"
import { showPlayer } from "../../../utils/ui"
import SongItem from "./SongItem"

interface SongListProps {
  list: ISong[]
}

const SongList: React.FC<SongListProps> = ({ list }) => {
  const handlePlaySong = (song: ISong) => {
    showPlayer(true)
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
