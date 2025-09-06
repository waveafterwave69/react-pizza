import styles from './Header.module.css'

import pizzaImgLogo from '../../assets/pizza-logo.svg'
import cartImg from '../../assets/cart.svg'
import { Link } from 'react-router'

const Header: React.FC = () => {
    return (
        <>
            <header className={styles.header}>
                <Link to="/">
                    <div className={styles.header__logo}>
                        <img src={pizzaImgLogo} alt="пицца" />
                        <div className={styles.logo__text}>
                            <h2 className={styles.text__title}>REACT PIZZA</h2>
                            <p className={styles.text__subtitle}>
                                самая вкусная пицца во вселенной
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to="/cart">
                    <button className={styles.header__cart}>
                        <p className={styles.cart__price}>520 ₽</p>
                        <div className={styles.count}>
                            <img src={cartImg} alt="корзина" />
                            <p className={styles.cart__count}>3</p>
                        </div>
                    </button>
                </Link>
            </header>
        </>
    )
}

export default Header
