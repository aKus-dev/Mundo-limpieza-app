import { createSlice } from "@reduxjs/toolkit";
import products from '../data/data.json';

interface Saved {
    id: number;
    price:number;
    name:string;
}

const getInitialState = (): Saved[] => {
    const saved = localStorage.getItem('saved');
    if (saved) return JSON.parse(saved);
    return [];
}

const savedProducts = createSlice({
    name: 'saved',
    initialState: getInitialState(),
    reducers: {
        add(state, action) {
            const product = products.find(product => product.id === action.payload);

            if(product) {
                const { id, price, name } = product;
                return [...state, {id, price, name}]
            }

            return state;
        }
    }
})

// Reducer que maneja las acciones definidas, dependiendo de la acción que disparemos retorna un estado u otro
export default savedProducts.reducer;

// Exporto las acciones
export const { add } = savedProducts.actions;
