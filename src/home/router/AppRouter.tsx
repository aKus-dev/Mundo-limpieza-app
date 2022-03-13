import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { HomeScreen, CategoryScreen } from "../screens"

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/category" element={<CategoryScreen />} />
            </Routes>
        </Router>
    )
}
