import { Link } from "react-router-dom"
import { ISong } from "../../../types/item"
import { createPlayListHref, createPlayerHref } from "../../../utils/createHref"
import Artists from "../../../components/Artists"
import getTime from "../../../utils/getTime"
import { AiOutlineMore } from "react-icons/ai"
import { CirButton } from "../../../components/Button"
import { PiHeartLight } from "react-icons/pi"
import { FaPlay } from "react-icons/fa"

import { SONG_ACTION } from "../../../items/ACTION_ITEM"

interface IProps {
  song: ISong
  handlePlaySong?: (song: ISong) => void
}

const SongItem: React.FC<IProps> = ({ song, handlePlaySong = () => {} }) => {
  const href = createPlayerHref(song?.encodeId)

  return (
    <div className="group border-b border-neutral-900 h-12 flex items-center">
      <div className="flex items-center flex-a2 overflow-hidden mr-4">
        <div>
          <div
            onClick={() => handlePlaySong(song)}
            className="h-7 w-7 mr-4 relative cursor-pointer"
          >
            <img
              loading="lazy"
              src={song.thumbnailM}
              alt="song-thumbnail"
              className="rounded-sm h-full object-cover"
            />
            <div className="flex items-center justify-center opacity-0 group-hover:opacity-100 h-full w-full top-0 absolute z-10 bg-opacity-60 bg-black">
              <FaPlay className="text-white" />
            </div>
          </div>
        </div>
        <Link to={href}>
          <div
            onClick={() => handlePlaySong(song)}
            className="font-semibold whitespace-nowrap cursor-pointer"
          >
            <div>{song?.title}</div>
          </div>
        </Link>
      </div>
      <div className="flex-a3 flex justify-between">
        <div className="text-whiteT1 text-sm flex items-center">
          <Artists artists={song?.artists} />
        </div>
        <div className="text-whiteT1 flex items-center">
          <div className="opacity-0 group-hover:opacity-100 flex mr-3 text-white">
            {SONG_ACTION.map((item, index) => {
              const Icon = item?.icon
              return (
                <div key={index} className="mr-1">
                  <CirButton isTransparent={true}>
                    <Icon className="text-2xl" />
                  </CirButton>
                </div>
              )
            })}
          </div>
          <div className="text-sm">
            {getTime.caculateTimeFM(song?.duration)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SongItem
