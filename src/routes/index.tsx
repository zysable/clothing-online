import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'
import Navigation from './navigation/navigation.component'

const Home = lazy(() => import('./home/home.component'))
const Shop = lazy(() => import('./shop/shop.component'))
const CategoriesPreView = lazy(() => import('./categories-preview/categories-preview.component'))
const Category = lazy(() => import('./category/category.component'))
const Authentication = lazy(() => import('./authentication/authentication.component'))
const Checkout = lazy(() => import('./checkout/checkout.components'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigation />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'shop',
        element: <Shop />,
        children: [
          {
            index: true,
            element: <CategoriesPreView />
          },
          {
            path: ':category',
            element: <Category />
          }
        ]
      },
      {
        path: 'auth',
        element: <Authentication />
      },
      {
        path: 'checkout',
        element: <Checkout />
      }
    ]
  }
])
