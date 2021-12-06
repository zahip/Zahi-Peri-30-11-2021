import React, { useState } from 'react'
import Weather from 'features/weather/Weather'
import WeatherAutocomplete from 'components/WeatherAutocomplete/WeatherAutocomplete'
import { HomeContainer } from './style'
const Home = () => {
  const [isPending, setIsPending] = useState(false)
  return (
    <HomeContainer>
      <WeatherAutocomplete setIsPending={setIsPending} />
      <Weather setIsPending={setIsPending} isPending={isPending} />
    </HomeContainer>
  )
}

export default Home
