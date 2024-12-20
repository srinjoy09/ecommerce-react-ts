import { Button, Drawer, Text } from "rsuite";
import { useCart } from "../context/useCart.tsx";
import {Flex, HStack, Spacer, VStack} from "@chakra-ui/react";

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

    const getTotalPrice = (cart: Product[]): number => {
        const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);
        console.log("Total Price:", total); // Debugging log
        return total;
    };

    console.log("Cart:", cart); // Debugging log

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
                    <VStack spacing={4} >
                        {cart.map((item) => (
                            <HStack key={item.id} spacing={4}  width="100%">
                                <Text size="lg">{item.title}</Text>
                                <Spacer />
                                <HStack>
                                    <Text size="lg">${item.price*item.quantity}</Text>
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
            <Flex justify="flex-end">
            <Drawer.Footer style={{ position: "fixed",
                bottom: 0,
                textAlign: "center",
                paddingBottom: 10,
                padding: '16px',
                borderTop: '1px solid #e5e5e5',
                }}>
                <HStack justify="space-between" width="100%" spacing={4} >
                    <Text size="lg" >Subtotal:</Text>
                    <Spacer/>
                    <Text size="lg" >${getTotalPrice(cart).toFixed(2)}</Text>
                </HStack>
            </Drawer.Footer>
            </Flex>
        </Drawer>
    );
};