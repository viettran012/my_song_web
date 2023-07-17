import { Link } from "react-router-dom"
import { ISong } from "../../../types/item"
import { createPlayListHref } from "../../../utils/createHref"
import Artists from "../../../components/Artists"
import getTime from "../../../utils/getTime"

interface IProps {
  song: ISong
}

const SongItem: React.FC<IProps> = ({ song }) => {
  console.log(song)
  return (
    <div className="border-b border-neutral-900 h-12 flex items-center">
      <div className="flex items-center flex-a2 overflow-hidden mr-4">
        <div>
          <div className="h-7 w-7 mr-4">
            <img
              loading="lazy"
              src={song.thumbnailM}
              alt="song-thumbnail"
              className="rounded-sm h-full object-cover cursor-pointer"
            />
          </div>
        </div>
        <div className="font-semibold whitespace-nowrap">
          <div>{song?.title}</div>
        </div>
      </div>
      <div className="flex-a3 flex justify-between">
        <div className="text-whiteT1 text-sm">
          <Artists artists={song?.artists} />
        </div>
        <div className="text-whiteT1">
          {getTime.caculateTimeFM(song?.duration)}
        </div>
      </div>
    </div>
  )
}

export default SongItem
