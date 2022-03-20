import { CartHeader, CartProduct } from '../components';

export const CartScreen = () => {
  return (
    <div className="px-12 max-w-[1200px] mx-auto">
      <CartHeader />

      <div className="max-w-[1000px] mx-auto flex flex-col gap-16 items-center">
        <CartProduct />
        <CartProduct />
        <CartProduct />
      </div>

    </div>
  )
}
