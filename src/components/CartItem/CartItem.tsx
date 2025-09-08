import styles from './CartItem.module.css'

import minus from '../../assets/minus.svg'
import plus from '../../assets/plus.svg'
import deleteImg from '../../assets/delete.svg'

interface CartItemProps {
    pizza: any
}

const CartItem: React.FC<CartItemProps> = ({ pizza }) => {
    return (
        <>
            <li className={styles.item}>
                <div className={styles.item__info}>
                    <img
                        src={pizza.imageUrl}
                        alt={pizza.title}
                        className={styles.item__img}
                    />
                    <div className={styles.item__text}>
                        <h3 className={styles.item__title}>{pizza.title}</h3>
                        <p className={styles.item__type}>
                            тонкое тесто, 26 см.
                        </p>
                    </div>
                </div>
                <div className={styles.item__buy}>
                    <div className={styles.item__buttons}>
                        <button
                            className={`${styles.count__button} ${styles.plus__button}`}
                        >
                            <img
                                src={plus}
                                alt="добавить"
                                className={styles.count__img}
                            />
                        </button>
                        <span>2</span>
                        <button
                            className={`${styles.count__button} ${styles.minus__button}`}
                        >
                            <img
                                src={minus}
                                alt="убрать"
                                className={styles.count__img}
                            />
                        </button>
                    </div>
                    <div className={styles.item__price}>770 ₽ </div>
                    <button className={styles.delete__button}>
                        <img
                            src={deleteImg}
                            alt="убрать"
                            className={styles.delete__img}
                        />
                    </button>
                </div>
            </li>
        </>
    )
}

export default CartItem
