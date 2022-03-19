export const ProductFeatures = () => {
    return (
        <div className="mt-16 flex justify-center gap-8">
            <div className="text-white h-[80px] w-[80px] bg-gradient-to-b from-[#FA9630] to-[#FF6042] rounded-[15px] flex items-center justify-center flex-col gap-2">
                <i className="fa-solid fa-leaf text-[30px]"></i>
                <p className="text-[14px]">Natural</p>
            </div>

            <div className="text-white h-[80px] w-[80px] bg-gradient-to-b from-[#FA9630] to-[#FF6042] rounded-[15px] flex items-center justify-center flex-col gap-2">
                <i className="fa-solid fa-soap text-[30px]"></i>
                <p className="text-[14px]">Limpieza</p>
            </div>

            <div className="text-white h-[80px] w-[80px] bg-gradient-to-b from-[#FA9630] to-[#FF6042] rounded-[15px] flex items-center justify-center flex-col gap-2">
                <i className="fa-solid fa-truck-fast text-[30px]"></i>
                <p className="text-[14px]">Envío</p>
            </div>
        </div>
    )
}
