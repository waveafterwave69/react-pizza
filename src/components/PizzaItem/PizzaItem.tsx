import { useState } from 'react'
import styles from './PizzaItem.module.css'

interface PizzaItemProps {
    pizza: any
}

const PizzaItem: React.FC<PizzaItemProps> = ({ pizza }) => {
    const [currSize, setCurrSize] = useState<number>(0)
    const [currTesto, setCurrTesto] = useState<string>('')

    return (
        <>
            <li className={styles.pizza}>
                <img
                    src={pizza.img}
                    alt={pizza.name}
                    className={styles.pizza__img}
                />
                <h3 className={styles.pizza__name}>{pizza.name}</h3>
                <div className={styles.pizza__buttons}>
                    <div className={styles.testo__buttons}>
                        {pizza.testo.map((test: string) => (
                            <button
                                onClick={() => {
                                    currTesto === test
                                        ? setCurrTesto('')
                                        : setCurrTesto(test)
                                }}
                                className={styles.button}
                                style={{
                                    backgroundColor:
                                        currTesto === test ? '#fff' : '#f1f1f1',
                                    opacity: currTesto === test ? '1' : '0.4',
                                }}
                            >
                                {test}
                            </button>
                        ))}
                    </div>
                    <div className={styles.testo__buttons}>
                        {pizza.sizes.map((size: number) => (
                            <button
                                onClick={() => {
                                    currSize === size
                                        ? setCurrSize(0)
                                        : setCurrSize(size)
                                }}
                                className={styles.button}
                                style={{
                                    backgroundColor:
                                        currSize === size ? '#fff' : '#f1f1f1',
                                    opacity: currSize === size ? '1' : '0.4',
                                }}
                            >
                                {size} см.
                            </button>
                        ))}
                    </div>
                </div>
                <div className={styles.pizza__order}>
                    <p className={styles.pizza__price}>от {pizza.price} ₽</p>
                    <button className={styles.pizza__button}>
                        + Добавить 2
                    </button>
                </div>
            </li>
        </>
    )
}

export default PizzaItem
