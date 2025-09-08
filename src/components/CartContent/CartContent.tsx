import styles from './CartContent.module.css'

import path from '../../assets/path.svg'
import cart from '../../assets/carttt.svg'
import trash from '../../assets/trash.svg'
import EmptyCart from '../EmptyCart/EmptyCart'
import CartItem from '../CartItem/CartItem'

let da = false

const CartContent: React.FC = () => {
    return (
        <>
            <section className={styles.cart}>
                {da ? (
                    <EmptyCart />
                ) : (
                    <>
                        <div className={styles.cart__row}>
                            <h2 className={styles.cart__title}>
                                <img src={cart} alt="корзина" />
                                <span>Корзина</span>
                            </h2>
                            <button className={styles.cart__delete}>
                                <img src={trash} alt="очистить" />
                                <span>Очистить корзину</span>
                            </button>
                        </div>
                        <ul className={styles.cart__list}>
                            <CartItem
                                pizza={{
                                    id: 0,
                                    imageUrl:
                                        'https://media.dodostatic.net/image/r:584x584/0198bf57bc517218ab93c762f4b0193e.avif',
                                    title: 'Супер-пиццы',
                                    types: [0, 1],
                                    sizes: [26, 30, 40],
                                    price: 803,
                                    category: 0,
                                    rating: 4,
                                    testo: ['тонкое', 'традиционное'],
                                }}
                            />
                            <CartItem
                                pizza={{
                                    id: 0,
                                    imageUrl:
                                        'https://media.dodostatic.net/image/r:584x584/0198bf57bc517218ab93c762f4b0193e.avif',
                                    title: 'Супер-пиццы',
                                    types: [0, 1],
                                    sizes: [26, 30, 40],
                                    price: 803,
                                    category: 0,
                                    rating: 4,
                                    testo: ['тонкое', 'традиционное'],
                                }}
                            />
                            <CartItem
                                pizza={{
                                    id: 0,
                                    imageUrl:
                                        'https://media.dodostatic.net/image/r:584x584/0198bf57bc517218ab93c762f4b0193e.avif',
                                    title: 'Супер-пиццы',
                                    types: [0, 1],
                                    sizes: [26, 30, 40],
                                    price: 803,
                                    category: 0,
                                    rating: 4,
                                    testo: ['тонкое', 'традиционное'],
                                }}
                            />
                            <CartItem
                                pizza={{
                                    id: 0,
                                    imageUrl:
                                        'https://media.dodostatic.net/image/r:584x584/0198bf57bc517218ab93c762f4b0193e.avif',
                                    title: 'Супер-пиццы',
                                    types: [0, 1],
                                    sizes: [26, 30, 40],
                                    price: 803,
                                    category: 0,
                                    rating: 4,
                                    testo: ['тонкое', 'традиционное'],
                                }}
                            />
                        </ul>
                        <div className={styles.cart__info}>
                            <span className={styles.cart__total}>
                                Всего пицц: <span>3 шт.</span>
                            </span>
                            <span className={styles.cart__price}>
                                Сумма заказа: <span>900 ₽</span>
                            </span>
                        </div>
                        <div className={styles.cart__buttons}>
                            <button
                                className={`${styles.cart__button} ${styles.cart__first}`}
                            >
                                <img src={path} alt="path" />
                                <span>Вернуться назад</span>
                            </button>
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
