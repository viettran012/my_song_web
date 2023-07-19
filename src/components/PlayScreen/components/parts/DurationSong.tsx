import { useEffect, useState } from "react"
import getTime from "../../../../utils/getTime"
import { Slider } from "antd"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { setStatus } from "../../../../features/player/playerSlice"
import { number } from "react-i18next/icu.macro"

interface IDurationSong {
  audio: HTMLAudioElement | null
}
export const DurationSong: React.FC<IDurationSong> = ({ audio }) => {
  const dispath = useAppDispatch()
  const current = useAppSelector((state) => state?.player?.status?.currTime)
  const duration = useAppSelector((state) => state?.player?.status?.duration)
  useEffect(() => {
    if (audio) {
      audio.ontimeupdate = () => {
        const currentTime = Math.ceil(audio?.currentTime || 0)
        dispath(setStatus({ currTime: currentTime }))
      }
      audio.oncanplay = () => {
        dispath(setStatus({ duration: audio?.duration }))
      }
    }
  }, [audio])

  return (
    <div className="text-whiteT1 text-xs ml-3">
      {`${getTime.caculateTimeFM(current)} / ${getTime.caculateTimeFM(
        Math.ceil(duration || 0),
      )}`}
    </div>
  )
}

interface IDurationSongSlider {}

export const DurationSongSlider: React.FC<IDurationSongSlider> = () => {
  const current = useAppSelector((state) => state?.player?.status?.currTime)
  const duration = useAppSelector((state) => state?.player?.status?.duration)

  const onChange = (value: number) => {
    console.log(number)
  }

  return (
    <div className="absolute top-[-4px] left-0 right-0 h-3 bg-transparent">
      <Slider
        style={{ margin: 0 }}
        trackStyle={{ backgroundColor: "#43bcff", height: 2 }}
        railStyle={{ backgroundColor: "#515151", height: 2 }}
        defaultValue={0}
        // value={current}
        onChange={onChange}
        max={duration}
      />
    </div>
  )
}
