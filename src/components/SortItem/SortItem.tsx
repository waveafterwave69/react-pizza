import styles from './SortItem.module.css'

interface SortItemProps {
    sort: string
    type: string
    setSortType: (sort: string) => void
    setIsOpen: (arg: boolean) => void
}

const SortItem: React.FC<SortItemProps> = ({
    sort,
    setSortType,
    setIsOpen,
    type,
}) => {
    const handleType = () => {
        setSortType(sort)
        setIsOpen(false)
    }

    return (
        <>
            <li>
                <button
                    className={styles.list__item}
                    onClick={handleType}
                    style={{ color: type === sort ? '#FE5F1E' : '#000' }}
                >
                    {sort}
                </button>
            </li>
        </>
    )
}

export default SortItem
