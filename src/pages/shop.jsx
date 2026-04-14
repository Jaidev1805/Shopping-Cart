import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";
import API from "../api/api";
import "../styles/Shop.css";

function Shop({ addToCart }) {
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        API()
            .then((data) => {
                setProduct(data.products || []);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <p className="loading">Loading...</p>;
    }

    if (error) {
        return <p className="error">Error: {error.message}</p>;
    }

    return (
        <div className="product-list">
            {product.map((prod) => (
                <ProductCard key={prod.id} product={prod} AddToCart={addToCart} />
            ))}
        </div>
    );
}

export default Shop;
