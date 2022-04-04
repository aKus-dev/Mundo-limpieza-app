import { configureStore } from "@reduxjs/toolkit";
import savedSlice from './slices/savedSlice';
import cartSlice from './slices/cartSlice';

export const store = configureStore({
    reducer: {
        saved: savedSlice,
        cart: cartSlice
    }
})