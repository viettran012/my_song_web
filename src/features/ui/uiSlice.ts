import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, AppThunk } from "../../app/store"

export interface IUiState {
  sidebarExpand: boolean
}

const initialState: IUiState = {
  sidebarExpand: true,
}

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    toggleSidebar: (state, actions: { payload: boolean }) => {
      state.sidebarExpand = actions.payload
    },
  },
})

export const { toggleSidebar } = loadingSlice.actions

export default loadingSlice.reducer
