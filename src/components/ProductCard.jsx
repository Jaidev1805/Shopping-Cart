import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ProductCard.css";

function ProductCard({ product, AddToCart }) {
    const [quantity, setQuantity] = useState(1);

    const addQuantity = () => {
        setQuantity(quantity + 1);
    };

    const removeQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="product-card">
            <Link to={`/product/${product.id}`}>
                <img src={product.thumbnail} alt={product.title} />
            </Link>
            <h2>{product.title}</h2>
            <p className="product-category">{product.category.toUpperCase()}</p>
            <p className="product-price">${product.price}</p>
            <div className="product-quantity">
                <button onClick={removeQuantity}>-</button>
                <input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value, 10) || 1)} />
                <button onClick={addQuantity}>+</button>
            </div>
            <button className="add-to-cart" onClick={() => AddToCart(product, quantity)}>ADD TO CART</button>
        </div>
    );
}

export default ProductCard;