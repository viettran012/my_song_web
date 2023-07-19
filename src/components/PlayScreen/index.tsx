import { useNavigate } from "react-router-dom"
import { useAppSelector } from "../../app/hooks"
import { showPlayerInfo } from "../../utils/ui"
import { createPlayerHref } from "../../utils/createHref"
import { useEffect, useState } from "react"
import getSongService, {
  getSongInfoService,
} from "../../services/getSongService"
import PlayerInfo from "./components/PlayerInfo"
import { ISongInfo } from "../../types/item"
import PlayerControl from "./components/PlayerControl"
import PlayerAction from "./components/PlayerAction"
import { DurationSongSlider } from "./components/parts/DurationSong"

interface IProps {}

export const PlayScreen: React.FC<IProps> = () => {
  const navigate = useNavigate()
  const isShowInfo = useAppSelector((state) => state.player.isShoaInfo)
  const isShow = useAppSelector((state) => state.player.isShow)

  const songId = useAppSelector((state) => state.player.songId)
  const route = useAppSelector((state) => state.routes.pay)

  const [song, setSong] = useState<ISongInfo>({})

  const handleToggleShowInfo = () => {
    isShowInfo
      ? navigate(
          route?.currentPath?.pathname
            ? `${route?.currentPath?.pathname}` + `${route.currentPath.search}`
            : "/",
        )
      : navigate(createPlayerHref(songId))
  }

  useEffect(() => {
    if (!songId) return
    getSongInfoService(songId)
      .then((fb) => {
        if (fb?.result == 1) {
          setSong(fb?.data?.data)
        } else {
        }
      })
      .catch((error) => {})
  }, [songId])

  return (
    isShow && (
      <>
        <div
          className={`transition-all duration-300 fixed z-10 ${
            isShowInfo ? "top-header" : "top-[100vh]"
          } left-0 right-0 bottom-playcard bg-black flex flex-col`}
        ></div>

        <div
          onClick={handleToggleShowInfo}
          className={` animate__animated animate__slideInUp h-playcard fixed z-20 bg-grayL bottom-0 left-0 right-0 flex justify-center items-center ${
            isShowInfo ? "pr-[12px]" : ""
          }`}
        >
          <div className="absolute left-0 top-0 bottom-0">
            <PlayerControl />
          </div>
          <div>
            <PlayerInfo info={song} />
          </div>
          <div
            className={`absolute right-0 top-0 bottom-0 ${
              isShowInfo ? "right-[12px]" : ""
            }`}
          >
            <PlayerAction />
          </div>
          <div
            onClick={(e: React.MouseEvent<HTMLElement>) => e.stopPropagation()}
            className="absolute top-0 right-0 left-0"
          >
            <DurationSongSlider key={songId} />
          </div>
        </div>
      </>
    )
  )
}
