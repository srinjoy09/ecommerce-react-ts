import { Button, Drawer, Text } from "rsuite";
import { useCart } from "../context/useCart.tsx";
import {HStack, Spacer, StackSeparator, VStack} from "@chakra-ui/react";

interface Product {
    id: number;
    title: string;
    price: number;
    quantity: number;
    description: string;
}

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
    const { cart, removeFromCart, updateCartItemQuantity } = useCart();

    const handleIncreaseQuantity = (cartItem: Product) => {
        if (cartItem) {
            updateCartItemQuantity(cartItem.id, cartItem.quantity + 1);
        }
    };

    const handleDecreaseQuantity = (cartItem: Product) => {
        if (cartItem) {
            if (cartItem.quantity > 1) {
                updateCartItemQuantity(cartItem.id, cartItem.quantity - 1);
            } else {
                removeFromCart(cartItem.id);
            }
        }
    };

    return (
        <Drawer open={isOpen} onClose={onClose}>
            <Drawer.Header>
                <Drawer.Title>Your Cart</Drawer.Title>
                <Drawer.Actions>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button onClick={onClose} appearance="primary">
                        Confirm
                    </Button>
                </Drawer.Actions>
            </Drawer.Header>
            <Drawer.Body>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <VStack spacing={4} align="start" seperator={StackSeparator}>
                        {cart.map((item) => (
                            <HStack key={item.id} spacing={4} align="start" width="100%">
                                <Text size="lg">{item.title}</Text>
                                <Spacer />
                                <Spacer />
                                <HStack >
                                    <Button color="blue" appearance="ghost" onClick={() => handleDecreaseQuantity(item)}>
                                        −
                                    </Button>
                                    <span className="text-teal-700 text-sm font-semibold">
                                        {item.quantity}
                                    </span>
                                    <Button color="blue" appearance="ghost" onClick={() => handleIncreaseQuantity(item)}>
                                        +
                                    </Button>
                                </HStack>

                            </HStack>
                        ))}
                    </VStack>
                )}
            </Drawer.Body>
        </Drawer>
    );
};