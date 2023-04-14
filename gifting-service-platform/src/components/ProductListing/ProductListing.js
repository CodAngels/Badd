import React from 'react';
import { sampleProducts } from './sampleProducts';
import './ProductListing.css';

const ProductListing = ({ category }) => {
  const products = sampleProducts.filter(
    (product) => product.category === category
  );

  return (
    <div className="product-listing">
      <h2>{category} Packages</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
