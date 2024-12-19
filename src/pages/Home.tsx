// src/pages/Home.tsx
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
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

    if (loading) return <p>Loading...</p>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Home;
