import { useAppSelector } from "../../../../app/hooks"
import { ISongInfo } from "../../../../types/item"
import { SongImgThumbVariant } from "../../../Variants"
import MainArea from "./components/MainArea"
import PlayListLays from "./components/PlayListLays"

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
          {isShowInfo && (
            <div
              className={`flex-1 relative h-full flex justify-center items-center`}
            >
              {isLoading ? (
                <SongImgThumbVariant />
              ) : (
                <img
                  alt="song-thumbnail"
                  src={song?.thumbnailM}
                  className="h-full"
                />
              )}
            </div>
          )}
        </div>
        <div className="w-2/5 flex flex-col">
          <MainArea />
        </div>
      </div>
    </div>
  )
}

export default Lays
