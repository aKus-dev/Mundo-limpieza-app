import Bidon from '../../assets/bidon.png'

export const Information = () => {
    return (
        <div className="p-10 max-w-[1300px] mx-auto md:px-4 md:mt-12 lg:grid lg:grid-cols-2 lg:justify-items-center lg:items-center">
            <div>
                <h1 className="text-4xl font-title mb-6 leading-[1.35] text-center md:text-[40px]">Te ayudamos a realzar tu limpieza </h1>
                <p className="text-black-50 max-w-[500px] mx-auto text-center md:text-[16px]">Productos de limpieza que te ayudarán a remover profundamente las sucediades acumuladas en tu hogar</p>

            </div>

            <div className="flex gap-6 mt-16 justify-center">
                <div className="flex items-center min-h-[300px] w-[180px] bg-[#626262] rounded-[80px]">
                    <img src={Bidon} alt="Bidon" />
                </div>
                <div className="flex flex-col gap-4 items-center">
                    <div className="min-h-[180px] w-[150px] bg-[#353535] rounded-tr-[80px] rounded-tl-[80px] flex items-center">
                        <img src={Bidon} alt="Bidon" />
                    </div>

                    <div className="flex items-center min-h-[150px] w-[150px] bg-[#a9a9a9] rounded-[50%]">
                        <img src={Bidon} alt="Bidon" />
                    </div>
                </div>
            </div>

        </div>
    )
}
