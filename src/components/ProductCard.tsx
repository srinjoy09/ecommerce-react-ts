
import {Button, HStack} from "@chakra-ui/react";
import { useCart } from "../context/useCart";

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    const { addToCart, cart, updateCartItemQuantity, removeFromCart } = useCart();
    const productQuantity = cart.find((item) => item.id === product.id)?.quantity || 0;

    const handleIncreaseQuantity = () => {
        const cartItem = { ...product, quantity: productQuantity + 1 };
        updateCartItemQuantity(cartItem.id, cartItem.quantity);
    };
    const handleDecreaseQuantity = () => {
        if (productQuantity > 1) {
            updateCartItemQuantity(product.id, productQuantity - 1);
        } else {
            // Remove the product from the cart if quantity hits 0
            removeFromCart(product.id);
        }
    };
    // Function to handle adding the product to the cart
    const handleAddToCart = () => {
        const cartItem = { ...product, quantity: 1 }; // Add quantity to Product
        addToCart(cartItem);
    };

    return (
        <div className="border p-4 rounded shadow-lg">
            <img src={product.image} alt={product.title} className="h-40 mx-auto" />
            <h2 className="text-xl font-bold mt-2">{product.title}</h2>
            <p className="text-gray-700">${product.price}</p>
            <div className="flex items-center space-x-2 mt-2">
                {productQuantity > 0 ? (
                    // When product is in the cart, show "-" and "+" buttons with quantity
                    <HStack>
                        <Button colorScheme="teal" size="sm" onClick={handleDecreaseQuantity}>
                            −
                        </Button>
                        <span className="text-teal-700 text-sm font-semibold">
                            {productQuantity}
                        </span>
                        <Button colorScheme="teal" size="sm" onClick={handleIncreaseQuantity}>
                            +
                        </Button>
                    </HStack>
                ) : (
                    // When product is not in the cart, show "Add to Cart" button
                    <Button colorScheme="teal" mt={2} onClick={handleAddToCart}>
                        Add to Cart
                    </Button>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
