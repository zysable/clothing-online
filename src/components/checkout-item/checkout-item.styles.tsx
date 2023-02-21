import styled from 'styled-components'
export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 20%);
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  justify-items: center;
  .quantity {
    display: flex;

    .arrow {
      cursor: pointer;
    }

    .value {
      margin: 0 10px;
    }
  }
  @media screen and (max-width: 768px) {
    .name,
    .quantity,
    .price {
      font-size: 16px;
    }
  }
`
export const ImageContainer = styled.div`
  justify-self: start;
  padding-right: 5px;
  img {
    vertical-align: middle;
    width: 100%;
    height: 100%;
  }
`
export const RemoveButton = styled.div`
  justify-self: end;
  padding-right: 10px;
  cursor: pointer;
`
