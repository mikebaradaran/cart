// src/App.js

import React, { useState } from 'react';
import ProductList from './ProductList ';
import Cart from './Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 12.99 },
    { id: 3, name: 'Product 3', price: 15.99 },
  ];

  const addToCart = (product) => {
    for (let item of cartItems) {
      if (item.product.id == product.id) {
        item.quantity++;
        setCartItems([...cartItems]);
        return;
      }
    }
    setCartItems([...cartItems, { "product": product, "quantity": 1 }]);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default App;
