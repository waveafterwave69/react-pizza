import ContentLoader from 'react-content-loader'
import styles from './PizzaItem.module.css'

const PizzaItemSkeleton = () => (
    <li className={styles.pizza}>
        <ContentLoader
            speed={2}
            width={300}
            height={456}
            viewBox="0 0 300 456"
            backgroundColor="#ebebeb"
            foregroundColor="#ecebeb"
        >
            <circle cx="144" cy="115" r="115" />
            <rect x="-1" y="260" rx="10" ry="10" width="280" height="28" />
            <rect x="-1" y="310" rx="10" ry="10" width="293" height="85" />
            <rect x="33" y="405" rx="10" ry="10" width="217" height="40" />
        </ContentLoader>
    </li>
)

export default PizzaItemSkeleton
