import { useEffect } from 'react'
import Categories from '../../components/Categories/Categories'
import PizzaList from '../../components/PizzaList/PizzaList'
import Sort from '../../components/Sort/Sort'

import styles from './HomePage.module.css'
import PizzaProvider from '../../context/PizzaProvider'

const HomePage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <PizzaProvider>
                <section className={styles.subheader}>
                    <Categories />
                    <Sort />
                </section>
                <PizzaList />
            </PizzaProvider>
        </>
    )
}

export default HomePage
