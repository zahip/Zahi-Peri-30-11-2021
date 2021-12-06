import styled from 'styled-components'

export const WeatherContainer = styled.div`
  margin-top: 3rem;
  border: 1px solid gray;
  padding: 3rem;
  & .weather-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const WeatherMain = styled.div`
  h1 {
    text-align: center;
  }

  .weather-five-list {
    display: flex;
    gap: 1rem;
    justify-content: space-around;
    @media screen and (max-width: 600px) {
      flex-direction: column;
      gap: 5rem;
    }
  }
`
