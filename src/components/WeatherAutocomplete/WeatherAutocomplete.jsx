import React from 'react'
import { useSelector } from 'react-redux'
import Autocomplete from 'components/shared/Autocomplete/Autocomplete'
import useWeatherAutocomplete from './useWeatherAutocomplete'
import { AutocompleteContainer } from './style'
import Modal from 'components/shared/Modal/Modal'

const WeatherAutocomplete = ({ setIsPending }) => {
  const isOpen = useSelector((state) => state?.modal)
  const { cities, handleSelectCity, onInputChange, isSearching } =
    useWeatherAutocomplete(setIsPending)

  return (
    <AutocompleteContainer>
      <Autocomplete
        options={cities}
        id="city"
        handleChange={handleSelectCity}
        onInputChange={onInputChange}
        isSearching={isSearching}
      />
      {isOpen && <Modal />}
    </AutocompleteContainer>
  )
}

export default WeatherAutocomplete
