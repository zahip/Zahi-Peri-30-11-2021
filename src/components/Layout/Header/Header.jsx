import React from 'react'
import ColorModeButton from 'features/colorMode/ColorModeButton'
import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './style'
import UnitToggleButton from 'components/UnitToggleButton/UnitToggleButton'

const Header = () => {
  return (
    <HeaderContainer>
      <h1>WeatherApp</h1>
      <ColorModeButton />
      <UnitToggleButton />
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/favorits">Favorite</NavLink>
      </nav>
    </HeaderContainer>
  )
}

export default Header
