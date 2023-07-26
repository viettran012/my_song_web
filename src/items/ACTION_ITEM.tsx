import { AiOutlineMore } from "react-icons/ai"
import { PiHeartFill, PiHeartLight } from "react-icons/pi"
import { ISong, ISongInfo } from "../types/item"
import { initData, likeSong } from "../services/userServices"
import { loginCallback } from "../utils/ui"
import { pushFvPlaylist, removeFvPlaylist } from "../utils/setUser"
import toast from "react-hot-toast"
import { InfoToast } from "../components/Toast"

interface ISongActionCallback {
  song: ISong | ISongInfo
  isLike?: boolean
}

export const SONG_ACTION = [
  {
    id: "heart",
    icon: PiHeartLight,
    activeIcon: PiHeartFill,
    isActive: false,
    isLoginedAction: true,
    callback: function ({ song, isLike }: ISongActionCallback) {
      if (!song?.encodeId) return
      if (isLike) {
        removeFvPlaylist(song?.encodeId)
      } else {
        pushFvPlaylist(song?.encodeId)
        toast.custom(
          (t) => (
            <InfoToast
              t={t}
              infoText={`Đã thêm '${song?.title}' vào danh sách yêu thích`}
            />
          ),
          {
            duration: 3000,
          },
        )
      }

      loginCallback(() =>
        likeSong({ ...song, is_liked: isLike ? 0 : 1 }).then((fb) => {}),
      )
    },
  },
  {
    id: "options",
    icon: AiOutlineMore,
    isActive: false,
    callback: function ({ song }: ISongActionCallback) {},
  },
]
