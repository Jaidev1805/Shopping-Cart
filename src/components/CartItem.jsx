import "../styles/CartItem.css";

function CartItem({ item, updateQuantity, removeFromCart }) {
    return (
        <div className="cart-item">
            <img src={item.thumbnail} alt={item.title} />
            <div className="cart-item-info">
                <div className="cart-item-details">
                    <h2>{item.title}</h2>
                    <p>${item.price}</p>
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <input type="number" value={item.quantity} onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))} />
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <div className="cart-item-total">
                    <p>Quantity: {item.quantity}</p>
                    <p>Total: ${item.price * item.quantity}</p>
                    <a className="remove-from-cart" onClick={() => removeFromCart(item.id)}>Remove</a>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
