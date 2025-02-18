import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";

const Home = () => {
  const contactRef = useRef(null);
  const location = useLocation(); // Detects current page URL

  // Scroll to Contact section if the URL contains "#contact"
  useEffect(() => {
    if (location.hash === "#contact" && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div>
      <Header />
      <Banner />
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
};

export default Home;

