import { Product } from './';


export const ProductsContainer = () => {
    return (
        <main id="products-container" className="mt-12 flex gap-24 justify-center flex-wrap">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </main>
    )
}
