import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

function Navbar({ cartCount }) {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-logo">REACTSTORE</Link>
            <ul className="navbar-links">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/shop">SHOP</Link></li>
                <li>
                    <Link to="/cart" className="cart-link">
                        CART
                    </Link>
                    {cartCount > 0 && (
                        <span id="cart-badge">{cartCount}</span>
                    )}
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
