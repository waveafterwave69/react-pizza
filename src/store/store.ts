import { configureStore } from '@reduxjs/toolkit'
import { pizzaReducer } from './pizzas/pizzasSlice'
import { cartReducer } from './cart/cartSlice'

export const store = configureStore({
    reducer: {
        pizzas: pizzaReducer,
        cart: cartReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
