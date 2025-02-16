import React, { useState } from "react";
import "./container.css";

function Container({ items, addToWishlist }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    quantity: "",
  });
  const [message, setMessage] = useState("");

  const nextItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const currentItem = items[currentIndex];

  const handleBuyNowClick = () => {
    setIsFormVisible(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://httpbin.org/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage("Success");
        setIsFormVisible(false);
      })
      .catch((error) => {
        setMessage("Decline");
      });
  };

  return (
    <div className="container">
      <div className="aspect-ratio-box">
        <img src={currentItem.image} alt="merch" />
        <button
          className="wishlist-btn"
          onClick={() => addToWishlist(currentItem)}
        >
          ♥
        </button>
      </div>
      <h1 className="title">{currentItem.title}</h1>
      <div className="content">
        <div className="slidebtn">
          <button className="forwardbtn" onClick={prevItem}>
            &larr;
          </button>
          <div className="price-container">
            <span className="price-label">Price:</span>
            <p className="price">&#x20B9; {currentItem.price}</p>
          </div>
          <button className="backwardbtn" onClick={nextItem}>
            &rarr;
          </button>
        </div>
        <div className="options">
          <button className="buy_btn" onClick={handleBuyNowClick}>
            BUY NOW
          </button>
        </div>
      </div>
      {isFormVisible && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#123456",
          }}
        >
          <h2>Fill in your Details</h2>
          <form onSubmit={handleSubmit}>
            <br />
            <label>Name:</label>
            <br />
            <input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              required
            />
            <br />
            <label>Email:</label>
            <br />
            <input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            />
            <br />
            <label>Address:</label>
            <br />
            <input
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Enter your address"
              required
            />
            <br />
            <label>Quantity:</label>
            <br />
            <input
              name="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              placeholder="Enter quantity"
              required
            />
            <br />
            <button type="submit">Submit</button>
            <br />
          </form>
        </div>
      )}
      {message && <div className="message">{message}</div>}
    </div>
  );
}

export default Container;
