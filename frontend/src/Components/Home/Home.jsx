import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Booking from "../Booking/Booking";

const Home = () => {
  const contactRef = useRef(null); // Reference for Contact Section
  const bookingRef = useRef(null); // Reference for Booking Section
  const location = useLocation();

  // Scroll to Contact section when URL contains "#contact"
  useEffect(() => {
    if (location.hash === "#contact" && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  // Function to scroll to Booking section
  const scrollToBooking = () => {
    if (bookingRef.current) {
      bookingRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Header scrollToBooking={scrollToBooking} /> {/* Pass scroll function to Header */}
      <Banner />
      <div ref={contactRef}>
        <Contact />
      </div>
      <div ref={bookingRef}> {/* Add ref to Booking */}
        <Booking />
      </div>
    </div>
  );
};

export default Home;


