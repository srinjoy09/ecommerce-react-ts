// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopMenu from "./components/TopMenu.tsx";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";

const App = () => {
    return (
        <Router>
            <TopMenu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </Router>
    );
};

export default App;
