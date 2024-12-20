import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import {Stack, Spinner} from "@chakra-ui/react";

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    description: string;
}

const Home = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((response) => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                padding: '10px'}}>
            <Spinner size="xl" />
            </div>

        );
    }

    return (
        <Stack direction={['column', 'row']} wrap="wrap">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </Stack>
    );
};

export default Home;