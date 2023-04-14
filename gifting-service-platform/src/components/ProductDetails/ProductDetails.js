import React from 'react';
import './ProductDetails.css';

const ProductDetails = ({ product }) => {
  const { name, description, price, imageUrl, customizationOptions } = product;

  return (
    <div className="product-details">
      <h2>{name}</h2>
      <img src={imageUrl} alt={name} />
      <p>{description}</p>
      <p>Price: ${price}</p>
      {customizationOptions && (
        <div className="customization-options">
          <h3>Customization Options</h3>
          <ul>
            {customizationOptions.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
