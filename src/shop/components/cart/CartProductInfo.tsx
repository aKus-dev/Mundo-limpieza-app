

export const CartProductInfo = () => {
    return (
        <div className="flex-grow flex flex-col justify-end gap-6 pb-4 relative">
            <h2 className="font-text font-bold text-primary text-[17px]">Nombre del producto</h2>

            <div className="flex gap-6 items-center  justify-between">
                <p className="text-[20px] font-bold font-text">$900</p>

                <div className="flex gap-4">
                    <button className="flex items-center justify-center border-solid border-[2px] border-orange-500 rounded-[50%] w-[30px] h-[30px]">
                        <i className="fa-solid fa-minus text-[15px] cursor-pointer"></i>
                    </button>

                    <span className="text-[20px] font-bold text-primary">0</span>

                    <button className="flex items-center justify-center bg-gradient-to-r from-[#FA9630] to-[#FF6042] rounded-[50%] w-[30px] h-[30px] text-white">
                        <i className="fa-solid fa-plus text-[15px] cursor-pointer"></i>
                    </button>
                </div>
            </div>

            <button className="absolute right-0 top-0">
                <i className="fa-solid fa-xmark text-[18px] text-primary "></i>
            </button>
        </div>
    )
}
