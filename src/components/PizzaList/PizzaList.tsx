import PizzaItem from '../PizzaItem/PizzaItem'
import styles from './PizzaList.module.css'
import pizzaImg from '../../assets/pizza.png'

const PizzaList: React.FC = () => {
    return (
        <>
            <section className={styles.pizza}>
                <h2 className={styles.pizza__title}>Все пиццы</h2>
                <ul className={styles.list}>
                    <PizzaItem
                        pizza={{
                            name: 'Чизбургер-пицца',
                            testo: ['тонкое', 'традиционное'],
                            sizes: [26, 30, 40],
                            price: 395,
                            img: pizzaImg,
                        }}
                    />
                    <PizzaItem
                        pizza={{
                            name: 'Чизбургер-пицца',
                            testo: ['тонкое', 'традиционное'],
                            sizes: [26, 30, 40],
                            price: 395,
                            img: pizzaImg,
                        }}
                    />{' '}
                    <PizzaItem
                        pizza={{
                            name: 'Чизбургер-пицца',
                            testo: ['тонкое', 'традиционное'],
                            sizes: [26, 30, 40],
                            price: 395,
                            img: pizzaImg,
                        }}
                    />{' '}
                    <PizzaItem
                        pizza={{
                            name: 'Чизбургер-пицца',
                            testo: ['тонкое', 'традиционное'],
                            sizes: [26, 30, 40],
                            price: 395,
                            img: pizzaImg,
                        }}
                    />{' '}
                    <PizzaItem
                        pizza={{
                            name: 'Чизбургер-пицца',
                            testo: ['тонкое', 'традиционное'],
                            sizes: [26, 30, 40],
                            price: 395,
                            img: pizzaImg,
                        }}
                    />{' '}
                    <PizzaItem
                        pizza={{
                            name: 'Чизбургер-пицца',
                            testo: ['тонкое', 'традиционное'],
                            sizes: [26, 30, 40],
                            price: 395,
                            img: pizzaImg,
                        }}
                    />{' '}
                    <PizzaItem
                        pizza={{
                            name: 'Чизбургер-пицца',
                            testo: ['тонкое', 'традиционное'],
                            sizes: [26, 30, 40],
                            price: 395,
                            img: pizzaImg,
                        }}
                    />{' '}
                    <PizzaItem
                        pizza={{
                            name: 'Чизбургер-пицца',
                            testo: ['тонкое', 'традиционное'],
                            sizes: [26, 30, 40],
                            price: 395,
                            img: pizzaImg,
                        }}
                    />{' '}
                    <PizzaItem
                        pizza={{
                            name: 'Чизбургер-пицца',
                            testo: ['тонкое', 'традиционное'],
                            sizes: [26, 30, 40],
                            price: 395,
                            img: pizzaImg,
                        }}
                    />{' '}
                    <PizzaItem
                        pizza={{
                            name: 'Чизбургер-пицца',
                            testo: ['тонкое', 'традиционное'],
                            sizes: [26, 30, 40],
                            price: 395,
                            img: pizzaImg,
                        }}
                    />{' '}
                    <PizzaItem
                        pizza={{
                            name: 'Чизбургер-пицца',
                            testo: ['тонкое', 'традиционное'],
                            sizes: [26, 30, 40],
                            price: 395,
                            img: pizzaImg,
                        }}
                    />{' '}
                    <PizzaItem
                        pizza={{
                            name: 'Чизбургер-пицца',
                            testo: ['тонкое', 'традиционное'],
                            sizes: [26, 30, 40],
                            price: 395,
                            img: pizzaImg,
                        }}
                    />
                </ul>
            </section>
        </>
    )
}

export default PizzaList
