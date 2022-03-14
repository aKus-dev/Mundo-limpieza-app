import { MenuActive } from './MenuActive';

//TODO Hacer que se despliegue un menu al hacer click en el hamburguer

export const Hamburguer = () => {

    const handleHamburguer = () => {
        const menu = document.querySelector('#menu');
        menu!.classList.remove('hidden');
        menu!.classList.add('flex');
    }

    return (
        <>
            <div onClick={handleHamburguer} className="flex flex-col gap-[6px] cursor-pointer">
                <span className="h-[2px] w-[25px] bg-[#484848] duration-300"></span>
                <span className="h-[2px] w-[15px] bg-[#484848] duration-300"></span>
                <span className="h-[2px] w-[25px] bg-[#484848] duration-300"></span>
            </div>

            <MenuActive />
        </>
    )
}