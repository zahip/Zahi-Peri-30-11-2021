import { createSelector } from '@reduxjs/toolkit'
import { favorits } from './favoriteSlice'
import { selectedCity } from 'features/weather/weatherSlice'

export const isCityExistInFavorites = createSelector(
  favorits,
  selectedCity,
  (favoriteObj, selectedCity) => {
    return favoriteObj[selectedCity.Key]
  },
)
