import { createContext, useState, useEffect, type ReactNode } from 'react'
import { getCategoySortPizzas } from '../helpers/helpers'

export interface Pizza {
    id: number
    name: string
    description: string
    imageUrl: string
    price: number
    ingredients: string[]
    isVegetarian: boolean
    sizeOptions: string[]
}

interface PizzaContextType {
    pizzas: Pizza[]
    isLoading: boolean
    category: number
    sort: string
    setCategory: (category: number) => void
    setSort: (sort: string) => void
}

export const PizzaContext = createContext<PizzaContextType>({
    pizzas: [],
    isLoading: false,
    category: 0,
    sort: 'rating',
    setCategory: () => {},
    setSort: () => {},
})

interface PizzaProviderProps {
    children: ReactNode
}

const PizzaProvider: React.FC<PizzaProviderProps> = ({ children }) => {
    const [pizzas, setPizzas] = useState<Pizza[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [category, setCategory] = useState<number>(0)
    const [sort, setSort] = useState<string>('rating')

    useEffect(() => {
        const loadPizzas = async () => {
            setIsLoading(true)
            try {
                const initialPizzas = await getCategoySortPizzas(
                    sort as 'rating' | 'price' | 'title',
                    category
                )
                setPizzas(initialPizzas)
            } catch (error) {
                console.error('Error fetching pizzas:', error)
            } finally {
                setIsLoading(false)
            }
        }

        loadPizzas()
    }, [category, sort])

    const contextValue: PizzaContextType = {
        pizzas,
        isLoading,
        category,
        sort,
        setCategory,
        setSort,
    }

    return (
        <PizzaContext.Provider value={contextValue}>
            {children}
        </PizzaContext.Provider>
    )
}

export default PizzaProvider
