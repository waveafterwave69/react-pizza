import { useLayoutEffect } from 'react'
// import styles from './CartPage.module.css'
import CartContent from '../../components/CartContent/CartContent'

const CartPage: React.FC = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <CartContent />
        </>
    )
}

export default CartPage
