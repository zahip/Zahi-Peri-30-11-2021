import React from 'react'

import MuiCheckbox from '@mui/material/Checkbox'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import Favorite from '@mui/icons-material/Favorite'
import FormControlLabel from '@mui/material/FormControlLabel'

const Checkbox = ({ handleChange, checked, label }) => {
  return (
    <FormControlLabel
      control={
        <MuiCheckbox
          checked={checked}
          onChange={handleChange}
          name="favorite"
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
        />
      }
      label={label}
    />
  )
}

export default Checkbox
