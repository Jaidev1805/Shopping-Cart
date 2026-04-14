import { useState } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import "../styles/Cart.css";

function Cart({ cartItems, updateQuantity, removeFromCart, clearCart }) {
    const [showModal, setShowModal] = useState(false);

    const totalPrice = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity, 0
    );

    if (cartItems.length === 0) {
        return (
            <div className="cart-empty">
                <p>Your cart is empty.</p>
                <Link to="/shop" className="back-to-shop">
                    Go to Shop
                </Link>
            </div>
        );
    }

    return (
        <>
            <h1 className="cart-heading">YOUR CART</h1>
            <div className="cart">
                <div className="cart-list">
                    {cartItems.map((item) => (
                        <CartItem
                            key={item.id}
                            item={item}
                            updateQuantity={updateQuantity}
                            removeFromCart={removeFromCart}
                        />
                    ))}
                </div>
                <div className="cart-summary">
                    <p className="cart-total">Total: ${totalPrice.toFixed(2)}</p>
                    <button className="checkout-btn" onClick={() => setShowModal(true)}>
                        CHECKOUT
                    </button>
                    {showModal && (
                        <div className="modal">
                            <p>Thank you for your purchase!</p>
                            <p>Your order has been placed successfully.</p>
                            <button onClick={() => {
                                clearCart();
                                setShowModal(false);
                            }}>Close</button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Cart;
