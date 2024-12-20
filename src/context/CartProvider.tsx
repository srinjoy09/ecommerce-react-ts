import {ReactNode, useState} from "react";
import {CartContext} from "./CartContext.tsx";

interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
    description: string;
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (item: CartItem) => {
        setCart((prevCart) => [...prevCart, item]);
    };

    const removeFromCart = (id: number) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };
    const updateCartItemQuantity = (productId: number, quantity: number) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCartItemQuantity }}>
            {children}
        </CartContext.Provider>
    );
};