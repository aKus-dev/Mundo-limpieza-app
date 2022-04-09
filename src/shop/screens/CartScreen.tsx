import { CartHeader, CartProduct, Total } from '../components';
import { IRootState } from '../../store/interface/IRootState';
import { useSelector } from 'react-redux';


export const CartScreen = () => {

  const cartProducts = useSelector((state: IRootState) => state.cart);


  return (
    <div className="px-12 max-w-[1200px] mx-auto pb-16">
      <CartHeader />

      <div className="max-w-[1000px] mx-auto flex flex-col gap-16 items-center">
        {
          cartProducts.length !== 0
            ? (
              cartProducts.map(({ id, name, price, quantity }) => (
                <CartProduct key={id} id={id} name={name} price={price} quantity={quantity} />
              ))
            )
            : <h1 className="bg-gradient-to-r from-[#FA9630] to-[#FF6042] font-title text-[25px] text-white px-8 py-4 rounded-[10px] w-full text-center max-w-[550px]">No hay productos en el carrito</h1>
        }
      </div>

      {
        cartProducts.length !== 0 && <Total />
      }
      
    </div>
  )
}
