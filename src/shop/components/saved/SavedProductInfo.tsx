

export const SavedProductInfo = () => {
    return (
        <div className="flex-grow flex flex-col justify-end gap-6 pb-4 relative">
            <h2 className="font-text font-bold text-primary text-[17px]">Nombre del producto</h2>

            <div className="flex gap-6 items-center  justify-between">
                <p className="text-[20px] font-bold font-text">$900</p>

                <a href="#" target="_blank" className="bg-gradient-to-r from-[#FA9630] to-[#FF6042] px-8 py-4 text-white rounded-[10px] text-[16px] flex gap-4 items-center justify-center">
                    <i className="fa-solid fa-up-right-from-square"></i>
                    Ver
                </a>
            </div>

            <button className="absolute right-0 top-0">
                <i className="fa-solid fa-xmark text-[18px] text-primary "></i>
            </button>
        </div>
    )
}
