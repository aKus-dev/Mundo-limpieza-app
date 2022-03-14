import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { HomeScreen, CategoryScreen } from "../screens"

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/category" element={<CategoryScreen />} />
                <Route path="*" element={ <h1 className="text-3xl">Not found</h1> } />
            </Routes>
        </Router>
    )
}
