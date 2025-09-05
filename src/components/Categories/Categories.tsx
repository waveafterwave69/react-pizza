import { useState } from 'react'
import { categories } from '../../data/data'
import CategoryItem from '../CategoryItem/CategoryItem'
import styles from './Categories.module.css'
import Sort from '../Sort/Sort'

const Categories: React.FC = () => {
    const [currCategory, setCurrCategory] = useState<string>('Все')
    return (
        <>
            <div className={styles.categories}>
                <div className={styles.categories__burger}>
                    <Sort sorts={categories} text="Пиццы" />
                </div>
                <ul className={styles.categories__list}>
                    {categories.map((category) => (
                        <CategoryItem
                            key={category}
                            category={category}
                            setCurrCategory={setCurrCategory}
                            currCategory={currCategory}
                        />
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Categories
