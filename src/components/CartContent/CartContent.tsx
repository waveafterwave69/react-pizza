import styles from './CartContent.module.css'

import path from '../../assets/path.svg'
import cart from '../../assets/carttt.svg'
import trash from '../../assets/trash.svg'
import EmptyCart from '../EmptyCart/EmptyCart'
import CartItem from '../CartItem/CartItem'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { Link } from 'react-router'
import { clearItems } from '../../store/cart/cartSlice'

const CartContent: React.FC = () => {
    const pizzasCart = useAppSelector((state) => state.cart.items)
    const totalCount = useAppSelector((state) => state.cart.totalCount)
    const totalPrice = useAppSelector((state) => state.cart.totalPrice)

    const dispatch = useAppDispatch()

    return (
        <>
            <section className={styles.cart}>
                {pizzasCart.length < 1 ? (
                    <EmptyCart />
                ) : (
                    <>
                        <div className={styles.cart__row}>
                            <h2 className={styles.cart__title}>
                                <img src={cart} alt="корзина" />
                                <span>Корзина</span>
                            </h2>
                            <button
                                className={styles.cart__delete}
                                onClick={() => dispatch(clearItems())}
                            >
                                <img src={trash} alt="очистить" />
                                <span>Очистить корзину</span>
                            </button>
                        </div>
                        <ul className={styles.cart__list}>
                            {pizzasCart.map((pizza) => (
                                <CartItem pizza={pizza} key={pizza.id} />
                            ))}
                        </ul>
                        <div className={styles.cart__info}>
                            <span className={styles.cart__total}>
                                Всего пицц: <span>{totalCount} шт.</span>
                            </span>
                            <span className={styles.cart__price}>
                                Сумма заказа: <span>{totalPrice} ₽</span>
                            </span>
                        </div>
                        <div className={styles.cart__buttons}>
                            <Link
                                to="/"
                                className={`${styles.cart__button} ${styles.cart__first}`}
                            >
                                <img src={path} alt="path" />

                                <span>Вернуться назад</span>
                            </Link>
                            <button
                                className={`${styles.cart__button} ${styles.cart__second}`}
                            >
                                Оплатить сейчас
                            </button>
                        </div>
                    </>
                )}
            </section>
        </>
    )
}

export default CartContent
