import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CategoryState {
    value: number
}

const initialState: CategoryState = {
    value: 0
}

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCategory: (state, action: PayloadAction<number>) => {
            state.value = action.payload
        }
    }
})

export const { setCategory } = categorySlice.actions

export default categorySlice.reducer