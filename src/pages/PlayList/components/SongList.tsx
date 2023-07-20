import { useAppDispatch } from "../../../app/hooks"
import Loader from "../../../components/Loader"
import { togglePlayer } from "../../../features/player/playerSlice"
import getPlayListInfoService from "../../../services/playListService"
import { ISong } from "../../../types/item"
import { playSong, setSong } from "../../../utils/playSong"
import { player_ } from "../../../utils/player_"
import { showPlayer } from "../../../utils/ui"
import SongItem, { SongItemCard } from "./SongItem"
import { useState, useEffect } from "react"

interface SongListProps {
  list: ISong[]
  id: string
}

const SongList: React.FC<SongListProps> = ({ list, id }) => {
  const handlePlaySong = (song: ISong, isPlaying?: boolean) => {
    showPlayer(true)
    if (!isPlaying) {
      setSong({ id: song.encodeId, playListId: id })
      player_.play()
    } else {
      player_.pause()
    }
  }

  return (
    <div className="mt-14">
      {list.map((song, index) => (
        <SongItem handlePlaySong={handlePlaySong} key={index} song={song} />
      ))}
    </div>
  )
}

interface SongListLaysProps {
  id: string
}

const SongListLays: React.FC<SongListLaysProps> = ({ id }) => {
  const [list, setList] = useState<ISong[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    if (!id) return setIsLoading(false)
    setIsLoading(true)
    setList([])
    setTimeout(() => {
      getPlayListInfoService(id)
        .then((fb) => {
          setIsLoading(false)
          if (fb?.result == 1) {
            setList(fb?.data?.data?.song?.items || [])
          }
        })
        .catch((error) => {
          setIsLoading(false)
        })
    }, 500)
  }, [id])

  const handlePlaySong = (song: ISong, isPlaying?: boolean) => {
    showPlayer(true)

    if (!isPlaying) {
      setSong({ id: song.encodeId, playListId: id })
      player_.play()
    } else {
      player_.pause()
    }
  }

  return isLoading ? (
    <div className="w-full h-full py-5 flex justify-center items-center">
      <Loader />
    </div>
  ) : (
    <div className="mt-0">
      {list.map((song, index) => (
        <SongItemCard handlePlaySong={handlePlaySong} key={index} song={song} />
      ))}
    </div>
  )
}

export { SongList, SongListLays }
