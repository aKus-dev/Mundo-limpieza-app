import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { HomeScreen } from ".."

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
            </Routes>
        </Router>
    )
}
