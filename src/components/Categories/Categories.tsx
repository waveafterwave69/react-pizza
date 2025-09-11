import { useState } from 'react'
import { categories } from '../../data/data'
import CategoryItem from '../CategoryItem/CategoryItem'
import styles from './Categories.module.css'

const Categories: React.FC = () => {
    const [currCategory, setCurrCategory] = useState<string>('Все')

    return (
        <>
            <div className={styles.categories}>
                <ul className={styles.categories__list}>
                    {categories.map((category, index) => (
                        <CategoryItem
                            indexItem={index}
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
