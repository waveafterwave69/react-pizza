import styles from './CategoryItem.module.css'

interface CategoryItemProps {
    category: string
    setCurrCategory: (category: string) => void
    currCategory: string
}

const CategoryItem: React.FC<CategoryItemProps> = ({
    category,
    setCurrCategory,
    currCategory,
}) => {
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
                    onClick={() => setCurrCategory(category)}
                >
                    {category}
                </button>
            </li>
        </>
    )
}

export default CategoryItem
