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
    searchValue: string
    sort: string
    setCategory: (category: number) => void
    setSort: (sort: string) => void
    setSearchValue: (value: string) => void
    setPage: (page: number) => void
    page: number
}

export const PizzaContext = createContext<PizzaContextType>({
    pizzas: [],
    isLoading: false,
    category: 0,
    searchValue: '',
    sort: 'rating',
    setCategory: () => {},
    setSort: () => {},
    setSearchValue: () => {},
    setPage: () => {},
    page: 1,
})

interface PizzaProviderProps {
    children: ReactNode
}

const PizzaProvider: React.FC<PizzaProviderProps> = ({ children }) => {
    const [pizzas, setPizzas] = useState<Pizza[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [category, setCategory] = useState<number>(0)
    const [sort, setSort] = useState<string>('rating')
    const [searchValue, setSearchValue] = useState<string>('')
    const [page, setPage] = useState<number>(1)

    useEffect(() => {
        const loadPizzas = async () => {
            setIsLoading(true)
            try {
                const initialPizzas = await getCategoySortPizzas(
                    sort as 'rating' | 'price' | 'title',
                    category,
                    searchValue,
                    page
                )

                setPizzas(initialPizzas)
            } catch (error) {
                console.error('Error fetching pizzas:', error)
            } finally {
                setIsLoading(false)
            }
        }

        loadPizzas()
    }, [category, sort, searchValue, page])

    const contextValue: PizzaContextType = {
        pizzas,
        isLoading,
        category,
        sort,
        setCategory,
        setSort,
        searchValue,
        setSearchValue,
        setPage,
        page,
    }

    return (
        <PizzaContext.Provider value={contextValue}>
            {children}
        </PizzaContext.Provider>
    )
}

export default PizzaProvider
