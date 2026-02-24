import { useState } from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "iPhone 15",
    price: 79999,
    oldPrice: 89999,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569"
  },
  {
    id: 2,
    name: "Nike Air Shoes",
    price: 4999,
    oldPrice: 6999,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  },
  {
    id: 3,
    name: "HP Laptop",
    price: 55999,
    oldPrice: 62999,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
  },
  {
    id: 4,
    name: "Wireless Headphones",
    price: 1999,
    oldPrice: 2999,
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1580894908361-967195033215"
  }
];

function App() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <>
      <nav className="navbar">
        <h2 className="logo">QuickMart</h2>
        <input type="text" placeholder="Search for products..." className="search" />
        <div className="cart">🛒 {cartCount}</div>
      </nav>

      <div className="product-container">
        {products.map((product) => {
          const discount = Math.round(
            ((product.oldPrice - product.price) / product.oldPrice) * 100
          );

          return (
            <div key={product.id} className="card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>

              <div className="price-section">
                <span className="new-price">₹{product.price}</span>
                <span className="old-price">₹{product.oldPrice}</span>
                <span className="discount">{discount}% off</span>
              </div>

              <div className="rating">⭐ {product.rating}</div>

              <button onClick={addToCart}>Add to Cart</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;