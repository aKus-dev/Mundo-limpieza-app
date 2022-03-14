import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { HomeScreen, CategoryScreen } from "../home/screens"
import { ShopScreen } from '../shop/screens';


export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/category" element={<CategoryScreen />} />
                <Route path="/shop" element={<ShopScreen />} />
                <Route path="*" element={ <h1 className="text-3xl">Not found</h1> } />
            </Routes>
        </Router>
    )
}
