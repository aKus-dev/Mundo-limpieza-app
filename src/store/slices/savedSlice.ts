import { createSlice } from "@reduxjs/toolkit";
import products from '../data/data.json';
import { alreadySaved } from '../helpers/alreadySaved';

export interface Saved {
    id: number;
    price: number;
    name: string;
}

const getInitialState = (): Saved[] => {
    const saved = localStorage.getItem('saved');
    if (saved) return JSON.parse(saved);
    return [];
}

const savedSlice= createSlice({
    name: 'saved',
    initialState: getInitialState(),
    reducers: {
        add(state, action) {
            const exists = alreadySaved(action.payload);
            if(exists) return;

            const product = products.find(product => product.id === action.payload);

            if (product) {
                const { id, price, name } = product;
                localStorage.setItem('saved', JSON.stringify([...state, { id, price, name }]))
                return [...state, { id, price, name }]
            }
        },
        remove(state, action) {
            state = state.filter(product => product.id !== action.payload);
            localStorage.setItem('saved', JSON.stringify([...state]))
            return state;
        }
    }
})

// Reducer que maneja las acciones definidas, dependiendo de la acción que disparemos retorna un estado u otro
export default savedSlice.reducer;

// Exporto las acciones
export const { add, remove } = savedSlice.actions;
