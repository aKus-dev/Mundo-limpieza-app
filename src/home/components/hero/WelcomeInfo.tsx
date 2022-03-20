import { Link } from 'react-router-dom';
import { ButtonGradient } from '../';

export const WelcomeInfo = () => {
    return (
        <div className="h-screen text-center grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-none ">
            <div className="self-center px-6 flex flex-col items-center gap-4 lg:gap-6">
                <h1 className="font-title text-primary text-[3.5rem] md:text-[45px]">Mundo Limpieza</h1>
                <p className="text-primary font-text text-[1.5rem] max-w-[500px]">Productos de limpieza que te ayudarán a remover profundamente las suciedades acumuladas </p>

                <Link to="/category" className="w-full">
                    <ButtonGradient text="Siguiente" />
                </Link>
            </div>

            <div className="bg-gradient-to-r from-[#FA9630] to-[#FF6042] rounded-tr-[100px] rounded-tl-[100px] flex items-center justify-center  lg:rounded-none lg:rounded-tl-[0%] lg:rounded-bl-[50%]">

                <img
                    className="max-w-[400px] md:max-w-[85%] max-h-[80%]"
                    src="https://cdn.discordapp.com/attachments/950845388770906132/952624192661102692/unknown.png"
                    alt=""
                />

            </div>

        </div>
    )
}
