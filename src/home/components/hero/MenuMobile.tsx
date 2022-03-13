import Logo from '../../assets/logo2.png';
import { Hamburguer } from '../';

export const MenuMobile = () => {
    return (
        <header className="p-10 flex items-center justify-between h-[80px] fixed w-[100%] lg:hidden">
            <img
                className="h-[45px] cursor-pointer"
                src={Logo}
                alt="Logo"
            />

            <Hamburguer />
        </header>
    )
}
