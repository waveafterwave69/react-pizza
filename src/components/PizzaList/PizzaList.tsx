import { PizzaContext } from '../../context/PizzaProvider'
import Pagination from '../Pagination/Pagination'
import PizzaItem from '../PizzaItem/PizzaItem'
import PizzaItemSkeleton from '../PizzaItem/PizzaItemSkeleton'
import styles from './PizzaList.module.css'
import { useContext, useEffect } from 'react'

const PizzaList: React.FC = () => {
    const { pizzas, isLoading, page } = useContext(PizzaContext)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [page])

    return (
        <>
            <section className={styles.pizza}>
                <h2 className={styles.pizza__title}>Все пиццы</h2>
                <ul className={styles.list}>
                    {!isLoading &&
                        pizzas.map((pizza) => (
                            <PizzaItem pizza={pizza} key={pizza.id} />
                        ))}

                    {isLoading &&
                        [...new Array(8)].map((_, index) => (
                            <PizzaItemSkeleton key={index} />
                        ))}
                </ul>
                <Pagination />
            </section>
        </>
    )
}

export default PizzaList
