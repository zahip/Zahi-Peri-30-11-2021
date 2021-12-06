import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  favorites: {},
}

export const favoriteSlice = createSlice({
  name: 'favorits',
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      const { selectedCity, currentWeather } = action.payload
      state.favorites[selectedCity.Key] = {
        Key: selectedCity.Key,
        LocalizedName: selectedCity.LocalizedName,
        Temperature: {
          Metric: {
            Value: currentWeather.Temperature.Metric.Value,
            Unit: currentWeather.Temperature.Metric.Unit,
          },
        },
        WeatherText: currentWeather.WeatherText,
      }
    },
    removeFromFavorite: (state, action) => {
      delete state.favorites[action.payload.Key]
    },
  },
})

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions

export const favorits = (state) => state?.favorite?.favorites

export default favoriteSlice.reducer
