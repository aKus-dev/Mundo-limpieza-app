import { ProductImage, ProductFeatures, ProductInfo, ProductButtons, BackButton } from '../components';
import { useProduct } from '../hooks/useProduct';

export const ProductScreen = () => {

    const product = useProduct();

    return (
        <>
            <BackButton colorMobile='text-white' fixed />

            <div className="min-h-screen lg:grid lg:grid-cols-2 lg:items-center lg:justify-items-center lg:max-w-[1200px] lg:mx-auto">
                <div>
                    <ProductImage />
                    <ProductFeatures />
                </div>
                <div>
                    <ProductInfo name={product.name} desc={product.desc} />
                    <ProductButtons price={product.price} />
                </div>
            </div>
        </>
    )
}
