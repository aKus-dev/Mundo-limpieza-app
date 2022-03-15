import { Product } from './';


export const ProductsContainer = () => {
    return (
        <div id="products-container" className="max-w-[1200px] mx-auto mt-14 px-12 flex flex-col items-center gap-y-[50px] md:grid md:gap-x-14 md:justify-items-center md:grid-cols-2 lg:grid-cols-3">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    )
}
