import { configureStore } from "@reduxjs/toolkit";
import savedSlice from './slices/savedSlice';

export const store = configureStore({
    reducer: {
        saved: savedSlice
    }
})