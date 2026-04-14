# Shopping Cart App

A responsive React-based e-commerce storefront showcasing a multi-page application with functional cart operations.

This project was built as part of [The Odin Project's Node Path - React New Shopping Cart Project](https://www.theodinproject.com/lessons/node-path-react-new-shopping-cart#project-solution).

## Project Features
- **Browse Products:** View a list of products fetched dynamically (from FakeStoreAPI).
- **Product Details:** Click on a product to view more specific details like description, category, and an enlarged image.
- **Cart Management:** 
  - Add products to the cart from the shop or product detail pages.
  - View items currently in the cart.
  - Increment or decrement quantities directly within the cart.
  - Remove specific items or clear the entire cart.
- **Checkout Process:** Simulated checkout that summarizes the total price and clears the cart upon completion.
- **Dynamic Routing:** Multi-page navigation and view rendering using `react-router-dom` without full page reloads.

## Tech Stack
- **Frontend Framework:** React (v19) via Vite
- **Routing:** React Router v7 (`react-router-dom`)
- **Styling:** Vanilla CSS 

## React Concepts Practiced
- **Functional Components:** Creating modular, reusable UI blocks like `ProductCard`, `NavBar`, and `CartItem`.
- **Props:** Passing data and state updater functions throughout the component tree.
- **State Management (`useState`):** Managing the global cart state array containing objects with `id` and `quantity`.
- **Side Effects (`useEffect`):** Securely handling asynchronous operations like fetching API data on component mount.
- **Client-Side Routing:** Setting up defined routes, handling URL parameters, and creating a persistent layout (`<BrowserRouter>`, `<Routes>`, `<Route>`).
- **Array Methods:** Applying `filter`, `map`, `reduce`, and `find` to handle cart count, total prices, and avoiding duplicate items.

## File Structure

```text
src/
├── api/             
├── components/      
│   ├── CartItem.jsx
│   ├── NavBar.jsx
│   └── ProductCard.jsx
├── pages/           
│   ├── home.jsx
│   ├── shop.jsx
│   ├── details.jsx
│   └── cart.jsx
├── styles/          
│   ├── Cart.css
│   ├── CartItem.css
│   ├── Details.css
│   ├── Home.css
│   ├── NavBar.css
│   ├── ProductCard.css
│   └── Shop.css
├── App.jsx          
├── App.css          
└── main.jsx
```

## Installation & Setup

To get a local copy up and running, follow these simple steps.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Jaidev1805/Shopping-Cart.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd Shopping-react
   ```

3. **Install NPM Packages:**
   ```bash
   npm install
   ```

4. **Run the Development Server:**
   ```bash
   npm run dev
   ```

5. **View the Application:**
   Open the Local address provided in the terminal (`http://localhost:5173`) in your browser to view the app!