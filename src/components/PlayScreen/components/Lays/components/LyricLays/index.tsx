import { useAppSelector } from "../../../../../../app/hooks"
import { memo, useEffect, useState, useRef } from "react"
import { getSongLyricService } from "../../../../../../services/getSongService"
import { ILyric } from "../../../../../../types/item"
import Loader from "../../../../../Loader"

interface IProps {}

const LyricLays: React.FC<IProps> = () => {
  const id = useAppSelector((state) => state.player?.songId)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [lyricData, setLyricData] = useState<ILyric[]>([])
  const [currIndexLyric, setCurrIndecLyric] = useState<number>(0)
  const indexRef = useRef<number>(0)
  const current = useAppSelector((state) => state.player?.status?.currTime)

  useEffect(() => {
    if (!lyricData?.length) return
    const curr = current * 1000 + 1000
    const index = lyricData?.findIndex((lyric) => {
      const words = lyric.words
      const start = words[0]?.startTime
      const end = words[words?.length - 1]?.endTime
      return curr < end && curr > start
    })
    if (index != -1) setCurrIndecLyric(index || 0)

    const lyricE = document.querySelector(`#lyric-word-${index}`)
    if (lyricE && index != indexRef.current) {
      lyricE.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
    }
    indexRef.current = index
  }, [current])

  useEffect(() => {
    if (!id) return setIsLoading(false)
    setIsLoading(true)
    setLyricData([])
    setCurrIndecLyric(0)

    getSongLyricService(id)
      .then((fb) => {
        setIsLoading(false)
        if (fb?.result == 1) {
          setLyricData(fb?.data?.data?.sentences)
        }
      })
      .catch((error) => setIsLoading(false))
  }, [id])

  return isLoading ? (
    <div className="w-full h-full py-5 flex justify-center items-center">
      <Loader />
    </div>
  ) : (
    <div className="my-5 px-5">
      {lyricData?.map((lyric, index) => {
        return (
          <div
            id={`lyric-word-${index}`}
            key={`lyric-word-${index}`}
            className={`transition-all ${
              currIndexLyric == index
                ? "text-turquoise font-bold"
                : "text-whiteT1"
            }`}
          >
            {lyric?.words?.map((word) => `${word?.data} `)}
          </div>
        )
      })}
    </div>
  )
}

export default memo(LyricLays)
