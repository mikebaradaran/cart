// src/components/Cart.js

import React from 'react';

function Cart({ cartItems }) {
  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (<p>Your cart is empty</p>) :
        (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                Quantity:{item.quantity} - 
                {item.product.name} - ${item.product.price.toFixed(2) }
              </li>
            ))}
          </ul>
        )}
    </div>
  );
}

export default Cart;
