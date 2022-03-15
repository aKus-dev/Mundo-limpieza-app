import { Header, Search, ProductsContainer } from '../components';

export const ShopScreen = () => {
  return (
    <div className="max-w-[1200px] mx-auto pb-24">
        <Header />
        <Search />
        <ProductsContainer />
    </div>
  )
}
