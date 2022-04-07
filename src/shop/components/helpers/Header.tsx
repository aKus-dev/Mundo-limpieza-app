import queryString from 'query-string';
import { Link, useLocation } from 'react-router-dom';
import { BackButton } from '../';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../store/interface/IRootState';


export const Header = () => {

    const { search } = useLocation();
    let { category } = queryString.parse(search)

    if (category) category = category!.toString().toLocaleUpperCase();


    const { cart, saved } = useSelector((state: IRootState) => ({
        cart: state.cart,
        saved: state.saved
    }))

    return (
        <header className="p-12 flex items-center justify-between">
            <BackButton colorMobile='text-orange-500' />

            <h1 className="text-[2rem] font-title text-primary font-weight-">{category || ''}</h1>

            <nav className="flex gap-6 text-[25px] text-orange-500">
                <div className="relative">

                    {
                        saved.length === 0
                            ?
                            (
                                <Link to="/saved">
                                    <i className="fa-solid fa-heart"></i>
                                </Link>
                            )
                            :
                            (
                                <Link to="/saved">
                                    <i className="fa-solid fa-heart-circle-plus"></i>
                                </Link>
                            )
                    }

                </div>

                <div>

                    {
                        cart.length === 0
                            ?
                            (
                                <Link to="/cart">
                                    <i className="fa-solid fa-cart-shopping"></i>
                                </Link>
                            )
                            :
                            (
                                <Link to="/cart">
                                    <i className="fa-solid fa-cart-plus"></i>
                                </Link>
                            )
                    }

                </div>
            </nav>
        </header>
    )
}
