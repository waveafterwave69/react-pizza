import React, { useCallback, useRef, useEffect } from 'react'
import styles from './Search.module.css'
import { useAppDispatch } from '../../hooks/hooks'
import { setSearchValue } from '../../store/pizzas/pizzasSlice'

const Search: React.FC = () => {
    const dispatch = useAppDispatch()

    const timerId = useRef<any | null>(null)

    const debouncedSetSearchValue = useCallback((value: string) => {
        if (timerId.current) {
            clearTimeout(timerId.current)
        }
        timerId.current = setTimeout(() => {
            dispatch(setSearchValue(value))
        }, 350)
    }, [])

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
