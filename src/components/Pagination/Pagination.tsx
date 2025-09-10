import { useContext } from 'react'
import styles from './Pagination.module.css'
import { PizzaContext } from '../../context/PizzaProvider'

const Pagination: React.FC = () => {
    const { page, setPage } = useContext(PizzaContext)

    const totalPageCount = 3

    return (
        <>
            <div className={styles.pagination}>
                <p className={styles.pagination__text}>Страницы:</p>
                <div className={styles.pagination__buttons}>
                    <button
                        className={styles.pagination__btn}
                        onClick={() => page > 1 && setPage(page - 1)}
                    >
                        Предыдущая
                    </button>
                    {[...new Array(totalPageCount)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setPage(index + 1)}
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
                            page < totalPageCount && setPage(page + 1)
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
