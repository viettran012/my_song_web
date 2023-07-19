import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, AppThunk } from "../../app/store"
import Home from "../../pages/Home"
import { ReactNode } from "react"

export interface IState {
  isShow: boolean
  isShoaInfo: boolean
  songId: string
  status: {
    isPlaying: boolean
    currTime: number
    duration: number
  }
  rewindListener: {
    isScroll: boolean
    to: number
    key: number
  }
}

const initialState: IState = {
  isShow: false,
  isShoaInfo: false,
  songId: "",
  status: {
    isPlaying: false,
    currTime: 0,
    duration: 0,
  },
  rewindListener: {
    isScroll: false,
    to: 0,
    key: 0,
  },
}

export const selectValue = (state: RootState) => state.loading.value

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    togglePlayer: (state, actions: { payload: boolean }) => {
      state.isShow = actions.payload
    },
    togglePlayerInfo: (state, actions: { payload: boolean }) => {
      state.isShoaInfo = actions.payload
    },
    setSongId: (state, actions: { payload: string }) => {
      state.songId = actions.payload
    },
    setStatus: (
      state,
      actions: {
        payload: { isPlaying?: boolean; currTime?: number; duration?: number }
      },
    ) => {
      state.status = { ...state.status, ...actions.payload }
    },
    rewindSong: (
      state,
      actions: { payload: { isScroll?: boolean; to?: number } },
    ) => {
      state.rewindListener = {
        ...state.rewindListener,
        ...actions.payload,
      }
    },
    resetAudio: (state) => {
      state.rewindListener.key = Math.random()
    },
  },
})

export const {
  togglePlayer,
  togglePlayerInfo,
  setSongId,
  setStatus,
  rewindSong,
  resetAudio,
} = playerSlice.actions

export default playerSlice.reducer
