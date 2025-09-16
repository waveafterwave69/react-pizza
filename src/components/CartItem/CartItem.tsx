import styles from './CartItem.module.css'

import minus from '../../assets/minus.svg'
import plus from '../../assets/plus.svg'
import deleteImg from '../../assets/delete.svg'
import { useAppDispatch } from '../../hooks/hooks'
import { addItem, minusItem, removeItem } from '../../store/cart/cartSlice'

interface CartItemProps {
    pizza: any
}

const CartItem: React.FC<CartItemProps> = ({ pizza }) => {
    const dispatch = useAppDispatch()

    const handleAdd = () => {
        dispatch(addItem(pizza))
    }

    const handleMinus = () => {
        dispatch(minusItem(pizza))
    }

    const handleDelete = () => {
        dispatch(removeItem(pizza))
    }

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
                            {pizza.testo} тесто, {pizza.sizes} см.
                        </p>
                    </div>
                </div>
                <div className={styles.item__buy}>
                    <div className={styles.item__buttons}>
                        <button
                            onClick={handleAdd}
                            className={`${styles.count__button} ${styles.plus__button}`}
                        >
                            <img
                                src={plus}
                                alt="добавить"
                                className={styles.count__img}
                            />
                        </button>
                        <span>{pizza.count}</span>
                        <button
                            className={`${styles.count__button} ${styles.minus__button}`}
                        >
                            <img
                                onClick={handleMinus}
                                src={minus}
                                alt="убрать"
                                className={styles.count__img}
                            />
                        </button>
                    </div>
                    <div className={styles.item__price}>
                        {pizza.itemPrice} ₽{' '}
                    </div>
                    <button
                        className={styles.delete__button}
                        onClick={handleDelete}
                    >
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
