import { useState } from 'react'

import styles from './Sort.module.css'

import sortImg from '../../assets/sort.svg'
import sortCloseImg from '../../assets/sort-close.svg'

import SortItem from '../SortItem/SortItem'

interface SortProps {
    sorts: string[]
    text?: string
}

const Sort: React.FC<SortProps> = ({ sorts, text = 'Сортировка по' }) => {
    const [type, setType] = useState<string>(sorts[0])
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleOpen = () => {
        setIsOpen((prev) => !prev)
    }

    return (
        <>
            <div className={styles.sort}>
                {isOpen ? (
                    <img
                        onClick={toggleOpen}
                        src={sortCloseImg}
                        alt="сортировка"
                        className={styles.sort__img}
                    />
                ) : (
                    <img
                        onClick={toggleOpen}
                        src={sortImg}
                        alt="сортировка"
                        className={styles.sort__img}
                    />
                )}
                <div className={styles.sort__content}>
                    <span className={styles.sort__text}>{text}:</span>
                    <span className={styles.sort__type} onClick={toggleOpen}>
                        {type}
                    </span>
                    {isOpen && (
                        <ul className={styles.sort__list}>
                            {sorts.map((sort) => (
                                <SortItem
                                    type={type}
                                    key={sort}
                                    sort={sort}
                                    setSortType={setType}
                                    setIsOpen={setIsOpen}
                                />
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </>
    )
}

export default Sort
