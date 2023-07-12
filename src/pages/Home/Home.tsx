import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import discoverPageService from "../../services/discoverPageService"
import Banner from "./components/Banner"

interface IProps {}

const Home: React.FC<IProps> = () => {
  const dispatch = useDispatch()
  const [data, setData] = useState<any[]>([])
  useEffect(() => {
    // dispatch(setToploaderProgress(30));

    discoverPageService()
      .then((fb) => {
        if (fb?.result == 1) {
          setData(fb.data?.data?.items)
        } else {
          setData([])
        }
        // dispatch(setToploaderProgress(100));
      })
      .catch((error) => {
        setData([])
        // dispatch(setToploaderProgress(100));
      })
  }, [])

  console.log(data)
  return (
    <div className="">
      {data?.map((item, index) => {
        if (item?.sectionType == "banner") {
          return <Banner key={index} data={item} />
        }

        return null
      })}
    </div>
  )
}

export default Home
