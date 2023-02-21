import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '../../store/cart/cart.action'
import { selectCartItems } from '../../store/cart/cart.selector'
import { CategoryItem } from '../../store/categories/categories.type'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import { ProductCartContainer } from './product-card.styles'
import { FC } from 'react'

interface ProductCardProps {
  product: CategoryItem
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const cartItems = useSelector(selectCartItems)
  const dispath = useDispatch()

  const { name, price, imageUrl } = product
  const addProductToCart = () => {
    return dispath(addItemToCart(cartItems, product))
  }
  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
        Add to cart
      </Button>
    </ProductCartContainer>
  )
}
export default ProductCard
