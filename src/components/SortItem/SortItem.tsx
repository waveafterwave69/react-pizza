import styles from './SortItem.module.css'

interface SortItemProps {
    sort: string
    setSortType: (sort: string) => void
    setIsOpen: (arg: boolean) => void
}

const SortItem: React.FC<SortItemProps> = ({
    sort,
    setSortType,
    setIsOpen,
}) => {
    const handleType = () => {
        setSortType(sort)
        setIsOpen(false)
    }

    return (
        <>
            <li>
                <button className={styles.list__item} onClick={handleType}>
                    {sort}
                </button>
            </li>
        </>
    )
}

export default SortItem
