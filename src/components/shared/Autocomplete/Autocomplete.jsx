import React from 'react'
import { useSelector } from 'react-redux'
import TextField from '@mui/material/TextField'
import MuiAutocomplete from '@mui/material/Autocomplete'
import { colorMode } from 'features/colorMode/colorModeSlice'

const Autocomplete = ({
  options,
  handleChange,
  onInputChange,
  isSearching,
}) => {
  const mode = useSelector(colorMode)
  const loading = options.length === 0 && isSearching
  return (
    <MuiAutocomplete
      id="city"
      sx={{ width: 300, background: mode === 'light' ? 'white' : 'black' }}
      getOptionLabel={(option) => {
        return option?.LocalizedName
      }}
      filterOptions={(x) => x}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      options={options}
      autoComplete
      clearOnEscape
      includeInputInList
      noOptionsText="No Options"
      loading={loading}
      filterSelectedOptions
      onChange={handleChange}
      onInputChange={onInputChange}
      renderInput={(params) => (
        <TextField {...params} label="Add a location" fullWidth />
      )}
      renderOption={(props, option) => (
        <li {...props} key={option?.Key}>
          {option?.LocalizedName}
        </li>
      )}
    />
  )
}

export default Autocomplete
