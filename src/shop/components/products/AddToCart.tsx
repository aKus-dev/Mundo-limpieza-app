import { useProduct } from '../../hooks/useProduct';
import { useDispatch } from 'react-redux';
import { add } from '../../../store/slices/cartSlice';
import { ProductButtonsContext } from '../contexts/ProductButtonsContext';
import { useContext } from 'react';
import Swal from 'sweetalert2'

export const AddToCart = () => {

    const { quantity } = useContext(ProductButtonsContext);
    const product = useProduct();
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        const cartItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity
        }

        dispatch(
            add(cartItem)
        )

        Swal.fire({
            icon: 'success',
            title: 'Agregado al carrito',
            text: 'El producto ha añadido al carrito',
            confirmButtonColor: '#FA9630',
            iconColor: '#FA9630'

        })

    }

    return (
        <div className="flex justify-center mt-8  mb-16">
            <button onClick={handleAddToCart} className="bg-gradient-to-r from-[#FA9630] to-[#FF6042] px-8 py-4 text-white rounded-[10px] text-[16px] flex gap-4 items-center justify-center">
                <i className="fa-solid fa-cart-shopping"></i>
                Agregar
            </button>
        </div>
    )
}
