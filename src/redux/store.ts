import { configureStore } from '@reduxjs/toolkit'
import categoriesSlice from './slices/categoriesSlice'

export const store = configureStore({
    reducer: {
        category: categoriesSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch