import { useAppSelector } from "../../../../app/hooks"
import { ISongInfo } from "../../../../types/item"

interface IProps {
  song: ISongInfo
}

const Lays: React.FC<IProps> = ({ song }) => {
  const isShowInfo = useAppSelector((state) => state.player.isShoaInfo)

  return (
    <div
      className={`w-full h-full pt-6 px-20 z-10 flex items-center ${
        isShowInfo ? "pr-[92px]" : ""
      }`}
    >
      <div className="max-w-7xl w-full h-full flex">
        <div className="flex-a3 flex">
          {isShowInfo && (
            <div className={`flex-1 relative flex justify-center items-center`}>
              <img alt="song-thumbnail" src={song?.thumbnailM} />
            </div>
          )}
        </div>
        <div className="flex-a2"></div>
      </div>
    </div>
  )
}

export default Lays
