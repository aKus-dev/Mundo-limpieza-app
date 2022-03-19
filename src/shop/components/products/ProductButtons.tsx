import { ProductQuantity, AddToCart } from '../';

export const ProductButtons = () => {
    return (
        <>
            <div className="mt-10 px-4 gap-10 flex items-center justify-center">
                <span className="font-bold text-[30px] text-primary">$900</span>
                <ProductQuantity />
            </div>

            <AddToCart />
        </>

    )
}
