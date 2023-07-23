import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import getPlayListInfoService from "../services/playListService"
import { setPlayList, setPlayListInfo } from "../features/player/playerSlice"

const usePlaylistFw = () => {
  const dispatch = useAppDispatch()
  const id = useAppSelector((state) => state?.player?.playListId)
  useEffect(() => {
    if (!id) return
    getPlayListInfoService(id)
      .then((fb) => {
        if (fb?.result == 1) {
          dispatch(setPlayList(fb?.data?.data?.song?.items))
          dispatch(setPlayListInfo(fb?.data?.data))
        } else {
          dispatch(setPlayList([]))
        }
      })
      .catch((error) => {
        dispatch(setPlayList([]))
      })
  }, [id])
}

export default usePlaylistFw
