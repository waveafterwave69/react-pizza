import { useLayoutEffect } from 'react'
import Categories from '../../components/Categories/Categories'
import PizzaList from '../../components/PizzaList/PizzaList'
import Sort from '../../components/Sort/Sort'

import styles from './HomePage.module.css'

const HomePage: React.FC = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <section className={styles.subheader}>
                <Categories />
                <Sort />
            </section>
            <PizzaList />
        </>
    )
}

export default HomePage
