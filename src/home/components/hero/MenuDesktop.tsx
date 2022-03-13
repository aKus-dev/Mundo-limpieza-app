import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';


export const MenuDesktop = () => {
    return (
        <header className="hidden p-10 max-h-[80px] max-w-[1350px] fixed top-0 inset-0 mx-auto w-[100%] lg:flex lg:justify-between">
            <Link to="/">
                <img
                    className="h-[40px] cursor-pointer"
                    src={Logo}
                    alt="Logo"
                />
            </Link>


            <nav>
                <ul className="flex gap-8 text-white font-text text-[1.6rem]">
                    <li>
                        <a href="#">Acerca</a>
                    </li>

                    <li>
                        <a className="border-solid border-white border-[1px] rounded-[5px] p-1" href="#">Productos</a>
                    </li>
                </ul>
            </nav>


        </header>
    )
}
