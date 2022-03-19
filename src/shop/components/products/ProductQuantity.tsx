import React from 'react'

export const ProductQuantity = () => {
    return (
        <div className="text-[#686767] flex items-center gap-8 border-[1px] border-[#b8b7b7] border-solid rounded-[50px] px-8 py-2">
            <button className="flex items-center">
                <i className="fa-solid fa-minus text-[15px] cursor-pointer"></i>
            </button>

            <span className="text-[20px]">0</span>

            <button className="flex items-center">
                <i className="fa-solid fa-plus text-[15px] cursor-pointer"></i>
            </button>
        </div>
    )
}
