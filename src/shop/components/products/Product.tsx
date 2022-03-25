import { Link } from 'react-router-dom';
import { add } from '../../../store/slices/savedSlice';
import { useDispatch } from 'react-redux';

interface ProductProps {
    id: number;
    name: string;
    shortDesc: string;
    price: number;
}

export const Product = ({ id, name, shortDesc, price }: ProductProps) => {

    const dispatch = useDispatch();

    const handleAddSavedProduct = (id: number) => {
        dispatch(
            add(id)
        );
    }

    return (
        <article className="w-[80%] max-w-[260px] min-h-[420px] rounded-[25px] shadow-[0_0_15px_#e1e1e1] flex flex-col">

            <div className="bg-gradient-to-r from-[#FA9630] to-[#FF6042] rounded-[25px] h-[55%]">
                <img
                    className=" max-h-[220px] mx-auto"
                    src="./assets/xd.png"
                    alt="Producto"
                />
            </div>


            <div className="flex-grow flex flex-col justify-center">
                <div className="pb-6 px-8">
                    <h2 className="font-title text-[2rem] text-primaryBlack">{name}</h2>
                    <p className="text-[1.45rem] text-[#777777]">{shortDesc}</p>
                    <p className="font-bold text-[2rem] text-primaryBlack">${price}</p>
                </div>

                <div className="flex gap-6 justify-center items-center">

                    <Link to="/shop/1" className="text-center bg-gradient-to-r from-[#FA9630] to-[#FF6042] py-2 px-8 rounded-[10px] text-white font-text font-bold w-[60%] max-w-[250px] text-[20px] md:duration-300 cursor-pointer md:hover:scale-105">
                        Ver
                    </Link>


                    <button onClick={() => handleAddSavedProduct(id)} className="bg-gradient-to-b from-[#FA9630] to-[#FF6042] w-[40px] h-[40px] rounded-[50%] flex items-center justify-center duration-300 md:hover:scale-110 cursor-pointer">
                        <i className="fa-solid fa-heart text-white text-[18px]"></i>
                    </button>
                </div>
            </div>
        </article>

    )
}
