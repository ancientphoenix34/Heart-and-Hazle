import React from "react";
import { FaPhoneAlt, FaEnvelope,FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css"; // Import external CSS

const Contact = () => {
  const contacts = [
    {
      icon: <FaMapMarkerAlt className="icon" />, // Address Icon
      text: "123 Downtown Street, Dubai, UAE", // Address Text
    },
    {
      icon: <FaPhoneAlt className="icon" />,
      text: "+971 58895 1272",
    },
    {
      icon: <FaEnvelope className="icon" />,
      text: "H@Hgroupofrestuarents.com",
    },
  ];

  return (
    <div className="contact-section">
      <div className="contact-container">
        <h3 className="contact-subtitle">Contact</h3>
        <h2 className="contact-title">Get In Touch</h2>
        <div className="contact-cards">
          {contacts.map((item, index) => (
            <div key={index} className="contact-card">
              {item.icon}
              <p className="contact-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
