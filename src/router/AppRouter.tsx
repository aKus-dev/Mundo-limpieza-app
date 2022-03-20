import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { HomeScreen, CategoryScreen } from "../home/screens"
import { ShopScreen, ProductScreen, CartScreen } from '../shop/screens';
import { ScrollToTop } from './ScrollToTop';



export const AppRouter = () => {
    return (
        <Router>
            <ScrollToTop>
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/category" element={<CategoryScreen />} />
                    <Route path="/cart" element={<CartScreen />} />
                    <Route path="/shop" element={<ShopScreen />} />
                    <Route path="/shop/:id" element={<ProductScreen />} />
                    <Route path="*" element={<h1 className="text-3xl">Not found</h1>} />
                </Routes>
            </ScrollToTop>
        </Router>
    )
}
