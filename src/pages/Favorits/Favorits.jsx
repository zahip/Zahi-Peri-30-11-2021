import React from 'react'
import { useSelector } from 'react-redux'
import { favorits } from '../../features/favorite/favoriteSlice'
import FavoritesItem from 'features/favorite/FavoritesItem'
import './style.scss'

const Favorits = () => {
  const favoritsObject = useSelector(favorits)

  return (
    <div>
      <h1>favorits</h1>
      <div className="favoritesList">
        {Object.entries(favoritsObject).map(([key, value]) => (
          <FavoritesItem key={value.Key} favoriteItem={value} />
        ))}
      </div>
    </div>
  )
}

export default Favorits
