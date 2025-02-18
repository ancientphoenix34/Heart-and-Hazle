import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../../assets/Heart.png";
import { FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  // Function to navigate to Home and then Contact
  const handleContactClick = () => {
    navigate("/"); // Navigate to Home first
    setTimeout(() => {
      window.location.hash = "contact"; // Update URL to #contact
    }, 100); // Short delay to allow navigation
  };

  return (
    <div className="header">
      <Link to="/"><img src={logo} alt="Logo" className="logo" /></Link>

      <div className="header-lists">
        {isMobile ? (
          <div>
            <FaBars onClick={() => setMenuOpen(true)} className="menu-icon" />

            {menuOpen && (
              <div className="dropdown-menu">
                <ul>
                  <li onClick={() => setMenuOpen(false)}>Menu</li>
                  <li onClick={() => setMenuOpen(false)}><Link to="/reserve">Reserve</Link></li>
                  <li onClick={() => setMenuOpen(false)}>Private Dining</li>
                  <li onClick={() => { handleContactClick(); setMenuOpen(false); }}>Contact</li> {/* Updated */}
                  <li onClick={() => setMenuOpen(false)}>About</li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <ul className="desktop-menu">
            <li>Menu</li>
            <li><Link to="/reserve">Reserve</Link></li>
            <li>Private Dining</li>
            <li onClick={handleContactClick}>Contact</li> {/* Updated */}
            <li>About</li>
          </ul>
        )}
      </div>

      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}
    </div>
  );
};

export default Header;

