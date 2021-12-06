import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MuiToggleButton from '@mui/material/ToggleButton'
import ToggleButton from 'components/shared/ToggleButton/ToggleButton'
import { setUnit, selectedUnit } from 'features/weather/weatherSlice'

const UnitToggleButton = () => {
  const unit = useSelector(selectedUnit)
  const dispatch = useDispatch()
  const handleChange = (event, newValue) => {
    dispatch(setUnit(newValue))
  }
  return (
    <ToggleButton value={unit} handleChange={handleChange}>
      <MuiToggleButton value="C">C</MuiToggleButton>
      <MuiToggleButton value="F">F</MuiToggleButton>
    </ToggleButton>
  )
}

export default UnitToggleButton
