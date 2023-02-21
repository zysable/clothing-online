import styled from 'styled-components'

import Button from '../button/button.component'

export const PaymentFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  width: 100%;
`
export const FormContainer = styled.form`
  height: 100px;
  width: 100%;
  @media screen and (max-width: 768px) {
  }
`

export const PaymentButton = styled(Button)`
  margin: 0 auto;
  margin-top: 30px;
`
