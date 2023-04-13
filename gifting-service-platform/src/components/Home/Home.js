import React from 'react';
import './Home.css'; // Create a separate CSS file for Home component styling

const Home = () => {
  return (
    <div className="home">
      <div className="banner">
        <h1>Welcome to Badd</h1>
        <p>Find the perfect gift for your Baddies!</p>
      </div>
      <div className="categories">
        <h2>Explore Our Categories</h2>
        <div className="category-list">
          <div className="category-item">
            <h3>Foods</h3>
            {/* Add an image and description for the Foods category */}
          </div>
          <div className="category-item">
            <h3>Cute & Sweet</h3>
            {/* Add an image and description for the Cute & Sweet category */}
          </div>
          <div className="category-item">
            <h3>Periods Care</h3>
            {/* Add an image and description for the Period Care category */}
          </div>
          <div className="category-item">
            <h3>Exams Care</h3>
            {/* Add an image and description for the Exam Care category */}
          </div>
          <div className="category-item">
            <h3>Birthdays</h3>
            {/* Add an image and description for the Birthdays category */}
          </div>
          <div className="category-item">
            <h3>Customize</h3>
            {/* Add an image and description for the Customize category */}
          </div>
        </div>
      </div>
      {/* Add any additional promotional content, testimonials, or other information here */}
    </div>
  );
};

export default Home;
