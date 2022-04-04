import { createSlice } from "@reduxjs/toolkit";
import { alreadyInTheCart } from "../helpers/alreadyInTheCart";

export interface Cart {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

const getInitialState = (): Cart[] => {
    const cartItems = localStorage.getItem('cart');
    if (cartItems) return JSON.parse(cartItems);
    return [];
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: getInitialState(),
    reducers: {
        add(state, action) {
            const exists = alreadyInTheCart(action.payload.id);
            if(exists) return;

            localStorage.setItem('cart', JSON.stringify([...state, action.payload]))
            return [...state, action.payload]
        },
        remove(state, action) {
            state = state.filter(product => product.id !== action.payload);
            localStorage.setItem('cart', JSON.stringify([...state]))
            return state;
        },
        increment(state, action) {
            state.map(product => {
                if (product.id === action.payload) {
                    return {
                        ...product,
                        quantity: product.quantity++
                    }
                }
                return product;
            });

            localStorage.setItem('cart', JSON.stringify([...state]))
        },
        decrement(state, action) {
            state.map(product => {

                if (product.id !== action.payload) return product;

                if (product.quantity !== 1) {
                    return { ...product, quantity: product.quantity-- }
                }

                return product;

            })

            localStorage.setItem('cart', JSON.stringify([...state]))
        }
    }
})

// Reducer que maneja las acciones definidas, dependiendo de la acción que disparemos retorna un estado u otro
export default cartSlice.reducer;

// Exporto las acciones
export const { add, remove, increment, decrement } = cartSlice.actions;

