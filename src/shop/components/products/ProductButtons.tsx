import { ProductQuantity, AddToCart } from '../';

interface ProductButtonsProps {
    price:number;
}

export const ProductButtons = ({price}: ProductButtonsProps) => {
    return (
        <>
            <div className="mt-10 px-4 gap-10 flex items-center justify-center">
                <span className="font-bold text-[30px] text-primary">${price}</span>
                <ProductQuantity />
            </div>

            <AddToCart />
        </>

    )
}
