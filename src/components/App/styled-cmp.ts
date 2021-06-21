import styled from 'styled-components'

export const AppWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
`

export const AppHeader = styled.header`
  font-size: 1em;
  padding: 20px 0;

  h1 {
    display: none;
  }
`

export const AppLogo = styled.img`
  color: rgb(65, 182, 230);
  height: 1.4rem;
  width: 9rem;
`
