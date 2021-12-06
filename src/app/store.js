import { configureStore } from '@reduxjs/toolkit'
import favoritReducer from '../features/favorite/favoriteSlice'
import weatherReducer from '../features/weather/weatherSlice'
import colorModeReducer from '../features/colorMode/colorModeSlice'
import modalReducer from '../features/modal/modalSlice'

export const store = configureStore({
  reducer: {
    favorite: favoritReducer,
    weather: weatherReducer,
    colorMode: colorModeReducer,
    modal: modalReducer,
  },
})
