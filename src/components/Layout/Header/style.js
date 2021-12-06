import styled from 'styled-components'

export const HeaderContainer = styled.div`
  height: 5rem;
  background-color: #328fa8;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 3rem;
    padding-left: 3rem;
    @media screen and (max-width: 600px) {
      font-size: 2rem;
      padding-left: 1rem;
    }
  }

  & nav {
    padding-right: 3rem;
    display: flex;
    gap: 1rem;

    @media screen and (max-width: 600px) {
      padding-right: 1rem;
    }
  }
`
