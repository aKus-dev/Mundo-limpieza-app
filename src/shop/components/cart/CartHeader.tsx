import React from 'react'
import { BackButton } from '../';

export const CartHeader = () => {
    return (
        <header className="mb-8 py-12 flex justify-between items-center max-w-[1200px] mx-auto">
            <BackButton colorMobile="text-orange-500" />
            <h1 className="font-title text-[22px] text-primary">Carrito</h1>

            <div className="bg-gradient-to-r from-[#FA9630] to-[#FF6042] py-4 px-6 rounded-[10px]">
                <i className="fa-solid fa-bag-shopping text-white text-[16px]"></i>
            </div>
        </header>
    )
}
