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
    categoryNumber: number
) => {
    if (categoryNumber) {
        const response = await fetch(
            `https://68bbd6870f2491613edd6539.mockapi.io/pizzas?sortBy=${sort}&category=${categoryNumber}&order=desc`
        )

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data = await response.json()
        return data
    } else {
        const response = await fetch(
            `https://68bbd6870f2491613edd6539.mockapi.io/pizzas?sortBy=${sort}&order=desc`
        )

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data = await response.json()
        return data
    }
}
