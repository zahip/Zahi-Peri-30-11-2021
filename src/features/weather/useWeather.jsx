import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { apiCall } from 'utils/api'
import { selectedCity, setSelectedCity } from 'features/weather/weatherSlice'
import { objIsEmpty } from 'utils/object'
import { setIsModalOpen } from 'features/modal/modalSlice'

const useWeather = (setIsPending) => {
  const selectedCityObj = useSelector(selectedCity)
  const [fiveDays, setFiveDays] = useState([])
  const [currentWeather, setCurrentWeather] = useState(null)

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchWeather5Days = async (locationKey) => {
      try {
        const data = await apiCall(
          `${process.env.REACT_APP_WEATHER_API}/forecasts/v1/daily/5day/${locationKey}?apikey=${process.env.REACT_APP_WEATHER_API_KEY}`,
        )
        return data
      } catch (err) {
        dispatch(setIsModalOpen({ isOpen: true, text: 'there is a problem' }))
      }
    }

    const fetchCurrentWeather = async (locationKey) => {
      const data = await apiCall(
        `${process.env.REACT_APP_WEATHER_API}/currentconditions/v1/${locationKey}?apikey=${process.env.REACT_APP_WEATHER_API_KEY}`,
      )
      return data
    }
    const fetchCityWeatherData = async (locationKey) => {
      let promises = [
        fetchWeather5Days(locationKey).then((data) => ({
          DailyForecasts: data.DailyForecasts,
        })),
        fetchCurrentWeather(locationKey).then((data) => ({ current: data[0] })),
      ]
      const results = await Promise.all(promises)
      setIsPending(false)
      results.forEach((result) => {
        if (result?.DailyForecasts) {
          setFiveDays(result?.DailyForecasts)
        } else if (result?.current) {
          setCurrentWeather(result?.current)
        }
      })
    }

    const fetchingByLatAndLon = async (location) => {
      try {
        const data = await apiCall(
          `${process.env.REACT_APP_WEATHER_API}/locations/v1/cities/geoposition/search?apikey=${process.env.REACT_APP_WEATHER_API_KEY}&q=${location.coords.latitude},${location.coords.longitude}`,
        )
        dispatch(setSelectedCity(data))
      } catch (err) {
        dispatch(setIsModalOpen({ isOpen: true, text: 'there is a problem' }))
      }
    }
    setIsPending(true)
    if (!objIsEmpty(selectedCityObj)) {
      fetchCityWeatherData(selectedCityObj?.Key)
    } else {
      navigator.geolocation.getCurrentPosition(fetchingByLatAndLon)
    }
  }, [dispatch, selectedCityObj, setIsPending])

  return { fiveDays, currentWeather, selectedCityObj }
}

export default useWeather
