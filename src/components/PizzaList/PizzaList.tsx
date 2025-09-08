import { PizzaContext } from '../../context/PizzaProvider'
import PizzaItem from '../PizzaItem/PizzaItem'
import PizzaItemSkeleton from '../PizzaItem/PizzaItemSkeleton'
import styles from './PizzaList.module.css'
import { useContext } from 'react'

const PizzaList: React.FC = () => {
    const { pizzas, isLoading } = useContext(PizzaContext)

    return (
        <>
            <section className={styles.pizza}>
                <h2 className={styles.pizza__title}>Все пиццы</h2>
                <ul className={styles.list}>
                    {isLoading
                        ? [...new Array(8)].map((_, index) => (
                              <PizzaItemSkeleton key={index} />
                          ))
                        : pizzas &&
                          pizzas.map((pizza) => (
                              <PizzaItem pizza={pizza} key={pizza.id} />
                          ))}
                </ul>
            </section>
        </>
    )
}

export default PizzaList
