import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { setPage } from '../../store/pizzas/pizzasSlice'
import styles from './Pagination.module.css'

const Pagination: React.FC = () => {
    const dispatch = useAppDispatch()
    const page = useAppSelector((state) => state.pizzas.page)

    const totalPageCount = 3

    return (
        <>
            <div className={styles.pagination}>
                <p className={styles.pagination__text}>Страницы:</p>
                <div className={styles.pagination__buttons}>
                    <button
                        className={styles.pagination__btn}
                        onClick={() => page > 1 && dispatch(setPage(page - 1))}
                    >
                        Предыдущая
                    </button>
                    {[...new Array(totalPageCount)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => dispatch(setPage(index + 1))}
                            className={
                                index + 1 === page
                                    ? `${styles.pagination__count} ${styles.active}`
                                    : `${styles.pagination__count}`
                            }
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        className={styles.pagination__btn}
                        onClick={() =>
                            page < totalPageCount && dispatch(setPage(page + 1))
                        }
                    >
                        Следующая
                    </button>
                </div>
            </div>
        </>
    )
}

export default Pagination
