import { useEffect, useState } from "react"
import { SONG_ACTION } from "../../items/ACTION_ITEM"
import { ISong, ISongInfo } from "../../types/item"
import { CirButton } from "../Button"
import { useAppSelector } from "../../app/hooks"
import { loginCallback } from "../../utils/ui"

interface IProps {
  song: ISong | ISongInfo
  isHoverShow?: boolean
}

export const SongAction: React.FC<IProps> = ({ song, isHoverShow = true }) => {
  const fvList = useAppSelector((state) => state?.user?.favoriteListID)
  const [useAnimate, setUseAnimate] = useState(false)
  const [isLike, setIsLike] = useState(
    fvList?.includes(song?.encodeId || "000"),
  )

  useEffect(() => {
    setIsLike(fvList?.includes(song?.encodeId || "000"))
  }, [fvList])

  return SONG_ACTION.map((item, index) => {
    const isHeart = item.id == "heart"
    const isHeartLike = isLike && isHeart
    const random = Math?.random()
    const Icon = isHeartLike ? item?.activeIcon : item?.icon
    const color = isHeartLike ? "var(--heart-color)" : "#ffffff"
    const callback = item?.callback
    const cb = () => {
      setUseAnimate(true)
      callback({ song, isLike })
      isHeart && setIsLike(!isLike)
    }
    return (
      <div
        key={index}
        className={`mr-1 ${
          isHoverShow && !isHeartLike ? "opacity-0" : ""
        } group-hover:opacity-100`}
      >
        <CirButton
          isTransparent={true}
          onClick={() => {
            item?.isLoginedAction ? loginCallback(cb) : cb()
          }}
        >
          {isHeart ? (
            <div
              className={`toggle-heart ${
                isHeartLike
                  ? `${useAnimate ? "is-liked" : "is-liked-not-animate"}`
                  : ""
              }`}
            >
              <Icon color={color} />
            </div>
          ) : (
            <Icon className="text-2xl" color={color} />
          )}
        </CirButton>
      </div>
    )
  })
}
