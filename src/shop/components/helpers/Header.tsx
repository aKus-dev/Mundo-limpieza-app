import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <div className="p-12 flex items-center justify-between">
            <Link to="/category">
                <i className="fa-solid fa-angle-left text-[3.5rem] text-orange-500 cursor-pointer"></i>
            </Link>

            <h1 className="text-[2rem] font-title text-primary font-weight-">Busca Productos</h1>

            <Link to="/">
                <img className="h-[3.5rem]" src="./assets/logo.png" alt="Logo" />
            </Link>
        </div>
    )
}
