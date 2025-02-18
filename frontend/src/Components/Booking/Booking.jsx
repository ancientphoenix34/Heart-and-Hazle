import React from "react";
import "./Booking.css"; // Import CSS file
import chefImage from "../../assets/chefimage.jpg"; // Replace with actual image path
import foodImage from "../../assets/foodImage.jpg"; // Replace with actual image path
import reservationBg from "../../assets/wallpaper.jpg"; // Replace with actual image path
import { Link } from "react-router-dom";

const Booking = () => {
  return (
    <div className="booking-container">
      {/* Top Section - Images & Description */}
      <div className="top-section">
        <div className="image-container">
          <img src={chefImage} alt="Chefs cooking" className="top-image" />
          <img src={foodImage} alt="Delicious food" className="top-image" />
        </div>
        <div className="text-container">
          <h2>GIRL & THE GOAT LOS ANGELES</h2>
          <p>
            In summer 2021, Girl & the Goat went west for sunny skies and new 
            culinary adventures. Chef Stephanie Izard and her team are thrilled 
            to be part of LA’s vibrant restaurant community and take advantage 
            of the area’s incredible bounty of produce and long growing seasons. 
            While Girl & the Goat shares the global influence and bold flavors of 
            its Chicago flagship, the culinary team is always crafting new dishes 
            inspired by California produce and local flavors.
          </p>
        </div>
      </div>

      {/* Reservation Section */}
      <div className="reservation-section" style={{ backgroundImage: `url(${reservationBg})` }}>
        <h2 className="reservation-title">Make a Reservation</h2>
        <button className="reservation-button" ><Link to="/reserve">Find a Table</Link></button>
      </div>
    </div>
  );
};

export default Booking;

