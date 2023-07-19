import { useEffect, useRef, useState } from "react"
import { useAppSelector } from "../../../app/hooks"
import getSongService from "../../../services/getSongService"
import { ISongMP3 } from "../../../types/item"
import { ImPause2, ImPlay3 } from "react-icons/im"
import { CirButton } from "../../Button"
import { player_ } from "../../../utils/player_"
import { AiOutlineStepBackward, AiOutlineStepForward } from "react-icons/ai"
import { IoMdPause } from "react-icons/io"
import getTime from "../../../utils/getTime"
import { DurationSong, DurationSongSlider } from "./parts/DurationSong"

interface IProps {}

const PlayerControl: React.FC<IProps> = () => {
  const { songId } = useAppSelector((state) => ({
    songId: state?.player?.songId,
  }))
  const isPlaying = useAppSelector((state) => state.player?.status?.isPlaying)
  const audioRef = useRef<HTMLAudioElement>(null)

  const [audio, setAudio] = useState<ISongMP3>({})

  const CONTROL_ITEM = [
    {
      icon: AiOutlineStepBackward,
      size: 25,
      bRadius: 40,
      callback: (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation()
        isPlaying ? player_.pause() : player_.play()
      },
    },
    {
      icon: isPlaying ? IoMdPause : ImPlay3,
      size: 35,
      bRadius: 50,
      callback: (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation()
        isPlaying ? player_.pause() : player_.play()
      },
    },
    {
      icon: AiOutlineStepForward,
      size: 25,
      bRadius: 40,
      callback: (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation()
        isPlaying ? player_.pause() : player_.play()
      },
    },
  ]

  useEffect(() => {
    if (!songId) return
    getSongService(songId).then((fb) => {
      if (fb?.result == 1) {
        setAudio(fb?.data?.data)
      }
    })
  }, [songId])

  useEffect(() => {
    if (audioRef) {
      isPlaying ? audioRef?.current?.play() : audioRef?.current?.pause()
    }
  }, [isPlaying, audio])

  return (
    <>
      <div className="flex h-full justify-center items-center px-4">
        <audio src={audio[128]} ref={audioRef} />
        <div className="flex justify-center items-center">
          {CONTROL_ITEM?.map((item, index) => {
            const Icon = item.icon
            return (
              <CirButton
                key={index}
                onClick={item.callback}
                radius={item.bRadius}
                isTransparent
                styles={{ margin: "0 4px" }}
              >
                <Icon size={item.size} />
              </CirButton>
            )
          })}
          <DurationSong audio={audioRef.current} key={audio[128]} />
        </div>
      </div>
    </>
  )
}

export default PlayerControl
