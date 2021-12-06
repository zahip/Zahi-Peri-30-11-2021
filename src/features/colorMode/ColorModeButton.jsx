import React from 'react'
import { useDispatch } from 'react-redux'
import IconButton from '@mui/material/IconButton'
import { useTheme } from '@mui/material/styles'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { setMode } from './colorModeSlice'

const ColorModeButton = () => {
  const dispatch = useDispatch()
  const theme = useTheme()

  const handleClick = () => {
    dispatch(setMode(theme.palette.mode === 'light' ? 'dark' : 'light'))
  }

  return (
    <div>
      <IconButton sx={{ ml: 1 }} onClick={handleClick} color="inherit">
        {theme.palette.mode === 'dark' ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </div>
  )
}

export default ColorModeButton
