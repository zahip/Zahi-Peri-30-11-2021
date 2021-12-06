import React from 'react'
import useWeather from './useWeather'
import CurrentWeather from 'components/CurrentWeather/CurrentWeather'
import Spinner from 'components/shared/Spinner/Spinner'

import FiveDaysItem from 'components/FiveDaysItem/FiveDaysItem'
import FavoriteButton from 'features/favorite/FavoriteButton'
import { WeatherContainer, WeatherMain } from './style'

const Weather = ({ setIsPending, isPending }) => {
  const { selectedCityObj, currentWeather, fiveDays } = useWeather(setIsPending)

  return (
    <>
      {isPending ? (
        <div className="spinner-container">
          <Spinner />
        </div>
      ) : (
        <WeatherContainer>
          <div className="weather-top">
            {currentWeather && (
              <CurrentWeather
                cityName={selectedCityObj?.LocalizedName}
                currentWeather={currentWeather}
              />
            )}
            <FavoriteButton
              selectedCity={selectedCityObj}
              currentWeather={currentWeather}
            />
          </div>

          <WeatherMain>
            <h1>{currentWeather?.WeatherText}</h1>
            <div className="weather-five-list">
              {fiveDays.map((item) => {
                return <FiveDaysItem key={item.Date} item={item} />
              })}
            </div>
          </WeatherMain>
        </WeatherContainer>
      )}
    </>
  )
}

export default Weather
