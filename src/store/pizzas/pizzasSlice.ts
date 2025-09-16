import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getCategoySortPizzas } from '../../helpers/helpers'

const initialState = {
    pizzas: [],
    category: 0,
    searchValue: '',
    page: 1,
    sort: 'rating',
    isLoading: false,
}

export const fetchPizzas = createAsyncThunk(
    'pizza/fetchPizzas',
    async function (params: any, { rejectWithValue }) {
        try {
            const { category, searchValue, page, sort } = params
            const pizzasData = await getCategoySortPizzas(
                sort,
                category,
                searchValue,
                page
            )

            return pizzasData
        } catch (error: any) {
            return rejectWithValue(error.message || 'Failed to fetch pizzas')
        }
    }
)

const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        setCategory(state, action) {
            state.category = action.payload
        },
        setSearchValue(state, action) {
            state.searchValue = action.payload
        },
        setPage(state, action) {
            state.page = action.payload
        },
        setPizzas(state, action) {
            state.pizzas = action.payload
        },
        setSort(state, action) {
            state.sort = action.payload
        },
        setFilters(state, action) {
            state.page = Number(action.payload.page)
            state.category = action.payload.category
            state.sort = action.payload.sort
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.pizzas = action.payload
            state.isLoading = false
        })
        builder.addCase(fetchPizzas.rejected, (state) => {
            state.isLoading = false
            console.error('Failed to fetch pizzas.')
        })
    },
})

export const {
    setCategory,
    setSearchValue,
    setPage,
    setPizzas,
    setSort,
    setFilters,
} = pizzasSlice.actions
export const pizzaReducer = pizzasSlice.reducer
