// src/components/Navbar.tsx
import { useCart } from "../context/useCart";
import { Link } from "react-router-dom";

const Navbar = () => {
    const { cart } = useCart();

    return (
        <nav className="bg-teal-500 text-white p-4 flex justify-between">
            <h1 className="text-2xl">
                <Link to="/">E-Commerce</Link>
            </h1>
            <div>
                <Link to="/checkout">Cart Items: {cart.length}</Link>
            </div>
        </nav>
    );
};

export default Navbar;
