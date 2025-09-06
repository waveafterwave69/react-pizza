import PizzaItem from '../PizzaItem/PizzaItem'
import PizzaItemSkeleton from '../PizzaItem/PizzaItemSkeleton'
import styles from './PizzaList.module.css'
import { useEffect, useState } from 'react'

const PizzaList: React.FC = () => {
    const [pizzas, setPizzas] = useState<any[]>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isError, setIsError] = useState<string>('')

    useEffect(() => {
        const getPizzas = async () => {
            setIsLoading(true)

            const response = await fetch(
                'https://68bbd6870f2491613edd6539.mockapi.io/pizzas'
            )

            if (!response.ok) {
                setIsError('Ошибка при получении данных :(')
                setIsLoading(false)
                return
            }

            const data = await response.json()

            setPizzas(data)
            setIsLoading(false)
        }

        getPizzas()
    }, [])

    return (
        <>
            <section className={styles.pizza}>
                <h2 className={styles.pizza__title}>Все пиццы</h2>
                {isError && isError}

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
