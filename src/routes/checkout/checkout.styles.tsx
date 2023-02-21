import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: grid;
  grid-template-columns: repeat(5, 20%);
  justify-items: center;
  border-bottom: 1px solid darkgrey;
`

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  &:first-child {
    justify-self: start;
  }
  &:last-child {
    justify-self: end;
  }
`

export const Total = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`
