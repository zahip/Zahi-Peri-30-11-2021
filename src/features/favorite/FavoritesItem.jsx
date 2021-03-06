import React from 'react'
import { useNavigate } from 'react-router-dom'
import { setSelectedCity } from 'features/weather/weatherSlice'
import { useDispatch } from 'react-redux'
import Card from '../../components/shared/Card/Card'
import './style.scss'
import useConvertUnit from 'hooks/useConvertUnit'

const FavoritesItem = ({ favoriteItem }) => {
  const navigate = useNavigate()
  const { LocalizedName, Temperature, WeatherText } = favoriteItem
  const { temp, unit } = useConvertUnit(Temperature.Metric.Value)
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(setSelectedCity(favoriteItem))
    navigate('/')
  }
  return (
    <div className="favorite-item">
      <Card>
        <div onClick={handleClick}>
          <div>{LocalizedName}</div>
          <div>
            <span>{temp}</span>
            <span>{unit}</span>
          </div>
          <div>{WeatherText}</div>
        </div>
      </Card>
    </div>
  )
}

export default FavoritesItem
