import { useContext } from 'react'
import styles from './CategoryItem.module.css'
import { PizzaContext } from '../../context/PizzaProvider'

interface CategoryItemProps {
    category: string
    setCurrCategory: (category: string) => void
    currCategory: string
    indexItem: number
}

const CategoryItem: React.FC<CategoryItemProps> = ({
    category,
    setCurrCategory,
    currCategory,
    indexItem,
}) => {
    const { setCategory } = useContext(PizzaContext)

    const isActive = category === currCategory

    return (
        <>
            <li>
                <button
                    className={styles.category__item}
                    style={{
                        backgroundColor: isActive ? '#282828' : '#f0f0f0',
                        color: isActive ? '#f0f0f0' : '#282828',
                    }}
                    onClick={() => {
                        setCategory(indexItem)
                        setCurrCategory(category)
                    }}
                >
                    {category}
                </button>
            </li>
        </>
    )
}

export default CategoryItem
