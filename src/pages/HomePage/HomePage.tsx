import Categories from '../../components/Categories/Categories'
import PizzaList from '../../components/PizzaList/PizzaList'
import Sort from '../../components/Sort/Sort'

import { sorts } from '../../data/data'

import styles from './HomePage.module.css'

const HomePage: React.FC = () => {
    return (
        <>
            <section className={styles.subheader}>
                <Categories />
                <Sort sorts={sorts} />
            </section>
            <PizzaList />
        </>
    )
}

export default HomePage
