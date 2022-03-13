import Logo from '../../assets/logo.png';

export const MenuDesktop = () => {
    return (
        <header className="hidden p-6 max-h-[80px] max-w-[1350px] fixed top-0 inset-0 mx-auto w-[100%] lg:flex lg:justify-between">
            <img
                className="h-[30px] cursor-pointer"
                src={Logo}
                alt="Logo"
            />

            <nav>
                <ul className="flex gap-8 text-white font-text">
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
