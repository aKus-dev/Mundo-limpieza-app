import { ButtonGradient } from '../../home/components'

export const Product = () => {
    return (
        <article className="w-[80%] max-w-[260px] min-h-[420px] rounded-[25px] shadow-[0_0_15px_#e1e1e1] flex flex-col">

            <div className="bg-gradient-to-r from-[#FA9630] to-[#FF6042] rounded-[25px] h-[55%]">
                <img
                    className=" max-h-[220px] mx-auto"
                    src="./assets/xd.png"
                    alt="Producto"
                />
            </div>


            <div className="flex-grow flex flex-col justify-center">
                <div className="pb-6 px-8">
                    <h2 className="font-title text-[2rem] text-primaryBlack">Titulo</h2>
                    <p className="text-[1.45rem] text-[#777777]">Breve descripción del producto</p>
                    <p className="font-bold text-[2rem] text-primaryBlack">$900</p>
                </div>

                <div className="flex gap-6 justify-center items-center">
                    <ButtonGradient text="Ver" />

                    <div className="bg-gradient-to-b from-[#FA9630] to-[#FF6042] w-[40px] h-[40px] rounded-[50%] flex items-center justify-center duration-300 md:hover:scale-110 cursor-pointer">
                        <i className="fa-solid fa-heart text-white text-[18px]"></i>
                    </div>
                </div>
            </div>
        </article>

    )
}
