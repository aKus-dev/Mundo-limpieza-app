import { Product } from '../';
import products from '../../../store/data/data.json';

export const ProductsContainer = () => {
    return (
        <main className="mt-12 flex gap-24 justify-center flex-wrap">

            {
                products.map(({id, name, shortDesc, price}) => (
                    <Product key={id} id={id} name={name} shortDesc={shortDesc} price={price}/>
                ))
            }

        </main>
    )
}
