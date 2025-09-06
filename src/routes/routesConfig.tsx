import CartPage from '../pages/CartPage/CartPage'
import HomePage from '../pages/HomePage/HomePage'

export const routesConfig = [
    {
        page: <HomePage />,
        url: '/',
    },
    {
        page: <CartPage />,
        url: '/cart',
    },
]
