import { useAppSelector } from "../../../../app/hooks"
import { ISongInfo } from "../../../../types/item"
import { player_ } from "../../../../utils/player_"
import { SongImgThumbVariant } from "../../../Variants"
import MainArea from "./components/MainArea"
import PlayListLays from "./components/PlayListLays"
import ThumbMain from "./components/ThumbMain"

interface IProps {
  song: ISongInfo
  isLoading: boolean
}

const Lays: React.FC<IProps> = ({ song, isLoading }) => {
  const isShowInfo = useAppSelector((state) => state.player.isShoaInfo)

  return (
    <div
      className={`w-full h-full pt-6 px-20 z-10 flex items-center ${
        isShowInfo ? "pr-[92px]" : ""
      }`}
    >
      <div className="w-full h-full flex">
        <div className="w-3/5 flex">
          {isShowInfo && <ThumbMain song={song} isLoading={isLoading} />}
        </div>
        <div className="w-2/5 flex flex-col">
          <MainArea />
        </div>
      </div>
    </div>
  )
}

export default Lays
