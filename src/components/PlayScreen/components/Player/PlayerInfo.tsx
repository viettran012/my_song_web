import { useAppSelector } from "../../../../app/hooks"
import { SONG_ACTION } from "../../../../items/ACTION_ITEM"
import { ISongInfo } from "../../../../types/item"
import { CirButton } from "../../../Button"
import { DurationSongSlider } from "./parts/DurationSong"

interface IProps {
  info: ISongInfo
}

const PlayerInfo: React.FC<IProps> = ({ info }) => {
  return (
    <div className="h-11 flex">
      <div className="mr-3">
        <img alt="song-thumb" src={info?.thumbnailM} className="h-11" />
      </div>
      <div className="flex flex-col justify-between">
        <div className="font-bold">{info?.title}</div>
        <div className="text-whiteT1 font-semibold">{info?.artistsNames}</div>
      </div>
      <div className="ml-3 flex mr-3 text-white">
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
    </div>
  )
}

export default PlayerInfo
