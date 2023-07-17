import { useCallback, useEffect, useState } from "react"
import { useLocation, useParams, useSearchParams } from "react-router-dom"
import getPlayListInfoService from "../../services/playListService"
import PlayListBsInfo from "./components/PlayListBsInfo"
import { IPlayList } from "../../types/item"
import Loader from "../../components/Loader"
import setLoadingPage from "../../utils/setLoadingPage"
import { PlayListVariants } from "./components/PlayListVariants"
import { SongList } from "./components/SongList"

interface IProps {}

const PlayList: React.FC<IProps> = ({}) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const [data, setData] = useState<IPlayList>({})
  const [isLoading, setIsloading] = useState<boolean>(true)

  const setLoading = useCallback((type: boolean) => {
    setIsloading(type)
    setLoadingPage({ value: type ? 30 : 100 })
  }, [])

  useEffect(() => {
    const id = searchParams.get("id")

    setLoading(true)

    getPlayListInfoService(id || "")
      .then((fb) => {
        setLoading(false)
        if (fb?.result == 1) setData(fb?.data?.data)
      })
      .catch((error) => {
        setLoading(false)
      })
  }, [searchParams])

  return (
    <div>
      {isLoading ? (
        <PlayListVariants />
      ) : (
        <div className="py-7">
          <PlayListBsInfo data={data} />
          <SongList list={data?.song?.items || []} />
        </div>
      )}
    </div>
  )
}

export default PlayList
