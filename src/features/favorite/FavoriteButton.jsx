import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  addToFavorite,
  removeFromFavorite,
} from 'features/favorite/favoriteSlice'
import { isCityExistInFavorites } from './favoriteSelector'
import Checkbox from '../../components/shared/Checkbox/Checkbox'

const FavoriteButton = ({ selectedCity, currentWeather }) => {
  const isCityExist = useSelector(isCityExistInFavorites)
  const dispatch = useDispatch()
  const handleChange = () => {
    if (isCityExist) {
      dispatch(removeFromFavorite(selectedCity))
    } else {
      dispatch(addToFavorite({ selectedCity, currentWeather }))
    }
  }
  return (
    <div>
      <Checkbox
        handleChange={handleChange}
        checked={!!isCityExist}
        label={isCityExist ? 'Remove From Favorites' : 'Add To Favorites'}
      />
      {/* <span>
        <FavoriteIcon sx={{ color: isCityExist ? pink[500] : blue[500] }} />
      </span>
      <span>{isCityExist ? 'Remove From Favorite' : 'Add To Favoirte'}</span> */}
    </div>
  )
}

export default memo(FavoriteButton)
