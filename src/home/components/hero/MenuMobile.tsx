import { Link } from 'react-router-dom';
import { Hamburguer } from '../';
import Logo from '../../assets/logo.png';

export const MenuMobile = () => {
    return (
        <header className="p-10 flex items-center justify-between h-[80px] w-[100%] lg:hidden">
            <Link to="/">
                <img
                    className="h-[40px] cursor-pointer"
                    src={Logo}
                    alt="Logo"
                />
            </Link>

            <Hamburguer />
        </header>
    )
}
