import { ProductImage, ProductFeatures, ProductInfo, ProductButtons, BackButton } from '../components';



export const ProductScreen = () => {

    return (
        <>
          <BackButton colorMobile='white' colorDesktop='orange-500' fixed />

            <div className="min-h-screen lg:grid lg:grid-cols-2 lg:items-center lg:justify-items-center lg:max-w-[1200px] lg:mx-auto">
                <div>
                    <ProductImage />
                    <ProductFeatures />
                </div>
                <div>
                    <ProductInfo />
                    <ProductButtons />
                </div>
            </div>
        </>
    )
}
