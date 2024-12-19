// src/pages/Checkout.tsx

import { useCart } from "../context/useCart";

const Checkout = () => {
    const { cart, removeFromCart } = useCart();

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Checkout</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id} className="flex justify-between items-center border-b py-2">
              <span>
                {item.title} - ${item.price} x {item.quantity || 1}
              </span>
                            <button
                                className="text-red-500"
                                onClick={() => removeFromCart(item.id)}
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Checkout;
