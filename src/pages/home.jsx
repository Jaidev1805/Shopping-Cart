import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
    return (
        <div>
            <h1 className="home-heading">WELCOME TO REACTSTORE</h1>
            <p className="home-text">Check out our products and find something you like!</p>
            <Link to="/shop" className="home-link">Go to Shop</Link>
        </div>
    );
}

export default Home;