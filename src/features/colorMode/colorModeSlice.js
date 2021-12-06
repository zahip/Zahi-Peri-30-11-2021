import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mode: 'light',
}

export const colorModeSlice = createSlice({
  name: 'colorMode',
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload
    },
  },
})

export const { setMode } = colorModeSlice.actions

export const colorMode = (state) => state?.colorMode?.mode

export default colorModeSlice.reducer
