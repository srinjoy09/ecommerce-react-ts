import { Box, HStack, Stack } from "@chakra-ui/react";
import { Button } from 'rsuite';
import { useCart } from "../context/useCart";
import { Card } from "@chakra-ui/react";
import { Image, Text } from "@chakra-ui/react";

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    description: string;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    const { addToCart, cart, updateCartItemQuantity, removeFromCart } = useCart();

    let st = product.title + "";
    let st1 = product.description + "";
    if (st.length >= 20) {
        st = st.substring(0, 20) + "...";
    }
    if (st1.length >= 70) {
        st1 = st1.substring(0, 70) + "...";
    }

    const handleIncreaseQuantity = () => {
        const cartItem = cart.find((item) => item.id === product.id);
        if (cartItem) {
            updateCartItemQuantity(cartItem.id, cartItem.quantity + 1);
        }
    };

    const handleDecreaseQuantity = () => {
        const cartItem = cart.find((item) => item.id === product.id);
        if (cartItem) {
            if (cartItem.quantity > 1) {
                updateCartItemQuantity(cartItem.id, cartItem.quantity - 1);
            } else {
                removeFromCart(cartItem.id);
            }
        }
    };

    const handleAddToCart = () => {
        const cartItem = { ...product, quantity: 1 };
        addToCart(cartItem);
    };

    const cartItem = cart.find((item) => item.id === product.id);

    return (
        <Stack direction={['column', 'row']} wrap="wrap">
            <Card.Root maxW="sm" overflow="hidden" width="300px" height="400px">
                <Box mx="auto" padding="5px">
                    <Image
                        src={product.image}
                        alt="Green double couch with wooden legs"
                        boxSize='100px'
                        objectFit='cover'
                    />
                </Box>
                <Card.Body gap="2" padding="15px 5px">
                    <Card.Title>{st}</Card.Title>
                    <Card.Description>{st1}</Card.Description>
                    <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                        ${product.price}
                    </Text>
                </Card.Body>
                <Card.Footer gap="2">
                    {cartItem ? (
                        <HStack>
                            <Button color="blue" appearance="ghost" onClick={handleDecreaseQuantity}>
                                −
                            </Button>
                            <span className="text-teal-700 text-sm font-semibold">
                                {cartItem.quantity}
                            </span>
                            <Button color="blue" appearance="ghost" onClick={handleIncreaseQuantity}>
                                +
                            </Button>
                        </HStack>
                    ) : (
                        <Button color="blue" appearance="ghost" onClick={handleAddToCart}>
                            Add to Cart
                        </Button>
                    )}
                </Card.Footer>
            </Card.Root>
        </Stack>
    );
};

export default ProductCard;