import { useEffect, useRef } from "react"
import { useLocation, useSearchParams } from "react-router-dom"
import { IPath } from "../types/item"
import { useAppDispatch } from "../app/hooks"
import { setRoute } from "../features/routes/routesSlice"
import routesConfig from "../configs/routes"
import { playSong } from "../utils/playSong"
import { showPlayerInfo } from "../utils/ui"

const useHistory = () => {
  const dispatch = useAppDispatch()
  const prePath = useRef<IPath>({})
  const midlePath = useRef<IPath>({})
  const path: IPath = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    midlePath.current = path
    if (path?.pathname !== routesConfig.player) {
      dispatch(
        setRoute({
          prePath: prePath.current,
          currentPath: path,
        }),
      )
      showPlayerInfo(false)
    } else {
      const id = searchParams.get("id") || ""
      playSong({ id })
    }
  }, [path])

  if (midlePath.current?.pathname !== path?.pathname) {
    prePath.current = midlePath.current
  }

  return {
    prePath: prePath.current,
    currentPath: path,
  }
}

export default useHistory
