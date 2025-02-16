import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import img2 from "./assets/images/img2.jpg";
import img3 from "./assets/images/img3.jpg";
import img4 from "./assets/images/img4.jpg";
import img5 from "./assets/images/img5.jpg";
import img6 from "./assets/images/img6.jpg";
import img7 from "./assets/images/img7.jpg";
import img8 from "./assets/images/img8.jpg";
import "./App.css";
import Container from "./components/container.jsx";
const items = [
  {
    image: img2,
    title: "White Hoodie",
    price: 1000,
  },
  {
    image: img3,
    title: "White Hoodie",
    price: 700,
  },
  {
    image: img4,
    title: "White Hoodie",
    price: 1100,
  },
  {
    image: img5,
    title: "White Hoodie",
    price: 1050,
  },
  {
    image: img6,
    title: "White Hoodie",
    price: 1120,
  },
  {
    image: img7,
    title: "White Hoodie",
    price: 1500,
  },
  {
    image: img8,
    title: "White Hoodie",
    price: 1200,
  },
];

function App() {
  const [wishlist, setWishlist] = useState([]);
  const [showWishlist, setShowWishlist] = useState(false);
  const addToWishlist = (item) => {
    setWishlist((prevWishlist) => [...prevWishlist, item]);
  };
  return (
    <Router>
      <div className="main">
        <h1>BITS.merch</h1>
        <p className="first">Here You Go...</p>
        <Link to="/wishlist">Go to Wishlist</Link>
        <Routes>
          <Route
            path="/"
            element={<Container items={items} addToWishlist={addToWishlist} />}
          />
          <Route
            path="/wishlist"
            element={<WishlistComponent items={wishlist} />}
          />
        </Routes>
      </div>
    </Router>
  );
}
function WishlistComponent({ items }) {
  return (
    <div style={{ color: "#123456" }}>
      <h2>Wishlist</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.title} - ₹{item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
