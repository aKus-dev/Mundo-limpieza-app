export const ProductImage = () => {
    return (
        <div className="bg-gradient-to-r from-[#FA9630] to-[#FF6042] min-h-[350px] rounded-b-[50%] flex items-center justify-center lg:rounded-[60px] lg:h-[450px] lg:w-[450px]">
            <img
                className="duration-300 max-h-[280px] mx-auto hover:scale-110"
                src="../assets/xd.png"
                alt="Producto"
            />
        </div>
    )
}
