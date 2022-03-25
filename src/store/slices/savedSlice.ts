import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {
    const saved = localStorage.getItem('saved');
    if (saved) return JSON.parse(saved);
    return [];
}

const savedProducts = createSlice({
    name: 'saved',
    initialState: getInitialState(),
    reducers: {

    },
})

// Reducer que maneja las acciones definidas, dependiendo de la acción que disparemos retorna un estado u otro
export default savedProducts.reducer;

// Exporto las acciones

