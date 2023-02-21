import { CategoryItem } from '../categories/categories.type'
import { CART_ACTION_TYPES, CartItem } from './cart.type'
import {
  createAction,
  withMactcher,
  Action,
  ActionWithPayload
} from '../../utils/reducer/reducer.utils'

const addCartItem = (cartItems: CartItem[], productToAdd: CategoryItem): CartItem[] => {
  const product = cartItems.find((item) => item.id === productToAdd.id)
  if (product) {
    return cartItems.map((item) =>
      item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    )
  } else {
    return [...cartItems, { ...productToAdd, quantity: 1 }]
  }
}
const removeCartItem = (cartItems: CartItem[], cartItemToRemove: CartItem): CartItem[] => {
  const item = cartItems.find((item) => item.id === cartItemToRemove.id)
  if (item && item.quantity === 1) {
    return cartItems.filter((item) => item.id !== cartItemToRemove.id)
  } else {
    return cartItems.map((item) =>
      item.id === cartItemToRemove.id ? { ...item, quantity: item.quantity - 1 } : item
    )
  }
}
const clearCartItem = (cartItems: CartItem[], cartItemToClear: CartItem): CartItem[] => {
  return cartItems.filter((item) => item.id !== cartItemToClear.id)
}

export type SetIsCartOpen = Action<CART_ACTION_TYPES.SET_IS_CART_OPEN>
export type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>

export const setIsCartOpen = withMactcher(
  (): SetIsCartOpen => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN)
)

export const setCartItems = withMactcher(
  (cartItems: CartItem[]): SetCartItems => createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
)

export const addItemToCart = (cartItems: CartItem[], productToAdd: CategoryItem): SetCartItems => {
  const newCartItems = addCartItem(cartItems, productToAdd)
  return setCartItems(newCartItems)
}
export const removeItemFromCart = (
  cartItems: CartItem[],
  cartItemToRemove: CartItem
): SetCartItems => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove)
  return setCartItems(newCartItems)
}
export const clearItemFromCart = (
  cartItems: CartItem[],
  cartItemToRemove: CartItem
): SetCartItems => {
  const newCartItems = clearCartItem(cartItems, cartItemToRemove)
  return setCartItems(newCartItems)
}
