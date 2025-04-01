import React, { useContext, useState } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const [showAll, setShowAll] = useState(false);

  // Filter items based on category
  const filteredItems = food_list.filter(
    (item) => category === "All" || category === item.category
  );

  // Determine items to show
  const itemsToShow =
    category === "All" && !showAll ? filteredItems.slice(0, 6) : filteredItems;

  return (
    <div className="food-display" id="food-display">
      {/* <h2>Top Dishes Near You</h2> */}
      <div className="food-display-text">
        <h2>Explore Culinary Delights</h2>
        <p className="food-display-subtitle">
          Discover handcrafted dishes made with love by our talented chefs
        </p>
      </div>
      <div className="food-display-list">
        {itemsToShow.map((item) => (
          <FoodItem
            key={item._id}
            id={item._id}
            name={item.name}
            description={item.description}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
      {category === "All" && filteredItems.length > 6 && (
        // <button className="show-more-btn" onClick={() => setShowAll(!showAll)}>
        //   {showAll ? "Show Less" : "Show More"}
        // </button>
        <button className="show-more-btn" onClick={() => setShowAll(!showAll)}>
          <span>{showAll ? "Show Less" : "Show More"}</span>
          <i className={`fas fa-chevron-${showAll ? "up" : "down"}`}></i>
        </button>
      )}
    </div>
  );
};

export default FoodDisplay;
