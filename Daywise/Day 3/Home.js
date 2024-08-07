import React, { useState } from 'react';
import './Home.css'; // Import a CSS file to style the Home component

// Import images
import InstagramIcon from './footer/instagram.png';
import TwitterIcon from './footer/twitter.png';
import FacebookIcon from './footer/facebook.png';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    // Implement search functionality here
  };

  const handleSearchSubmit = () => {
    // Implement search functionality here
    alert(`Searching for: ${searchTerm}`);
  };

  return (
    <div className="home-container">
      <header className="header">
        <h1>OPPORTUNITY</h1>
      </header>
      <main>
        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Search for jobs and companies..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-bar"
          />
          <button className="search-button" onClick={handleSearchSubmit}>
            Search
          </button>
        </div>
      </main>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about-us">
            <h3>About Us</h3>
            <p>We are a leading job portal providing the best job opportunities and company information to job seekers.</p>
          </div>
          <div className="footer-section contact-us">
            <h3>Contact Us</h3>
            <p>Email: support@jobportal.com</p>
            <p>Phone: +1-234-567-890</p>
          </div>
        </div>
        <div className="footer-bottom">
          <h3>Follow Us On</h3>
          <div className="social-media">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={InstagramIcon} alt="Instagram" className="social-icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={TwitterIcon} alt="Twitter" className="social-icon" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={FacebookIcon} alt="Facebook" className="social-icon" />
            </a>
          </div>
        </div>
        <p>&copy; 2024 Job Portal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
