import React from 'react';
import './Category.css';

const Category = () => {
  const categories = [
    'Foods',
    'Cute & Sweet',
    'Period Care',
    'Exam Care',
    'Birthdays',
    'Customize',
  ];

  return (
    <div className="category">
      <h2>Product Categories</h2>
      <div className="category-list">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <h3>{category}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
