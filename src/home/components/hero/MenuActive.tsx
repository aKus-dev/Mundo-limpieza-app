import { useRef } from 'react';
import { MouseEvent } from 'react'

export const MenuActive = () => {

    const menu = useRef<HTMLDivElement>(null);

    const handleMenuActive  = (e:MouseEvent<HTMLDivElement>) => {
        const target = e.target as Element;
        
        if(target.classList.contains('no-remove')) return;
        menu.current!.classList.add('hidden')
    }

    return (
        <div id="menu" onClick={handleMenuActive} ref={menu} className="hidden bg-[#000000a1] fixed inset-0 m-auto w-screen h-screen backdrop-blur-md  items-center justify-center">
            <div className="no-remove w-[80vw] h-[80vh] max-w-[400px] bg-[#ffffff] flex items-center justify-center rounded-[30px] duration-300 overflow-hidden relative">

                <i 
                onClick={handleMenuActive}
                className="fa-solid fa-xmark text-[35px] text-primary absolute right-8 top-6 cursor-pointer"></i>

                <nav>
                    <ul className="text-center flex flex-col gap-2 text-primary">
                        <li className="text-[30px] font-title">
                            <a href="#">Acerca</a>
                        </li>
                        <li className="text-[30px] font-title">
                            <a href="#">Productos</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
