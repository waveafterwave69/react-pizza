import Pagination from '../Pagination/Pagination'
import PizzaItem from '../PizzaItem/PizzaItem'
import PizzaItemSkeleton from '../PizzaItem/PizzaItemSkeleton'
import styles from './PizzaList.module.css'
import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../hooks/hooks'
import { fetchPizzas } from '../../store/pizzas/pizzasSlice'

const PizzaList: React.FC = () => {
    const pizzas = useAppSelector((state) => state.pizzas.pizzas)
    const isError = useAppSelector((state) => state.pizzas.isError)
    const isLoading = useAppSelector((state) => state.pizzas.isLoading)
    const page = useAppSelector((state) => state.pizzas.page)
    const category = useAppSelector((state) => state.pizzas.category)
    const searchValue = useAppSelector((state) => state.pizzas.searchValue)
    const sort = useAppSelector((state) => state.pizzas.sort)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchPizzas({ category, searchValue, page, sort }))
    }, [page, category, searchValue, sort, dispatch])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [page])

    return (
        <>
            <section className={styles.pizza}>
                <h2 className={styles.pizza__title}>Все пиццы</h2>
                <ul className={styles.list}>
                    {!isLoading && !isError
                        ? pizzas.map((pizza: any) => (
                              <PizzaItem pizza={pizza} key={pizza.id} />
                          ))
                        : !isLoading && <p>Таки пицц нет.</p>}

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
