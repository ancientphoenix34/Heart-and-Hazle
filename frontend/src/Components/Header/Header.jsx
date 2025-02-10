import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../../assets/Heart.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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

  return (
    <div className="header">
      <img src={logo} alt="Logo" className="logo" />

      <div className="header-lists">
        {isMobile ? (
          <div>
            {/* Hamburger Icon to open menu */}
            <FaBars onClick={() => setMenuOpen(true)} className="menu-icon" />

            {/* Dropdown Floating Menu */}
            {menuOpen && (
              <div className="dropdown-menu">
                <ul>
                  <li onClick={() => setMenuOpen(false)}>Menu</li>
                  <li onClick={() => setMenuOpen(false)}>Reserve</li>
                  <li onClick={() => setMenuOpen(false)}>Private dining</li>
                  <li onClick={() => setMenuOpen(false)}>Contact</li>
                  <li onClick={() => setMenuOpen(false)}>About</li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <ul className="desktop-menu">
            <li>Menu</li>
            <li>Reserve</li>
            <li>Private dining</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        )}
      </div>

      {/* Background overlay when menu is open */}
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}
    </div>
  );
};

export default Header;
