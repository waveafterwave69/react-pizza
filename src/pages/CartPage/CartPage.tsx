import { useEffect } from 'react'
// import styles from './CartPage.module.css'
import CartContent from '../../components/CartContent/CartContent'

const CartPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <CartContent />
        </>
    )
}

export default CartPage
