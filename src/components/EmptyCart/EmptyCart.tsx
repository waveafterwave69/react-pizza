import styles from './EmptyCart.module.css'

import cartImg from '../../assets/cart-img.png'
import { Link } from 'react-router'

const EmptyCart: React.FC = () => {
    return (
        <>
            <h2 className={styles.cart__title}>Корзина пустая 😕</h2>
            <p className={styles.cart__text}>
                Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы
                заказать пиццу, перейди на главную страницу.
            </p>
            <img src={cartImg} alt="корзина" className={styles.cart__img} />
            <Link to="/">
                <button className={styles.cart__button}>Вернуться назад</button>
            </Link>
        </>
    )
}

export default EmptyCart
