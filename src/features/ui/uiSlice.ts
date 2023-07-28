import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, AppThunk } from "../../app/store"

interface IPlaylistSelect {
  isShow: boolean
  callback?: (id: string) => void
  title: string
}

export interface IUiState {
  sidebarExpand: boolean
  isLoginModalShow: boolean
  playlistSelect: IPlaylistSelect
}

const initialState: IUiState = {
  sidebarExpand: true,
  isLoginModalShow: false,
  playlistSelect: {
    isShow: false,
    title: "",
  },
}

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    toggleSidebar: (state, actions: { payload: boolean }) => {
      state.sidebarExpand = actions.payload
    },
    setLoginModalShow: (state, actions: { payload: boolean }) => {
      state.isLoginModalShow = actions.payload
    },
    setPlaylistSelect: (state, actions: { payload: IPlaylistSelect }) => {
      state.playlistSelect = { ...actions.payload }
    },
  },
})

export const { toggleSidebar, setLoginModalShow, setPlaylistSelect } =
  loadingSlice.actions

export default loadingSlice.reducer
