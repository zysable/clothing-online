import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
    h2 {
      text-align: center;
    }
  }
`
export const Title = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
  }
`
