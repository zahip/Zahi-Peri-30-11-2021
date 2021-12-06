import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useDebounce } from 'hooks/useDebounce'
import { isEnglishStr } from 'utils/string'
import { apiCall } from 'utils/api'
import { setSelectedCity } from 'features/weather/weatherSlice'
import { setIsModalOpen } from 'features/modal/modalSlice'

const useWeatherAutocomplete = (setIsPending) => {
  const dispatch = useDispatch()
  const [cities, setCities] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const debouncedSearchTerm = useDebounce(searchTerm, 500)

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true)
      fetchCitiesList(debouncedSearchTerm)
    } else {
      setCities([])
      setIsSearching(false)
    }
  }, [debouncedSearchTerm])

  const fetchCitiesList = async (value) => {
    const data = await apiCall(
      `${process.env.REACT_APP_WEATHER_API}/locations/v1/cities/autocomplete?apikey=${process.env.REACT_APP_WEATHER_API_KEY}&q=${value}`,
    )
    setIsSearching(false)
    setCities(data)
  }

  const handleSelectCity = (e, selectedCity) => {
    if (selectedCity) {
      setIsPending(true)
      dispatch(setSelectedCity(selectedCity))
    }
  }

  const onInputChange = (e) => {
    const { value } = e.target
    if (value) {
      if (isEnglishStr(value)) {
        setSearchTerm(value)
      } else {
        setCities([])
        dispatch(
          setIsModalOpen({ isOpen: true, text: 'Please use english only' }),
        )
      }
    }
  }
  return { cities, handleSelectCity, onInputChange, isSearching }
}

export default useWeatherAutocomplete
