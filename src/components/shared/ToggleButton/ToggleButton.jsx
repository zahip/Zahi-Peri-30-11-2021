import React from 'react'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

const ToggleButton = ({ value, handleChange, children }) => {
  return (
    <ToggleButtonGroup
      value={value}
      exclusive
      onChange={handleChange}
      aria-label="select unit">
      {children}
    </ToggleButtonGroup>
  )
}

export default ToggleButton
