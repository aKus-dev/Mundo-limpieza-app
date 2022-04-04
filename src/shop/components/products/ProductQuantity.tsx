import { useContext, useState } from 'react';
import { ProductButtonsContext } from '../contexts/ProductButtonsContext';

export const ProductQuantity = () => {

    const { quantity, setQuantity } = useContext(ProductButtonsContext);

    const increment = () => {
        setQuantity(quantity + 1);
    }

    const decrement = () => {
        if(quantity === 1) return;
        setQuantity(quantity - 1);
    }


    return (
        <div className="text-[#686767] flex items-center gap-8 border-[1px] border-[#b8b7b7] border-solid rounded-[50px] px-8 py-2">
            <button onClick={decrement} className="flex items-center">
                <i className="fa-solid fa-minus text-[15px] cursor-pointer"></i>
            </button>

            <span className="text-[20px]">{quantity}</span>

            <button onClick={increment} className="flex items-center">
                <i className="fa-solid fa-plus text-[15px] cursor-pointer"></i>
            </button>
        </div>
    )
}
