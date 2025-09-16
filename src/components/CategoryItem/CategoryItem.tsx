import styles from './CategoryItem.module.css'
import { useAppDispatch } from '../../hooks/hooks'
import { setCategory } from '../../store/pizzas/pizzasSlice'

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
    const dispatch = useAppDispatch()

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
                        dispatch(setCategory(indexItem))
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
