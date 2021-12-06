import React from 'react'
import { useNavigate } from 'react-router-dom'
import { setSelectedCity } from 'features/weather/weatherSlice'
import { useDispatch } from 'react-redux'
import Card from '../../components/shared/Card/Card'

const FavoritesItem = ({ favoriteItem }) => {
  const navigate = useNavigate()
  const { LocalizedName, Temperature, WeatherText } = favoriteItem
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(setSelectedCity(favoriteItem))
    navigate('/')
  }
  return (
    <Card>
      <div onClick={handleClick}>
        <div>{LocalizedName}</div>
        <div>
          <span>{Temperature.Metric.Value}</span>
          <span>{Temperature.Metric.Unit}</span>
        </div>
        <div>{WeatherText}</div>
      </div>
    </Card>
  )
}

export default FavoritesItem
