import { ProductImage, ProductFeatures, ProductInfo, ProductButtons } from '../components';

export const ProductScreen = () => {
    return (
        <div className="min-h-screen">
            <ProductImage />
            <ProductFeatures />
            <ProductInfo />
            <ProductButtons />
        </div>
    )
}
