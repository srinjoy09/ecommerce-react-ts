// src/pages/Checkout.tsx

import {Box, Table} from "@chakra-ui/react";
import { useCart } from "../context/useCart";
import {Button} from "rsuite";
import "rsuite/dist/rsuite.min.css";

const Checkout = () => {
    const { cart, removeFromCart } = useCart();
    const truncateDescription = (description: string) => {
        return description.length > 100 ? description.substring(0, 100) + "..." : description;
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Checkout</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <Box padding="20px">
                <Table.Root size="md" variant="outline" padding="50px">
                    <Table.Header>
                        <Table.Row>
                            <Table.ColumnHeader>Product</Table.ColumnHeader>
                            <Table.ColumnHeader>Description</Table.ColumnHeader>
                            <Table.ColumnHeader>Quantity</Table.ColumnHeader>
                            <Table.ColumnHeader>Price</Table.ColumnHeader>
                            <Table.ColumnHeader textAlign="end">
                                <Box padding="0px 5px">
                                    Remove
                                </Box>
                            </Table.ColumnHeader>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {cart.map((item) => (
                            <Table.Row key={item.id}>
                                <Table.Cell>{item.title}</Table.Cell>
                                <Table.Cell>{truncateDescription(item.description)}</Table.Cell>
                                <Table.Cell>{item.quantity}</Table.Cell>
                                <Table.Cell>{item.price}</Table.Cell>
                                <Table.Cell textAlign="end">
                                    <Box padding="0px 5px">
                                    <Button size="xs" color="red" appearance="ghost" onClick={() => removeFromCart(item.id)}>
                                        Remove
                                    </Button>
                                    </Box>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Root>
                </Box>
            )}
        </div>
    );
};

export default Checkout;
