import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
  text: '',
}

export const modalSlice = createSlice({
  name: 'favorits',
  initialState,
  reducers: {
    setIsModalOpen: (state, action) => {
      state.isOpen = action.payload.isOpen
      state.text = action.payload.text
    },
  },
})

export const { setIsModalOpen } = modalSlice.actions

// export const modalIsOpen = (state) => state?.modal?.isOpen

export default modalSlice.reducer
