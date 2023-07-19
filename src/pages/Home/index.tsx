import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import discoverPageService from "../../services/discoverPageService"
import Banner from "./components/Banner"
import PlayList from "./components/PlayList"
import { useAppDispatch } from "../../app/hooks"
import { changePercentLoading } from "../../features/loading/loadingSlice"
import setLoadingPage from "../../utils/setLoadingPage"

interface IProps {}

const Home: React.FC<IProps> = () => {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    setLoadingPage({ value: 30 })

    discoverPageService()
      .then((fb) => {
        if (fb?.result == 1) {
          setData(fb.data?.data?.items)
        } else {
          setData([])
        }
        setLoadingPage({ value: 100 })
      })
      .catch((error) => {
        setData([])
        setLoadingPage({ value: 100 })
      })
  }, [])

  return (
    <div className="">
      {data?.map((item, index) => {
        if (item?.sectionType == "banner") {
          return <Banner key={index} data={item} />
        }

        if (item?.sectionType == "playlist") {
          return <PlayList key={index} data={item} />
        }

        return null
      })}
    </div>
  )
}

export default Home
