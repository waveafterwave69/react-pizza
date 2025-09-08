import { useContext } from 'react'
import styles from './SortItem.module.css'
import { PizzaContext } from '../../context/PizzaProvider'

interface SortItemProps {
    sort: string
    type: string
    setSortType: (sort: string) => void
    setIsOpen: (arg: boolean) => void
    nameEn: string
}

const SortItem: React.FC<SortItemProps> = ({
    sort,
    setSortType,
    setIsOpen,
    type,
    nameEn,
}) => {
    const { setSort } = useContext(PizzaContext)

    const handleType = () => {
        setSort(nameEn)
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
