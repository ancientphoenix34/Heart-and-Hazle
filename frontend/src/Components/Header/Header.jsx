import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../../assets/Heart.png";
import { FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ scrollToBooking }) => { // Accept scroll function as a prop
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();

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

  // Navigate to Home first, then scroll to Contact
  const handleContactClick = () => {
    navigate("/");
    setTimeout(() => {
      window.location.hash = "contact";
    }, 100);
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
                  <li onClick={() => { scrollToBooking(); setMenuOpen(false); }}>Reserve</li> {/* Scroll instead of navigating */}
                  <li onClick={() => setMenuOpen(false)}>Private Dining</li>
                  <li onClick={() => { handleContactClick(); setMenuOpen(false); }}>Contact</li>
                  <li onClick={() => setMenuOpen(false)}>About</li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <ul className="desktop-menu">
            <li>Menu</li>
            <li onClick={scrollToBooking}>Reserve</li> {/* Updated to scroll */}
            <li>Private Dining</li>
            <li onClick={handleContactClick}>Contact</li>
            <li>About</li>
          </ul>
        )}
      </div>

      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}
    </div>
  );
};

export default Header;

