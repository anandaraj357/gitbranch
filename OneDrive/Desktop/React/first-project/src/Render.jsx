// App.js
import React from "react";

function Render() {
  // Array of products
  const products = [
    { id: 1, name: "Laptop", price: 55000, category: "Electronics" },
    { id: 2, name: "Smartphone", price: 25000, category: "Electronics" },
    { id: 3, name: "Washing Machine", price: 30000, category: "Home Appliance" },
    { id: 4, name: "Table", price: 5000, category: "Furniture" },
    { id: 5, name: "Headphones", price: 2000, category: "Accessories" }
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>🛒 Product List</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {products.map((product) => (
          <div 
            key={product.id} 
            style={{
              border: "1px solid #333",
              borderRadius: "10px",
              padding: "15px",
              margin: "10px",
              width: "200px",
              textAlign: "left",
              boxShadow: "2px 2px 10px rgba(164, 52, 52, 0.2)"
            }}
          >
            <h2>{product.name}</h2>
            <p><b>Price:</b> ₹{product.price}</p>
            <p><b>Category:</b> {product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Render;