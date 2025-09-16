import { createSlice } from '@reduxjs/toolkit'

interface Item {
    id: string | number
    price: number
    [key: string]: any
}

interface initialCartState {
    items: Item[]
    totalPrice: number
    totalCount: number
}

const initialState: initialCartState = {
    items: [],
    totalPrice: 0,
    totalCount: 0,
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            const newItem = action.payload
            const existingItem = state.items.find(
                (item) => item.id === newItem.id
            )

            if (existingItem) {
                state.items.forEach((el) => {
                    if (el.id === action.payload.id) {
                        el.count += 1
                        el.itemPrice += el.price
                    }
                })
            } else {
                state.items.push({ ...newItem, count: 1 })
            }

            state.totalCount += 1
            state.totalPrice += newItem.price
        },
        minusItem(state, action) {
            const newItem = action.payload
            const existingItem = state.items.find(
                (item) => item.id === newItem.id
            )

            if (existingItem) {
                state.items.forEach((el) => {
                    if (el.id === action.payload.id && el.count > 1) {
                        el.count -= 1
                        el.itemPrice -= el.price

                        state.totalCount -= 1
                        state.totalPrice -= newItem.price
                    }
                })
            }
        },
        removeItem(state, action) {
            state.items = state.items.filter(
                (el) => el.id !== action.payload.id
            )
            const removedItem = state.items.find(
                (item) => item.id === action.payload
            )
            if (removedItem) {
                state.totalCount -= 1
                state.totalPrice -= removedItem.price
            }

            state.totalCount -= action.payload.count
            state.totalPrice -= action.payload.itemPrice
        },
        clearItems(state) {
            state.items = []
            state.totalPrice = 0
            state.totalCount = 0
        },
    },
})

export const { addItem, clearItems, removeItem, minusItem } = cartSlice.actions
export const cartReducer = cartSlice.reducer
