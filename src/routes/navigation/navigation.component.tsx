import { Fragment, Suspense, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import CartIcon from '../../components/cart-icon/cart-icon.components'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.components'
import { NavigationContainer, NavLink, NavLinks, LogoContainer } from './navigation.styles'
import { checkUserSession, signOutStart } from '../../store/user/user.action'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentUser } from '../../store/user/user.selector'
import { selectIsCartOpen } from '../../store/cart/cart.selector'
import Spinner from '../../components/spinner/spinner.component'

const Navigation = () => {
  const isCartOpen = useSelector(selectIsCartOpen)
  const currentUser = useSelector(selectCurrentUser)

  const dispatch = useDispatch()

  const handleSignOut = () => dispatch(signOutStart())

  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch])

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={handleSignOut}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </Fragment>
  )
}
export default Navigation
