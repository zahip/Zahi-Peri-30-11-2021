import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedCityObj: {},
  unit: 'F',
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setSelectedCity: (state, action) => {
      state.selectedCityObj = action.payload
    },
    setUnit: (state, action) => {
      state.unit = action.payload
    },
  },
})

export const { setSelectedCity, setUnit } = weatherSlice.actions

export const selectedCity = (state) => state.weather.selectedCityObj
export const selectedUnit = (state) => state.weather.unit

export default weatherSlice.reducer
