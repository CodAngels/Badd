import React from 'react';

const ShoppingCart = ({ cartItems, onUpdateQuantity, onRemoveItem, onCheckout }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  if (cartItems.length === 0) {
    return <div className="shopping-cart">Your shopping cart is empty.</div>;
  }

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <div>
              {item.product.name} - ${item.product.price} x {item.quantity}
            </div>
            <div>
              <button onClick={() => onUpdateQuantity(item, item.quantity - 1)}>-</button>
              <button onClick={() => onUpdateQuantity(item, item.quantity + 1)}>+</button>
              <button onClick={() => onRemoveItem(item)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <div>Total: ${calculateTotal().toFixed(2)}</div>
      <button onClick={onCheckout}>Checkout</button>
    </div>
  );
};

export default ShoppingCart;
