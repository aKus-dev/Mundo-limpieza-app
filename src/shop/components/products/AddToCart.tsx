import React from 'react'

export const AddToCart = () => {
    return (
        <div className="flex justify-center mt-8  mb-16">
            <button className="bg-gradient-to-r from-[#FA9630] to-[#FF6042] px-8 py-4 text-white rounded-[10px] text-[16px] flex gap-4 items-center justify-center">
                <i className="fa-solid fa-cart-shopping"></i>
                Agregar
            </button>
        </div>
    )
}
