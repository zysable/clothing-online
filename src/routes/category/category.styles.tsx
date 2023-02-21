import styled from 'styled-components'

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 50px 20px;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px 10px;
  }
`
export const CategoryTitle = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`
