// src/context/CartContext.tsx
import {createContext} from "react";

interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
}

interface CartContextProps {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: number) => void;
    updateCartItemQuantity: (productId: number, quantity: number) => void;
}

export const CartContext = createContext<CartContextProps | undefined>(undefined);



