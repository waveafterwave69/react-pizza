import axios from 'axios'

export const getPizzas = async () => {
    const response = await fetch(
        'https://68bbd6870f2491613edd6539.mockapi.io/pizzas'
    )

    if (!response.ok) {
        return 'Error'
    }

    const data = await response.json()

    return data
}

type Sort = 'rating' | 'price' | 'title'

export const getCategoySortPizzas = async (
    sort: Sort = 'rating',
    categoryNumber: number,
    searchValue: string,
    page: number
) => {
    const category = categoryNumber > 0 ? `category=${categoryNumber}` : ''
    const search = searchValue.length > 0 ? `search=${searchValue}` : ''

    const response = await axios.get(
        `https://68bbd6870f2491613edd6539.mockapi.io/pizzas?sortBy=${sort}&order=desc&${category}&${search}&limit=8&page=${page}`
    )

    if (response.status !== 200) {
        throw new Error('ОШИБКА')
    }

    return response.data
}
