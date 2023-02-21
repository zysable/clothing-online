import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setIsCartOpen } from '../../store/cart/cart.action'
import { selectCartItems } from '../../store/cart/cart.selector'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles'

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const goToCheckoutHandler = useCallback(() => {
    navigate('/checkout')
    dispatch(setIsCartOpen())
  }, [navigate, dispatch])

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem cartItem={item} key={item.id} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  )
}
export default CartDropdown
