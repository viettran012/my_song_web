import { ISong } from "../../../types/item"
import SongItem from "./SongItem"

interface SongListProps {
  list: ISong[]
}

const SongList: React.FC<SongListProps> = ({ list }) => {
  return (
    <div className="mt-9">
      {list.map((song, index) => (
        <SongItem key={index} song={song} />
      ))}
    </div>
  )
}

export { SongList }
