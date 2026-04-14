import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/home';
import Shop from './pages/shop';
import Cart from './pages/cart';
import './App.css';
import Details from './pages/details';

function App() {
    const [cartItems, setCartItems] = useState([]);

    function addToCart(product, quantity) {
        const alreadyInCart = cartItems.find((item) => item.id === product.id);

        if (alreadyInCart) {
            setCartItems(
                cartItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, quantity }]);
        }
    }

    function updateQuantity(id, newQuantity) {
        if (newQuantity <= 0) {
            setCartItems(cartItems.filter((item) => item.id !== id));
        } else {
            setCartItems(
                cartItems.map((item) =>
                    item.id === id ? { ...item, quantity: newQuantity } : item
                )
            );
        }
    }

    function removeFromCart(id) {
        setCartItems(cartItems.filter((item) => item.id !== id));
    }

    function clearCart() {
        setCartItems([]);
    }

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <BrowserRouter>
            <Navbar cartCount={totalItems} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop addToCart={addToCart} />} />
                <Route path="/product/:id" element={<Details addToCart={addToCart} />} />
                <Route
                    path="/cart"
                    element={
                        <Cart
                            cartItems={cartItems}
                            updateQuantity={updateQuantity}
                            removeFromCart={removeFromCart}
                            clearCart={clearCart}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;