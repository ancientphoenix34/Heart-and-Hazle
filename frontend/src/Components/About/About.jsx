import React from "react";
import "./About.css"; // Import CSS file
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-container">
      {/* Restaurant Introduction */}
      <div className="about-section">
        <h1>About Heart & Hazle</h1>
        <p>
          Girl & the Goat is a vibrant, globally inspired restaurant founded by 
          Chef Stephanie Izard. Since its opening in Los Angeles in 2021, the restaurant 
          has embraced the rich, seasonal bounty of California, crafting innovative dishes 
          that bring bold flavors and a communal dining experience. From its roots in Chicago 
          to its sun-kissed expansion in LA, Girl & the Goat continues to blend global influences 
          with fresh, local ingredients.
        </p>
      </div>

      {/* Join the Herd Section */}
      <div className="join-section">
        <h2>Join the Herd!</h2>
        <p>Join our mailing list and keep up with all the exciting things.</p>
        <button className="join-button">Sign Me Up</button>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-logo">
          <h3>Heart & Hazle</h3>
          <p>UAE</p>
        </div>

        <div className="footer-links">
          <Link to="#">Website Accessibility</Link>
          <Link to="#">Gift Cards</Link>
          <Link to="#">Dining Credit Bonus</Link>
          <Link to="#">Site Map</Link>
          <Link to="#">Join Our Team</Link>
          <Link to="#">Press</Link>
        </div>

        <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="social-icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
        </div>

        <p className="sister-restaurant">
          Visit our sister restaurant <Link to="#">Cabra</Link>
        </p>
      </footer>
    </div>
  );
};

export default About;

