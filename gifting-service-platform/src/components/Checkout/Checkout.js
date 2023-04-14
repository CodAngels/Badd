import React, { useState } from 'react';
import publishable_key from './gitignore';
import { loadStripe } from '@stripe/stripe-js';
import Checkout from './components/Checkout/Checkout';
import { CardElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js';


const [stripePromise, setStripePromise] = useState(() => loadStripe('<publishable_key>'));
const Checkout = ({ onPlaceOrder }) => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await handleStripePayment();
    onPlaceOrder(userInfo);
  };
  

  const handleStripePayment = async () => {
    const stripe = useStripe();
    const elements = useElements();
  
    if (!stripe || !elements) {
      return;
    }
  
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });
  
    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      // Send paymentMethod.id to your server to process the payment
    }
  };

  <Elements stripe={stripePromise}>
    <Checkout onPlaceOrder={handlePlaceOrder} />
  </Elements>
  
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={userInfo.name} onChange={handleChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={userInfo.email} onChange={handleChange} required />

        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" value={userInfo.address} onChange={handleChange} required />

        <label htmlFor="city">City:</label>
        <input type="text" id="city" name="city" value={userInfo.city} onChange={handleChange} required />

        <label htmlFor="zip">ZIP Code:</label>
        <input type="text" id="zip" name="zip" value={userInfo.zip} onChange={handleChange} required />

        {/* Add your payment processing logic here */}
        <CardElement />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
