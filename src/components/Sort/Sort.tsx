import { useEffect, useRef, useState } from 'react'

import { sorts } from '../../data/data'

import styles from './Sort.module.css'

import sortImg from '../../assets/sort.svg'
import sortCloseImg from '../../assets/sort-close.svg'

import SortItem from '../SortItem/SortItem'

interface SortProps {
    text: string
}

const Sort: React.FC<SortProps> = ({ text = 'Сортировка по' }) => {
    const [type, setType] = useState<string>(sorts[0].nameRu)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const sortRef = useRef<HTMLDivElement>(null)

    const toggleOpen = () => {
        setIsOpen((prev) => !prev)
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                sortRef.current &&
                !sortRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <div className={styles.sort} ref={sortRef}>
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
                                key={sort.nameRu}
                                sort={sort.nameRu}
                                nameEn={sort.nameEn}
                                setSortType={setType}
                                setIsOpen={setIsOpen}
                            />
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Sort
