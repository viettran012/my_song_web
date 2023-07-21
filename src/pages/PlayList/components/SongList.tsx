import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import store from "../../../app/store"
import DragDrop from "../../../components/DragDrop"
import Loader from "../../../components/Loader"
import { setPlayList, togglePlayer } from "../../../features/player/playerSlice"
import getPlayListInfoService from "../../../services/playListService"
import { ISong } from "../../../types/item"
import { playSong, setSong } from "../../../utils/playSong"
import { player_ } from "../../../utils/player_"
import { showPlayer } from "../../../utils/ui"
import SongItem, { SongItemCard } from "./SongItem"
import { useState, useEffect } from "react"
import React, { Component } from "react"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import { createPlayerHref } from "../../../utils/createHref"

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

// const SongListLays: React.FC<SongListLaysProps> = ({ id }) => {
//   // const [list, setList] = useState<ISong[]>([])
//   const list = useAppSelector((state) => state?.player?.playList)
//   const [isLoading, setIsLoading] = useState<boolean>(true)

//   // useEffect(() => {
//   //   if (!id) return setIsLoading(false)
//   //   setIsLoading(true)
//   //   setList([])
//   //   setTimeout(() => {
//   //     getPlayListInfoService(id)
//   //       .then((fb) => {
//   //         setIsLoading(false)
//   //         if (fb?.result == 1) {
//   //           setList(fb?.data?.data?.song?.items || [])
//   //         }
//   //       })
//   //       .catch((error) => {
//   //         setIsLoading(false)
//   //       })
//   //   }, 500)
//   // }, [id])

//   useEffect(() => {
//     setIsLoading(false)
//   }, [list])

//   useEffect(() => {
//     if (!id) return setIsLoading(false)
//     setIsLoading(true)
//   }, [id])

//   const handlePlaySong = (song: ISong, isPlaying?: boolean) => {
//     showPlayer(true)

//     if (!isPlaying) {
//       setSong({ id: song.encodeId, playListId: id })
//       player_.play()
//     } else {
//       player_.pause()
//     }
//   }

//   return isLoading ? (
//     <div className="w-full h-full py-5 flex justify-center items-center">
//       <Loader />
//     </div>
//   ) : (
//     <div className="mt-0">
//       {list.map((song, index) => (
//         <SongItemCard handlePlaySong={handlePlaySong} key={index} song={song} />
//       ))}
//     </div>
//   )
// }

////////////////////////////////////////////////////////////////////////////////////////////

const SongListLays: React.FC<SongListLaysProps> = ({ id }) => {
  const list = useAppSelector((state) => state?.player?.playList)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const dispath = useAppDispatch()
  const navigate = useNavigate()

  const handlePlaySong = (song: ISong, isPlaying?: boolean) => {
    showPlayer(true)

    if (!isPlaying) {
      // setSong({ id: song.encodeId, playListId: id })
      navigate(createPlayerHref(song?.encodeId))
      player_.play()
    } else {
      player_.pause()
    }
  }

  const onDragEnd = (newList: ISong[]) => {
    if (newList?.length) {
      dispath(setPlayList(newList))
    }
  }

  useEffect(() => {
    setIsLoading(false)
  }, [list])

  useEffect(() => {
    if (!id) return setIsLoading(false)
    setIsLoading(true)
  }, [id])
  return isLoading ? (
    <div className="w-full h-full py-5 flex justify-center items-center">
      <Loader />
    </div>
  ) : (
    <div className="mt-0">
      <DragDrop
        dropId="song-player-list"
        onDragEnd={onDragEnd}
        renderList={list}
        renderItem={(song, index) => {
          return (
            <SongItemCard
              handlePlaySong={handlePlaySong}
              key={index}
              song={song}
            />
          )
        }}
      />
      {/* {list.map((song, index) => (
        <SongItemCard handlePlaySong={handlePlaySong} key={index} song={song} />
      ))} */}
    </div>
  )
}

export { SongList, SongListLays }
