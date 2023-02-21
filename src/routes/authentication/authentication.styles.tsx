import styled from 'styled-components'

export const AuthenticationContainer = styled.div`
  display: flex;
  gap: 20px;
  max-width: 900px;
  justify-content: space-between;
  margin: 30px auto;
  @media screen and (max-width: 768px) {
    flex-flow: column;
    gap: 80px;
    align-items: center;
  }
`
