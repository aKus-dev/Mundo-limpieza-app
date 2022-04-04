import { CartProductImage } from '../';
import { remove, increment, decrement } from '../../../store/slices/cartSlice';
import { useDispatch } from 'react-redux';

interface CartProductProps {
    name: string;
    price: number;
    quantity: number;
    id:number;
}

export const CartProduct = ({id, name, price, quantity }: CartProductProps) => {

    const dispatch = useDispatch();

    const handleRemove = (id:number) => {
        dispatch(
            remove(id)
        )
    }

    const handleIncrement = (id:number) => {
        dispatch(
            increment(id)
        )
    }

    const handleDecrement = (id:number) => {
        dispatch(
            decrement(id)
        )
    }

    return (
        <article className="flex gap-8 max-w-[520px] w-full">
            <CartProductImage />

            <div className="flex-grow flex flex-col justify-end gap-6 pb-4 relative">
                <h2 className="font-text font-bold text-primary text-[17px]">{name}</h2>

                <div className="flex gap-6 items-center  justify-between">
                    <p className="text-[20px] font-bold font-text">${price}</p>

                    <div className="flex gap-4">
                        <button onClick={() => handleDecrement(id)} className="flex items-center justify-center border-solid border-[2px] border-orange-500 rounded-[50%] w-[30px] h-[30px]">
                            <i className="fa-solid fa-minus text-[15px] cursor-pointer"></i>
                        </button>

                        <span className="text-[20px] font-bold text-primary">{quantity}</span>

                        <button onClick={() => handleIncrement(id)} className="flex items-center justify-center bg-gradient-to-r from-[#FA9630] to-[#FF6042] rounded-[50%] w-[30px] h-[30px] text-white">
                            <i className="fa-solid fa-plus text-[15px] cursor-pointer"></i>
                        </button>
                    </div>
                </div>

                <button onClick={() => handleRemove(id)} className="absolute right-0 top-0">
                    <i className="fa-solid fa-xmark text-[18px] text-primary "></i>
                </button>
            </div>
        </article>
    )
}
