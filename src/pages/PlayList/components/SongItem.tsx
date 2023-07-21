import { Link } from "react-router-dom"
import { ISong } from "../../../types/item"
import { createPlayListHref, createPlayerHref } from "../../../utils/createHref"
import Artists from "../../../components/Artists"
import getTime from "../../../utils/getTime"
import { AiOutlineMore } from "react-icons/ai"
import { CirButton } from "../../../components/Button"
import { PiHeartLight } from "react-icons/pi"
import { IoVolumeHighOutline } from "react-icons/io5"
import { useEffect, memo } from "react"

import { FaPause, FaPlay } from "react-icons/fa"

import { SONG_ACTION } from "../../../items/ACTION_ITEM"
import { useAppSelector } from "../../../app/hooks"
import { IoMdPause } from "react-icons/io"
import Loader from "../../../components/Loader"

interface IProps {
  song: ISong
  handlePlaySong?: (song: ISong, isPlaying?: boolean) => void
}

interface IInfoThumbProps {
  isFocus: boolean
  isPlaying: boolean
}

const InfoThumb: React.FC<IInfoThumbProps> = ({ isFocus, isPlaying }) => {
  const isLoading = useAppSelector((state) => state.player?.status?.isLoading)
  return isLoading && isFocus ? (
    <div
      className={`flex items-center justify-center opacity-100 h-full w-full top-0 absolute z-10 bg-opacity-60 bg-black`}
    >
      <Loader size={20} />
    </div>
  ) : (
    <>
      <div
        className={`flex items-center justify-center opacity-0 group-hover:opacity-100 h-full w-full top-0 absolute z-20 bg-opacity-60 bg-black`}
      >
        {isPlaying ? (
          <IoMdPause size={20} className="text-white" />
        ) : (
          <FaPlay className="text-white" />
        )}
      </div>

      {isFocus ? (
        <div
          className={`flex items-center justify-center opacity-100 group-hover:opacity-0 h-full w-full top-0 absolute z-10 bg-opacity-60 bg-black`}
        >
          <IoVolumeHighOutline size={20} className="text-white" />
        </div>
      ) : null}
    </>
  )
}

const SongItem: React.FC<IProps> = ({ song, handlePlaySong = () => {} }) => {
  const href = createPlayerHref(song?.encodeId)
  const songId = useAppSelector((state) => state.player.songId)
  const isPlaying_ = useAppSelector((state) => state.player.status.isPlaying)
  const isLoading = useAppSelector((state) => state.player?.status?.isLoading)

  const isPlaying = songId == song?.encodeId && isPlaying_
  const isFocus = songId == song?.encodeId

  return (
    <div
      className={`group border-b border-neutral-900 h-12 px-2 flex items-center ${
        isFocus ? "bg-grayL" : ""
      }`}
    >
      <div className="flex items-center flex-a2 overflow-hidden mr-4">
        <div>
          <div
            onClick={() => handlePlaySong(song, isPlaying)}
            className="h-7 w-7 mr-4 relative cursor-pointer"
          >
            <img
              loading="lazy"
              src={song.thumbnailM}
              alt="song-thumbnail"
              className="rounded-sm h-full object-cover"
            />
            <InfoThumb isFocus={isFocus} isPlaying={isPlaying} />
          </div>
        </div>
        <Link to={href}>
          <div
            onClick={() => handlePlaySong(song)}
            className="font-semibold whitespace-nowrap cursor-pointer"
          >
            <div>{song?.title}</div>
          </div>
        </Link>
      </div>
      <div className="flex-a3 flex justify-between">
        <div className="text-whiteT1 text-sm flex items-center">
          <Artists artists={song?.artists} />
        </div>
        <div className="text-whiteT1 flex items-center">
          <div className="opacity-0 group-hover:opacity-100 flex mr-3 text-white">
            {SONG_ACTION.map((item, index) => {
              const Icon = item?.icon
              return (
                <div key={index} className="mr-1">
                  <CirButton isTransparent={true}>
                    <Icon className="text-2xl" />
                  </CirButton>
                </div>
              )
            })}
          </div>
          <div className="text-sm">
            {getTime.caculateTimeFM(song?.duration)}
          </div>
        </div>
      </div>
    </div>
  )
}

export const SongItemCard: React.FC<IProps> = memo(
  ({ song, handlePlaySong = () => {} }) => {
    const href = createPlayerHref(song?.encodeId)
    const songId = useAppSelector((state) => state.player.songId)
    const isPlaying_ = useAppSelector((state) => state.player.status.isPlaying)

    const isPlaying = songId == song?.encodeId && isPlaying_
    const isFocus = songId == song?.encodeId

    useEffect(() => {
      if (songId && isFocus) {
        const element = document.querySelector(
          `.song-playlist-item-player-${songId}`,
        )
        element &&
          element.scrollIntoView({
            behavior: "smooth",
            block: "center",
          })
      }
    }, [songId])

    return (
      <div
        className={`group song-playlist-item-player-${
          song?.encodeId
        } border-b border-neutral-900 h-16 px-2 flex items-center justify-between cursor-all-scroll ${
          isFocus ? "bg-grayL" : ""
        }`}
      >
        <div className="flex items-center overflow-hidden mr-4">
          <div>
            <div
              onClick={() => handlePlaySong(song, isPlaying)}
              className="h-9 w-9 mr-4 relative cursor-pointer"
            >
              <img
                loading="lazy"
                src={song.thumbnailM}
                alt="song-thumbnail"
                className="rounded-sm h-full object-cover"
              />
              <InfoThumb isFocus={isFocus} isPlaying={isPlaying} />
            </div>
          </div>
          <div>
            <Link to={href}>
              <div
                onClick={() => handlePlaySong(song)}
                className="font-semibold whitespace-nowrap cursor-pointer"
              >
                <div>{song?.title}</div>
              </div>
            </Link>
            <div className="text-whiteT1 text-sm flex items-center whitespace-nowrap">
              <Artists artists={song?.artists} />
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-whiteT1 flex items-center">
            <div className="opacity-0 group-hover:opacity-100 flex text-white">
              {SONG_ACTION.map((item, index) => {
                const Icon = item?.icon
                return (
                  <div key={index} className="mr-1">
                    <CirButton isTransparent={true}>
                      <Icon className="text-2xl" />
                    </CirButton>
                  </div>
                )
              })}
            </div>
            <div className="text-sm group-hover:hidden">
              {getTime.caculateTimeFM(song?.duration)}
            </div>
          </div>
        </div>
      </div>
    )
  },
)

export default SongItem
