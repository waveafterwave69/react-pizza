import React, { useCallback, useContext, useRef, useEffect } from 'react'
import styles from './Search.module.css'
import { PizzaContext } from '../../context/PizzaProvider'

const Search: React.FC = () => {
    const { setSearchValue } = useContext(PizzaContext)

    const timerId = useRef<any | null>(null)

    const debouncedSetSearchValue = useCallback(
        (value: string) => {
            if (timerId.current) {
                clearTimeout(timerId.current)
            }
            timerId.current = setTimeout(() => {
                setSearchValue(value)
            }, 350)
        },
        [setSearchValue]
    )

    useEffect(() => {
        return () => {
            if (timerId.current) {
                clearTimeout(timerId.current)
            }
        }
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        debouncedSetSearchValue(e.target.value)
    }

    return (
        <div className={styles.search}>
            <input
                onChange={handleChange}
                type="text"
                placeholder="Название пиццы..."
                className={styles.search__input}
            />
        </div>
    )
}

export default Search
