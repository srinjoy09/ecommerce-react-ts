import {Button, Drawer } from "rsuite";
import {useCart} from "../context/useCart.tsx";
import {HStack} from "@chakra-ui/react";

export const CartDrawer = ({isOpen, onClose}) => {
    console.log(isOpen)
    const {cart, removeFromCart} = useCart();
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

                    <HStack>
                        <Button color="blue" appearance="ghost" onClick={handleDecreaseQuantity}>
                            −
                        </Button>
                        <span className="text-teal-700 text-sm font-semibold">
                            {productQuantity}
                        </span>
                        <Button color="blue" appearance="ghost" onClick={handleIncreaseQuantity}>
                            +
                        </Button>
                    </HStack>
                )}
            </Drawer.Body>
        </Drawer>
    );
};
