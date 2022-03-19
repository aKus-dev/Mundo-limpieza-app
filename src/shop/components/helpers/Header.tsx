import queryString from 'query-string';
import { Link, useLocation } from 'react-router-dom';
import { BackButton } from '../';

export const Header = () => {

    const { search } = useLocation();
    let { category } = queryString.parse(search)

    if(category) category = category!.toString().toLocaleUpperCase();

    return (
        <header className="p-12 flex items-center justify-between">
            <BackButton colorMobile='text-orange-500'/>

            <h1 className="text-[2rem] font-title text-primary font-weight-">{category || ''}</h1>

            <nav className="flex gap-6 text-[25px] text-orange-500">
                <Link to="/saved">
                    <i className="fa-solid fa-heart"></i>
                </Link>

                <Link to="/cart">
                    <i className="fa-solid fa-cart-shopping"></i>
                </Link>
            </nav>
        </header>
    )
}
