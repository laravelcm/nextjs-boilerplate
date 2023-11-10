import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/redux/store'
import { AppState } from '@/shared/types/state'

const initialState: AppState = {
  name: '',
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
  },
})

export const { updateName } = appSlice.actions
export const getAppName = (state: RootState) => state.app.name
export default appSlice.reducer
