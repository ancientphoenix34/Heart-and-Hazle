import React, { useState } from "react";
import "./Menu.css";
import Header from "../../Components/Header/Header";

const menuData = {
  dinner: {
    "Bread & Snacks": [
      { name: "naan & dips", description: "tzatziki . carrot 'hummus'", price: "19" },
      { name: "olive focaccia", description: "blue labneh . grape-tomato-pepper relish", price: "14" },
      { name: "goat liver mousse", description: "crumpets . biscuit crackers . craisin relish . seasonal jam", price: "23" },
    ],
    "Veggies": [
      { name: "crispy brussels sprouts", description: "sichuan peanut dressing . pickled peppers", price: "19" },
      { name: "roasted beet", description: "yuzu kosho vinaigrette . party nuts . golden beet giardiniera", price: "21" },
      { name: "chickpea fritters", description: "goat yogurt . herb chutney . tamarind . sev crunch", price: "17" },
      { name: "grilled corn", description: "spiced coconut caramel . cotija . tajin", price: "15" },
    ],
  }
};

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("dinner");

  return (
    <div className="menu-container">
      <Header />
      {/* Category Selection */}
      <div className="menu-buttons">
        {Object.keys(menuData).map((category) => (
          <button
            key={category}
            className={`menu-btn ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Display */}
      <div className="menu-content">
        <h2 className="menu-heading">{selectedCategory} Menu</h2>
        {Object.keys(menuData[selectedCategory]).map((subcategory, index) => (
          <div key={index} className="menu-subcategory">
            <h3 className="subcategory-title">{subcategory}</h3>
            <div className="menu-items">
              {menuData[selectedCategory][subcategory].map((item, idx) => (
                <div className="menu-item-row" key={idx}>
                  <div className="menu-item">
                    <span className="menu-name">{item.name}</span>
                    <span className="menu-price">{item.price}</span>
                  </div>
                  <p className="menu-description">{item.description}</p>
                  <hr className="menu-divider" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;



