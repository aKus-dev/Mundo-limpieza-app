import { CartProductImage, CartProductInfo } from '../';

export const CartProduct = () => {
    return (
        <article className="flex gap-8 max-w-[520px] w-full">
            <CartProductImage />
            <CartProductInfo />
        </article>
    )
}
