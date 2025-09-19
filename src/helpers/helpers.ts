import axios from 'axios'

type Sort = 'rating' | 'price' | 'title'

export const getPizzas = async (
    sort: Sort = 'rating',
    categoryNumber: number,
    searchValue: string,
    page: number
) => {
    try {
        const category = categoryNumber > 0 ? `category=${categoryNumber}` : ''
        const search =
            searchValue && searchValue.length > 0 ? `search=${searchValue}` : ''

        const response = await axios.get(
            `https://68bbd6870f2491613edd6539.mockapi.io/pizzas?sortBy=${sort}&order=desc&${category}&${search}&limit=8&page=${page}`
        )

        if (response.status !== 200) {
            throw new Error('Failed to fetch pizzas')
        }

        return response.data
    } catch (error: any) {
        console.log('error: ', error.message)
        return error.message
    }
}
