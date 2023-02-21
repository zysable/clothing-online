import { useDispatch, useSelector } from 'react-redux'
import { setIsCartOpen } from '../../store/cart/cart.action'
import { selectCartCount } from '../../store/cart/cart.selector'
import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles'

const CartIcon = () => {
  const cartCount = useSelector(selectCartCount)
  const dispatch = useDispatch()

  const toggleIsCartOpen = () => dispatch(setIsCartOpen())
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount className="item-count">{cartCount}</ItemCount>
    </CartIconContainer>
  )
}
export default CartIcon
