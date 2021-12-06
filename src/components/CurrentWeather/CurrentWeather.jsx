import React, { memo } from 'react'
import useConvertUnit from 'hooks/useConvertUnit'

const CurrentWeather = ({ currentWeather, cityName }) => {
  const { temp, unit } = useConvertUnit(
    currentWeather?.Temperature?.Imperial?.Value,
  )
  return (
    <div className="current-weather">
      <div className="current-weather__cityname">{cityName}</div>
      <span>{unit === 'F' ? temp : temp.toFixed(1)}</span>
      <span>{unit}</span>
    </div>
  )
}

export default memo(CurrentWeather)
