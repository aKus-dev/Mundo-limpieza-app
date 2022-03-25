import { SavedProductImage } from '..';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { remove } from '../../../store/slices/savedSlice';

interface SavedProductProps {
    id: number;
    price: number;
    name: string;
}

export const SavedProduct = ({ id, price, name }: SavedProductProps) => {

    const dispatch = useDispatch();

    const handleRemoveSaved = (id:number) => {
        dispatch(
            remove(id)
        )
    } 

    return (
        <article className="flex gap-8 max-w-[520px] w-full">
            <SavedProductImage />

            <div className="flex-grow flex flex-col justify-end gap-6 pb-4 relative">
                <h2 className="font-text font-bold text-primary text-[17px]">{name}</h2>

                <div className="flex gap-6 items-center  justify-between">
                    <p className="text-[20px] font-bold font-text">${price}</p>

                    <Link to={`/shop/${id}`} className="bg-gradient-to-r from-[#FA9630] to-[#FF6042] px-8 py-4 text-white rounded-[10px] text-[16px] flex gap-4 items-center justify-center">
                        <i className="fa-solid fa-up-right-from-square"></i>
                        Ver
                    </Link>
                </div>

                <button onClick={() => handleRemoveSaved(id)} className="absolute right-0 top-0">
                    <i className="fa-solid fa-xmark text-[18px] text-primary "></i>
                </button>
            </div>
        </article>
    )
}
